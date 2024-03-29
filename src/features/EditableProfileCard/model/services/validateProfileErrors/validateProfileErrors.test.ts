import { ValidateProfileErrors } from '../../consts/consts';

import { validateProfileErrors } from './validateProfileErrors';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { Profile } from '@/entities/Profile/testing';

const data: Profile = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  city: 'Kyiv',
  username: 'nickname',
  country: Country.Ukraine,
  currency: Currency.UAN,
};

describe('validateProfileErrors', () => {
  it('success', () => {
    const validate = validateProfileErrors(data);
    expect(validate).toEqual([]);
  });
  it('should incorrect name', () => {
    const validate = validateProfileErrors({ ...data, first: '' });
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA]);
  });
  it('should incorrect name and age', () => {
    const validate = validateProfileErrors({ ...data, first: '', age: '' });
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE]);
  });
  it('should all validate', () => {
    const validate = validateProfileErrors({});
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE]);
  });
  it('should no data', () => {
    const validate = validateProfileErrors();
    expect(validate).toEqual([ValidateProfileErrors.NO_DATA]);
  });
});
