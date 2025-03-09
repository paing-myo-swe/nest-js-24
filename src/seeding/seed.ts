import { dbConfig } from '../../db.config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from '../seeding/property.factory';
import { UserFactory } from '../seeding/user.factory';
import { PropertyFeatureFactory } from '../seeding/propertyFeature.factory';
import { MainSeeder } from '../seeding/main.seeder';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig,
  factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});
