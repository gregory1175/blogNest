// стор для получение и передачи данных из таблицы на бек
import { create } from "zustand";
import { signInApi, signUpApi } from "../service/api";

// общие типы


// тип + стор для регистрации 

interface IUseAuthStore  {
    accessToken: null | string;
    refreshToken: null | string;

    name: null | string;
    email: null | string;
    password: null | string;

    // функция для получения данных для юзера вход/регистрация
    getUserInfo: (name: string, email: string, password: string) => void;
    // функция для создания пользователя
    sendInfoForCreateUser: (name: string, email: string, password: string) => Promise<void>;
    // функция для авторизации 
    sendInfoForAuth: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<IUseAuthStore>((set) =>({
    refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : null,
    accessToken: null, 
    name: null,
    email: null, 
    password: null,

    getUserInfo: async(name, email, password) => {
        set({name})
        set({email})
        set({password})
        return    
    },

    sendInfoForCreateUser: async (name, email, password) => {
    try {
        const model = {
            name, 
            email, 
            password
        }
        const res = await signUpApi(model); 
        set({ 
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
        });
        localStorage.setItem('refresh_token', res.refreshToken);  
    } catch (error: unknown) {
        throw new Error(`произошла ошибка ${error}`)
    }
    },

    sendInfoForAuth: async(name, email, password) => {
    try {
        const model = {
            name, 
            email, 
            password
        }  
        const res = await signInApi(model); 
        set({ 
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
        });
        localStorage.setItem('refresh_token', res.refreshToken);
        } catch (error: unknown) {
            throw new Error(`произошла ошибка ${error}`)
        }
    }
}))