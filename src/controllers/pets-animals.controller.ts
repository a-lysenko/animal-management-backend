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
  Animals,
} from '../models';
import {PetsRepository} from '../repositories';

export class PetsAnimalsController {
  constructor(
    @repository(PetsRepository)
    public petsRepository: PetsRepository,
  ) { }

  @get('/pets/{id}/animals', {
    responses: {
      '200': {
        description: 'Animals belonging to Pets',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Animals)},
          },
        },
      },
    },
  })
  async getAnimals(
    @param.path.number('id') id: typeof Pets.prototype.id,
  ): Promise<Animals> {
    return this.petsRepository.animals(id);
  }
}
