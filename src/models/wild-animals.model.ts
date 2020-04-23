import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Animals} from './animals.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'wild_animals'}}
})
export class WildAnimals extends Entity {
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
    postgresql: {columnName: 'trackingid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  trackingid: number;

  @belongsTo(() => Animals, {name: 'animals'})
  animal_id: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WildAnimals>) {
    super(data);
  }
}

export interface WildAnimalsRelations {
  // describe navigational properties here
}

export type WildAnimalsWithRelations = WildAnimals & WildAnimalsRelations;
