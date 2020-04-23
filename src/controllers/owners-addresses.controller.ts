import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Owners,
  Addresses,
} from '../models';
import {OwnersRepository} from '../repositories';

export class OwnersAddressesController {
  constructor(
    @repository(OwnersRepository) protected ownersRepository: OwnersRepository,
  ) { }

  @get('/owners/{id}/addresses', {
    responses: {
      '200': {
        description: 'Owners has one Addresses',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Addresses),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Addresses>,
  ): Promise<Addresses> {
    return this.ownersRepository.addresses(id).get(filter);
  }

  @post('/owners/{id}/addresses', {
    responses: {
      '200': {
        description: 'Owners model instance',
        content: {'application/json': {schema: getModelSchemaRef(Addresses)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Owners.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Addresses, {
            title: 'NewAddressesInOwners',
            exclude: ['id'],
            optional: ['owner_id']
          }),
        },
      },
    }) addresses: Omit<Addresses, 'id'>,
  ): Promise<Addresses> {
    return this.ownersRepository.addresses(id).create(addresses);
  }

  @patch('/owners/{id}/addresses', {
    responses: {
      '200': {
        description: 'Owners.Addresses PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Addresses, {partial: true}),
        },
      },
    })
    addresses: Partial<Addresses>,
    @param.query.object('where', getWhereSchemaFor(Addresses)) where?: Where<Addresses>,
  ): Promise<Count> {
    return this.ownersRepository.addresses(id).patch(addresses, where);
  }

  @del('/owners/{id}/addresses', {
    responses: {
      '200': {
        description: 'Owners.Addresses DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Addresses)) where?: Where<Addresses>,
  ): Promise<Count> {
    return this.ownersRepository.addresses(id).delete(where);
  }
}
