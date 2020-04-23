import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'addresses'}}
})
export class Addresses extends Entity {
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
    postgresql: {columnName: 'owner_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  ownerId: number;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'city', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  city?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'country', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'street', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  street?: string;

  @property({
    type: 'string',
    length: 10,
    postgresql: {columnName: 'zipcode', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  zipcode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Addresses>) {
    super(data);
  }
}

export interface AddressesRelations {
  // describe navigational properties here
}

export type AddressesWithRelations = Addresses & AddressesRelations;
