import axios from "axios";
import {UserLoginType} from "../redux/auth/authReducer";
import {ProfileUserInfoType} from "../redux/profile/profileReducer";

const instanceAxios = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": "0b35bf30-9811-4ef2-8cc3-183ac4bf4914"},
})

export const userAPI = {
   getUsers: (countPeoplesOnPage: number, currentPage: number) => {
      return instanceAxios.get<GetUsersResponseType>(`users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => response.data)
   },
   setFollow: (userID: number) => {
      return instanceAxios.post<CommonResponseType>(`follow/${userID}`).then(response => response.data)
   },
   setUnfollow: (userID: number) => {
      return instanceAxios.delete<CommonResponseType>(`follow/${userID}`).then(response => response.data)
   },
}

export const profileAPI = {
   getProfile: (userID: string) => {
      return instanceAxios.get<ProfileUserInfoType>(`profile/${userID}`).then(response => response.data)
   },
   getStatus: (userID: string) => {
      return instanceAxios.get<string>(`profile/status/${userID}`).then(response => response.data)
   },
   updateStatus: (status: string) => {
      return instanceAxios.put<CommonResponseType>(`profile/status`, {status}).then(response => response.data)
   },
   uploadPhoto: (file: any) => {
      const formData = new FormData();
      formData.append('file', file)
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      }
      return instanceAxios.put<CommonResponseType<{ small: string, large: string }>>('profile/photo', formData, config).then(response => response.data)
   },
   updateProfile: (profileData: ProfileUserInfoType) => {
      return instanceAxios.put<CommonResponseType>(`profile`, profileData).then(response => response.data)
   },
}

export const authAPI = {
   getLoggedData: () => {
      return instanceAxios.get<CommonResponseType<{ id: number, email: string, login: string }>>('auth/me').then(response => response.data)
   },
   logIn: (loginData: UserLoginType) => {
      return instanceAxios.post<CommonResponseType<{ userId: number }>>('auth/login', loginData).then(response => response.data)
   },
   logOut: () => {
      return instanceAxios.delete<CommonResponseType>('/auth/login', {}).then(response => response.data)
   }
}

export const securityAPI = {
   getCaptchaURL: () => {
      return instanceAxios.get<{url: string}>('/security/get-captcha-url').then(response => response.data)
   }
}

export type CommonResponseType<T = {}> = {
   resultCode: number
   messages: string[]
   data: T
}
type GetUsersResponseType = {
   items: PeopleType[]
   totalCount: number
   error: string
}
export type PeopleType = {
   id: number
   name: string
   status: string
   photos: { small: string, large: string }
   followed: boolean
}