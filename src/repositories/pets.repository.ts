import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Pets, PetsRelations, Animals, Owners} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AnimalsRepository} from './animals.repository';
import {OwnersRepository} from './owners.repository';

export class PetsRepository extends DefaultCrudRepository<
  Pets,
  typeof Pets.prototype.id,
  PetsRelations
> {

  public readonly animals: BelongsToAccessor<Animals, typeof Pets.prototype.id>;

  public readonly owners: BelongsToAccessor<Owners, typeof Pets.prototype.id>;

  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource, @repository.getter('AnimalsRepository') protected animalsRepositoryGetter: Getter<AnimalsRepository>, @repository.getter('OwnersRepository') protected ownersRepositoryGetter: Getter<OwnersRepository>,
  ) {
    super(Pets, dataSource);
    this.owners = this.createBelongsToAccessorFor('owners', ownersRepositoryGetter,);
    this.registerInclusionResolver('owners', this.owners.inclusionResolver);
    this.animals = this.createBelongsToAccessorFor('animals', animalsRepositoryGetter,);
    this.registerInclusionResolver('animals', this.animals.inclusionResolver);
  }
}
