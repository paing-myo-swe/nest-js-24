import { PropertyFeature } from '../entities/propertyFeature.entity';
import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const propertyFeature = new PropertyFeature();
  propertyFeature.bedrooms = faker.number.int({ min: 1, max: 5 });
  propertyFeature.bathrooms = faker.number.int({ min: 1, max: 5 });
  propertyFeature.parkingSpots = faker.number.int({ min: 1, max: 5 });
  propertyFeature.area = faker.number.int({ min: 50, max: 500 });
  propertyFeature.hasSwimmingPool = faker.datatype.boolean();
  propertyFeature.hasGardenYard = faker.datatype.boolean();
  propertyFeature.hasBalcony = faker.datatype.boolean();
  return propertyFeature;
});
