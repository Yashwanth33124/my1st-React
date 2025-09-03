import { useEffect, useState } from "react"


 export default function User() {

    let [userlist,setuserlist] = useState([])

     async function fetchAllUsers() {
        
        try {
          
         let response = await fetch( 'http://dummyjson.com/users')
         const result = await response.json()
         console.log(result);
         
         if(result?.users) {
            setuserlist(result?.User)
         } else {
            setuserlist([])
         }


        } catch(error) {
              console.log(error)
        }
     }


    useEffect(()=>{
        fetchAllUsers()
    },[])

    console.log(userlist)
    return (
        <div>
            <h1>
            all  users list
        </h1>
        <ul>
            {
                userlist &&  userlist.length > 0 ? 
                userlist.map(useritem=> <li key={useritem?.id}>
                     <p> {useritem?.firstName} {useritem?.lastName}</p>

                </li>) : <h1> No users Found</h1>
            }
        </ul>
        </div>

    )
}
