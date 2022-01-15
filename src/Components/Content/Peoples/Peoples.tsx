import React, {MouseEvent, useMemo} from "react";
import {People, PeopleType} from "./People/People";
import './peoples.scss'
import axios from "axios";
import {setIsFetching, setPeoples, setTotalCount} from "../../../redux/peoples-redux/peoplesActions";
import {userAPI} from "../../../api/api";

export type PeoplesType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   followCallback: (people_id: number) => void
   unfollowCallback: (people_id: number) => void
   setCurrentPageCallback: (currentPage: number) => void
}

export const Peoples: React.FC<PeoplesType> = (
   {
      peoples,
      totalCount,
      countPeoplesOnPage,
      followCallback,
      unfollowCallback,
      setCurrentPageCallback,
   }
) => {
   const massPages = useMemo(() => {
      const countPages = Math.ceil(totalCount / countPeoplesOnPage)
      let pages: number[] = []
      for (let i = 1; i <= countPages; i++) {
         pages.push(i)
      }
      return pages
   }, [totalCount, countPeoplesOnPage])

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPageCallback(Number(e.currentTarget.value))

   return (
      <div>
         <div className={"pages"}>
            {massPages.map(p => <button className={"page"} onClick={onClickPageHandler} value={p}>{p}</button>)}
         </div>
         {peoples.map(p =>
            <div className="people" key={p.id}>
               <People id={p.id}
                       name={p.name}
                       photos={p.photos}
                       followed={p.followed}
                       status={p.status}/>
               <div className="people_followed">
                  {
                     p.followed
                        ? <button className="people_followed__btn" onClick={() => {
                           userAPI.unfollow(p.id).then(data => {
                                 if (data.resultCode === 0) {
                                    unfollowCallback(p.id)
                                 }
                              })
                        }}>Unfollow</button>
                        : <button className="people_followed__btn" onClick={() => {
                           userAPI.follow(p.id).then(data => {
                                 if (data.resultCode === 0) {
                                    followCallback(p.id)
                                 }
                              })
                        }}>Follow</button>
                  }
               </div>
            </div>
         )}
      </div>
   )
}