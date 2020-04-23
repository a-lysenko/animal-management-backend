import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pets,
  Owners,
} from '../models';
import {PetsRepository} from '../repositories';

export class PetsOwnersController {
  constructor(
    @repository(PetsRepository)
    public petsRepository: PetsRepository,
  ) { }

  @get('/pets/{id}/owners', {
    responses: {
      '200': {
        description: 'Owners belonging to Pets',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Owners)},
          },
        },
      },
    },
  })
  async getOwners(
    @param.path.number('id') id: typeof Pets.prototype.id,
  ): Promise<Owners> {
    return this.petsRepository.owners(id);
  }
}
