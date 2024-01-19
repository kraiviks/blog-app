import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';

describe('getProfileData', () => {
  it('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'UserName',
          lastname: 'UserLastname',
          age: '20',
          city: 'Kyiv',
          username: 'nickname',
          country: Country.Ukraine,
          currency: Currency.UAN,
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({
      first: 'UserName',
      lastname: 'UserLastname',
      age: '20',
      city: 'Kyiv',
      username: 'nickname',
      country: Country.Ukraine,
      currency: Currency.UAN,
    });
  });
  it('should work with empty profile data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
