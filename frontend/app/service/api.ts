// Регистрация
export interface ISignUpResponse {
  refreshToken: string;
  accessToken: string;
}

export interface ISignUpModel {
    name: string,
    email: string,
    password: string,
}

const signUpApi = async (data: ISignUpModel): Promise<ISignUpResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/auth/sign-up`, {
    method: "POST",
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json' 
        },
    body: JSON.stringify(data), 
    })

    if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
    }

    return await res.json();
}

export {signUpApi}

// авторизация 
export interface ISignInResponse {
  refreshToken: string;
  accessToken: string;
}

interface ISingInApi {
    name: string,
    email: string,
    password: string,
}

const signInApi = async (data: ISingInApi): Promise<ISignInResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/auth/sign-in`, {
    method: "POST",
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json' 
        },
    body: JSON.stringify(data), 
    })

    if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
    }

    return await res.json();
}

export {signInApi}

// запрос на обновление токена 
interface IRefreshTokenApi {
    refreshToken: string;
}

const refreshTokenApi = async(data: IRefreshTokenApi): Promise<unknown> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/auth/refresh-token`, {
    method: "POST",
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json' 
        },
    body: JSON.stringify(data), 
    })

    if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
    }

    return await res.json();
}

export {refreshTokenApi}