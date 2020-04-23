import {DefaultCrudRepository} from '@loopback/repository';
import {Addresses, AddressesRelations} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AddressesRepository extends DefaultCrudRepository<
  Addresses,
  typeof Addresses.prototype.id,
  AddressesRelations
> {
  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource,
  ) {
    super(Addresses, dataSource);
  }
}
