import {DefaultCrudRepository} from '@loopback/repository';
import {Animals, AnimalsRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnimalsRepository extends DefaultCrudRepository<
  Animals,
  typeof Animals.prototype.id,
  AnimalsRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(Animals, dataSource);
  }
}
