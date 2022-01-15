import React, {MouseEvent, useMemo} from "react";
import {People, PeopleType} from "./People/People";
import './peoples.scss'

export type PeoplesType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   follow: (people_id: number) => void
   unfollow: (people_id: number) => void
   setCurrentPage: (currentPage: number) => void
}
export const Peoples: React.FC<PeoplesType> = (
   {
      peoples,
      totalCount,
      countPeoplesOnPage,
      follow,
      unfollow,
      setCurrentPage,
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

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))

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
                        ? <button className="people_followed__btn" onClick={() => unfollow(p.id)}>Unfollow</button>
                        : <button className="people_followed__btn" onClick={() => follow(p.id)}>Follow</button>
                  }
               </div>
            </div>
         )}

      </div>
   )
}