import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  WildAnimals,
  Animals,
} from '../models';
import {WildAnimalsRepository} from '../repositories';

export class WildAnimalsAnimalsController {
  constructor(
    @repository(WildAnimalsRepository)
    public wildAnimalsRepository: WildAnimalsRepository,
  ) { }

  @get('/wild-animals/{id}/animals', {
    responses: {
      '200': {
        description: 'Animals belonging to WildAnimals',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Animals)},
          },
        },
      },
    },
  })
  async getAnimals(
    @param.path.number('id') id: typeof WildAnimals.prototype.id,
  ): Promise<Animals> {
    return this.wildAnimalsRepository.animals(id);
  }
}
