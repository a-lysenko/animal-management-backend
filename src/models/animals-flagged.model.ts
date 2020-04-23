import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'animals_flagged'}}
})
export class AnimalsFlagged extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

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

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'petid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  petid?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'ispet', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ispet?: boolean;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'wildid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  wildid?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'iswild', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  iswild?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AnimalsFlagged>) {
    super(data);
  }
}

export interface AnimalsFlaggedRelations {
  // describe navigational properties here
}

export type AnimalsFlaggedWithRelations = AnimalsFlagged & AnimalsFlaggedRelations;
