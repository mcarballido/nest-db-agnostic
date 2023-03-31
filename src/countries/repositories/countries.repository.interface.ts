import { Inject } from '@nestjs/common';
import { Country } from '../entities/country.entity';

export interface CountriesRepository {
  create(country: Country): Promise<Country>;
  findAll(): Promise<Country[]>;
}

export const COUNTRIES_REPOSITORY_TOKEN = 'countries-repository-token';

export const InjectCountriesRepository = () =>
  Inject(COUNTRIES_REPOSITORY_TOKEN);
