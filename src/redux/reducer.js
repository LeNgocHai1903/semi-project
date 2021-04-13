import * as actionTypes from "./action";

const initialState = {
  phoneNumber: null,
  OTPData: {},
  isLoading: false,
  error: null,
};

export const OTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OTP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        OTPData: action.payload.OTP,
      };
    case actionTypes.FETCH_OTP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CONFIRM_OTP_SUCCESS:  
      return{
          ...state,
          isLoading: false,
          phoneNumber: action.payload,
      };

    default:
      return state;
  }
};
