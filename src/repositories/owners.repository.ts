import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Owners, OwnersRelations, Addresses} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AddressesRepository} from './addresses.repository';

export class OwnersRepository extends DefaultCrudRepository<
  Owners,
  typeof Owners.prototype.id,
  OwnersRelations
> {

  public readonly addresses: HasOneRepositoryFactory<Addresses, typeof Owners.prototype.id>;

  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource, @repository.getter('AddressesRepository') protected addressesRepositoryGetter: Getter<AddressesRepository>,
  ) {
    super(Owners, dataSource);
    this.addresses = this.createHasOneRepositoryFactoryFor('addresses', addressesRepositoryGetter);
    this.registerInclusionResolver('addresses', this.addresses.inclusionResolver);
  }
}
