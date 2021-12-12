import http from '../../../http_common';
import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes, ILoginModel } from './types';

export const LoginUser = (data: ILoginModel) => async(dispatch: Dispatch<AuthAction>) => {

    try {

        const resp = await http.post("api/auth/login", data);

        dispatch({
            type: AuthActionTypes.LOGIN,
            payload: {
                email: data.email
            }
        })
        return Promise.resolve();
    }
    catch(ex) {
        return Promise.reject();
    }
}