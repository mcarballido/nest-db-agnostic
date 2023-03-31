import { Country } from 'src/countries/entities/country.entity';
import { CountriesRepository } from '../countries.repository.interface';

export class CountriesInMemoryRepository implements CountriesRepository {
  private countries: Country[] = [];

  async create(country: Country) {
    this.countries.push(country);
    return country;
  }

  async findAll() {
    return this.countries;
  }
}
