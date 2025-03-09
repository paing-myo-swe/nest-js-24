import { Property } from '../entities/property.entity';
import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export const PropertyFactory = setSeederFactory(Property, () => {
  const property = new Property();
  property.name = faker.location.street();
  property.description = faker.lorem.sentence();
  property.price = faker.number.int({ min: 100000, max: 1000000 });

  return property;
});
