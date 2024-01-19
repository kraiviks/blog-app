import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country/testing';

describe('getProfileForm', () => {
  it('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          first: 'user',
          lastname: 'last',
          age: '20',
          city: 'Kyiv',
          username: 'username',
          country: Country.Ukraine,
        },
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({
      first: 'user',
      lastname: 'last',
      age: '20',
      city: 'Kyiv',
      username: 'username',
      country: Country.Ukraine,
    });
  });
  it('should work with empty profile form', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
