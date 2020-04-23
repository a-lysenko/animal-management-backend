import {DefaultCrudRepository} from '@loopback/repository';
import {WildAnimals, WildAnimalsRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WildAnimalsRepository extends DefaultCrudRepository<
  WildAnimals,
  typeof WildAnimals.prototype.id,
  WildAnimalsRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(WildAnimals, dataSource);
  }
}
