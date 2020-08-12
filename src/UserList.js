//배럴 렌더링 활용
import React from 'react'

const users = [
    {
        id:1,
        username:"KIM",
        email:"1@naver.com"
    },
    {
        id:1,
        username:"SONG",
        email:"2@naver.com"
    },
    {
        id:1,
        username:"JAG",
        email:"3@naver.com"
    }
]

// function UserList(){
//     return (
//         <div>
//             <div><b>{users[0].username}: </b><span>{users[0].email}</span></div>
//             <div><b>{users[1].username}: </b><span>{users[1].email}</span></div>
//             <div><b>{users[2].username}: </b><span>{users[2].email}</span></div>
//         </div>
//     )
// }

var User = ({user})=>{
    return (
        <div>
            <b>{user.username}: </b><span>{users.email}</span>
        </div>
    )
}

function UserList(){
    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
}



export default UserList;