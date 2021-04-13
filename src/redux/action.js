export const FETCH_OTP_LOADING = "FETCH_OTP_LOADING";
export const FETCH_OTP_SUCCESS = "FETCH_OTP_SUCCESS";
export const FETCH_OTP_ERROR = "FETCH_OTP_ERROR";


export const CONFIRM_OTP_SUCCESS = "CONFIRM_OTP_SUCCESS";
export const CONFIRM_OTP_ERROR = "CONFIRM_OTP_ERROR";


export const  fetchOTP =   () => {
    return async dispatch =>  {
        dispatch(fetchOTPLoading());
        await fetch('http://localhost:5000/api/otp')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchOTPSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchOTPError(error));
        })
    }
}

export const confirmOTP = (o1,o2,o3,o4, phonenumber) => {
    return async dispatch =>  {
        dispatch(confirmOTPLoading());
        await fetch(`http://localhost:5000/api/otp/${o1}/${o2}/${o3}/${o4}`, {method: 'POST'})
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                dispatch(confirmOTPError(res.error))
            } else {
            dispatch(confirmOTPSuccess(phonenumber));
            }
        })
    }
}

//confirm
const confirmOTPLoading = () => {
    return {
        type: FETCH_OTP_LOADING,
    }
}

const confirmOTPSuccess = (phonenumber) => {
    return {
        type: CONFIRM_OTP_SUCCESS,
        payload: phonenumber,
    }
}

const confirmOTPError = (error) => {
    return {
        type: FETCH_OTP_ERROR,
        payload: error,
    }
}


//fetch
const fetchOTPLoading = () => {
    return {
        type: FETCH_OTP_LOADING,
    }
}

const fetchOTPSuccess = (OTPData) => {
    return {
        type: FETCH_OTP_SUCCESS,
        payload : OTPData,
    }
}

 const fetchOTPError = (error) => {
    return {
        type: FETCH_OTP_ERROR,
        payload : error
    }
}