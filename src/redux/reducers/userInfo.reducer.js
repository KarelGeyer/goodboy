import { SET_USERINFO } from '../types/userInfo.type';

const initialState = {
  userInfo: [
    {
      helpValue: '',
      shelterValue: '',
      donationValue: '',
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      shelterID: '',
    },
  ],
};

export const userInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERINFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};
