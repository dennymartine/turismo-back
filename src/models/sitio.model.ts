import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sitio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string'
  })
  tipo?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  pais?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}

export interface SitioRelations {
  // describe navigational properties here
}

export type SitioWithRelations = Sitio & SitioRelations;
