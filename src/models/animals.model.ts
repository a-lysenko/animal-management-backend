import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'animals'}}
})
export class Animals extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'birthday', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  birthday?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'species', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  species?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'vaccinated', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vaccinated?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Animals>) {
    super(data);
  }
}

export interface AnimalsRelations {
  // describe navigational properties here
}

export type AnimalsWithRelations = Animals & AnimalsRelations;
