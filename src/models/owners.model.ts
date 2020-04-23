import {Entity, model, property, hasOne} from '@loopback/repository';
import {Addresses} from './addresses.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'owners'}}
})
export class Owners extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 80,
    postgresql: {columnName: 'fullname', dataType: 'character varying', dataLength: 80, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fullname: string;

  @hasOne(() => Addresses, {keyTo: 'owner_id'})
  addresses: Addresses;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Owners>) {
    super(data);
  }
}

export interface OwnersRelations {
  // describe navigational properties here
}

export type OwnersWithRelations = Owners & OwnersRelations;
