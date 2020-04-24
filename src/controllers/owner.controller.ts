import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Owners} from '../models';
import {OwnersRepository} from '../repositories';

export class OwnerController {
  constructor(
    @repository(OwnersRepository)
    public ownersRepository : OwnersRepository,
  ) {}

  @post('/owners', {
    responses: {
      '200': {
        description: 'Owners model instance',
        content: {'application/json': {schema: getModelSchemaRef(Owners)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owners, {
            title: 'NewOwners',
            exclude: ['id'],
          }),
        },
      },
    })
    owners: Omit<Owners, 'id'>,
  ): Promise<Owners> {
    const createdOwner = await this.ownersRepository.create({fullname: owners.fullname});

    await this.ownersRepository.addresses(createdOwner.id).create({
      ownerId: createdOwner.id,
      city: owners.city,
      country: owners.country,
      street: owners.street,
      zipcode: owners.zipcode
    });

    return createdOwner;
  }

  @get('/owners', {
    responses: {
      '200': {
        description: 'Array of Owners model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Owners, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Owners) filter?: Filter<Owners>,
  ): Promise<Owners[]> {
    return this.ownersRepository.find(
      {
        include: [{relation: 'addresses'}],
        ...filter
      }
        );
  }

  @patch('/owners', {
    responses: {
      '200': {
        description: 'Owners PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owners, {partial: true}),
        },
      },
    })
    owners: Owners,
    @param.where(Owners) where?: Where<Owners>,
  ): Promise<Count> {
    return this.ownersRepository.updateAll(owners, where);
  }

  @get('/owners/{id}', {
    responses: {
      '200': {
        description: 'Owners model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Owners, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Owners, {exclude: 'where'}) filter?: FilterExcludingWhere<Owners>
  ): Promise<Owners> {
    return this.ownersRepository.findById(id, {
      fields: {
        id: true,
        fullname: true
      },
      include: [{relation: 'addresses'}],
      ...filter
    });
  }

  @patch('/owners/{id}', {
    responses: {
      '204': {
        description: 'Owners PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owners, {partial: true}),
        },
      },
    })
    owners: Owners,
  ): Promise<void> {
    await this.ownersRepository.updateById(id, owners);
  }

  @put('/owners/{id}', {
    responses: {
      '204': {
        description: 'Owners PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() owners: Owners,
  ): Promise<void> {
    await this.ownersRepository.replaceById(id, owners);
  }

  @del('/owners/{id}', {
    responses: {
      '204': {
        description: 'Owners DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ownersRepository.deleteById(id);
  }
}
