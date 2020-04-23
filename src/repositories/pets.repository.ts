import {DefaultCrudRepository} from '@loopback/repository';
import {Pets, PetsRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PetsRepository extends DefaultCrudRepository<
  Pets,
  typeof Pets.prototype.id,
  PetsRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(Pets, dataSource);
  }
}
