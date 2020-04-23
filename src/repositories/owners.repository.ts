import {DefaultCrudRepository} from '@loopback/repository';
import {Owners, OwnersRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OwnersRepository extends DefaultCrudRepository<
  Owners,
  typeof Owners.prototype.id,
  OwnersRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(Owners, dataSource);
  }
}
