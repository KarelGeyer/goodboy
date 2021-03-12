import { SET_USERINFO } from '../types/userInfo.type';

export const setUserInfo = (userInfo) => (dispatch) => {
  dispatch({
    type: SET_USERINFO,
    payload: userInfo,
  });
};
