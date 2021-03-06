import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Animals} from './animals.model';
import {Owners} from './owners.model';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'pets'}}})
export class Pets extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'animal_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  animalId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'owner_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  ownerId: number;

  @belongsTo(() => Animals, {name: 'animals'})
  animal_id: number;

  @belongsTo(() => Owners, {name: 'owners'})
  owner_id: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pets>) {
    super(data);
  }
}

export interface PetsRelations {
  // describe navigational properties here
}

export type PetsWithRelations = Pets & PetsRelations;
