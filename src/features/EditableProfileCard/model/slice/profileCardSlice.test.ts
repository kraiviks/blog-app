import { ValidateProfileErrors } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileCardSchema } from '../types/ProfileCardSchema';

import { profileCardActions, profileCardReducer } from './profileCardSlice';

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

describe('profileCardSlice', () => {
  it('test set readonly', () => {
    const state: DeepPartial<ProfileCardSchema> = {
      readonly: true,
    };
    expect(profileCardReducer(state as ProfileCardSchema, profileCardActions.setReadonly(false))).toEqual({
      readonly: false,
    });
  });
  it('test set cancel', () => {
    const state: DeepPartial<ProfileCardSchema> = {
      data,
      form: {
        first: '',
      },
    };
    expect(profileCardReducer(state as ProfileCardSchema, profileCardActions.setCancel())).toEqual({
      readonly: true,
      form: data,
      validateErrors: undefined,
      data,
    });
  });
  it('test update profile', () => {
    const state: DeepPartial<ProfileCardSchema> = {
      form: { age: '123' },
    };
    expect(profileCardReducer(state as ProfileCardSchema, profileCardActions.updateProfile({ age: '20' }))).toEqual({
      form: { age: '20' },
    });
  });
  it('test update profile service pending', () => {
    const state: DeepPartial<ProfileCardSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileCardReducer(state as ProfileCardSchema, updateProfileData.pending)).toEqual({
      validateErrors: undefined,
      isLoading: true,
    });
  });
  it('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileCardSchema> = {
      isLoading: true,
      readonly: false,
    };
    expect(profileCardReducer(state as ProfileCardSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
    });
  });
});
