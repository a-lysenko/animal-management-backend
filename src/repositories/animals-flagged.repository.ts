import {DefaultCrudRepository} from '@loopback/repository';
import {AnimalsFlagged, AnimalsFlaggedRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnimalsFlaggedRepository extends DefaultCrudRepository<
  AnimalsFlagged,
  typeof AnimalsFlagged.prototype.id,
  AnimalsFlaggedRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(AnimalsFlagged, dataSource);
  }
}
