import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {WildAnimals, WildAnimalsRelations, Animals} from '../models';
import {AnimalManagementDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AnimalsRepository} from './animals.repository';

export class WildAnimalsRepository extends DefaultCrudRepository<
  WildAnimals,
  typeof WildAnimals.prototype.id,
  WildAnimalsRelations
> {

  public readonly animals: BelongsToAccessor<Animals, typeof WildAnimals.prototype.id>;

  constructor(
    @inject('datasources.animalManagement') dataSource: AnimalManagementDataSource, @repository.getter('AnimalsRepository') protected animalsRepositoryGetter: Getter<AnimalsRepository>,
  ) {
    super(WildAnimals, dataSource);
    this.animals = this.createBelongsToAccessorFor('animals', animalsRepositoryGetter,);
    this.registerInclusionResolver('animals', this.animals.inclusionResolver);
  }
}
