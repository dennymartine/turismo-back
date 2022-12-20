import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TurismodbDataSource} from '../datasources';
import {Sitio, SitioRelations} from '../models';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.id,
  SitioRelations
> {
  constructor(
    @inject('datasources.turismodb') dataSource: TurismodbDataSource,
  ) {
    super(Sitio, dataSource);
  }
}
