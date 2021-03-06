// import {PeopleType} from "../../Components/Content/Peoples/People/People";

import {PeopleType} from "../../api/api";

export enum PEOPLES_ACTIONS_TYPES {
   SET_PEOPLES = 'peoplesReducer/SET_PEOPLES',
   FOLLOW = 'peoplesReducer/FOLLOW',
   UNFOLLOW = 'peoplesReducer/UNFOLLOW',
   SET_TOTAL_COUNT = 'peoplesReducer/SET_TOTAL_COUNT',
   SET_CURRENT_PAGE = 'peoplesReducer/SET_CURRENT_PAGE',
   SET_IS_FETCHING = 'peoplesReducer/SET_IS_FETCHING',
   SET_IS_FOLLOWING = 'peoplesReducer/SET_IS_FOLLOWING',
   SET_COUNT_PEOPLES_ON_PAGE = 'peoplesReducer/SET_COUNT_PEOPLES_ON_PAGE',
}

export type PeoplesActionCreatorsType =
   ReturnType<typeof followSuccess>
   | ReturnType<typeof unfollowSuccess>
   | ReturnType<typeof setPeoples>
   | ReturnType<typeof setTotalCount>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setIsFetching>
   | ReturnType<typeof setIsFollowing>
   | ReturnType<typeof setCountPeoplesOnPage>

export const followSuccess = (people_ID: number, flag: boolean) => ({type: PEOPLES_ACTIONS_TYPES.FOLLOW, people_ID, flag} as const)
export const unfollowSuccess = (people_ID: number, flag: boolean) => ({type: PEOPLES_ACTIONS_TYPES.UNFOLLOW, people_ID, flag} as const)
export const setPeoples = (peoples: PeopleType[]) => ({type: PEOPLES_ACTIONS_TYPES.SET_PEOPLES, peoples} as const)
export const setTotalCount = (totalCount: number) => ({type: PEOPLES_ACTIONS_TYPES.SET_TOTAL_COUNT, totalCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: PEOPLES_ACTIONS_TYPES.SET_CURRENT_PAGE, currentPage} as const)
export const setIsFetching = (isFetching: boolean) => ({type: PEOPLES_ACTIONS_TYPES.SET_IS_FETCHING, isFetching} as const)
export const setIsFollowing = (isFollowing: boolean, followUser_ID: number) => ({type: PEOPLES_ACTIONS_TYPES.SET_IS_FOLLOWING, isFollowing, followUser_ID} as const)
export const setCountPeoplesOnPage = (currentPage: number, countPeoplesOnPage: number) => ({type: PEOPLES_ACTIONS_TYPES.SET_COUNT_PEOPLES_ON_PAGE, currentPage, countPeoplesOnPage} as const)
