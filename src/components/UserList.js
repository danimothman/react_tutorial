//배럴 렌더링 활용
import React,{useEffect} from 'react'



//배열 항목 제거
var User = ({user, onToggle, onRemove})=>{
    useEffect(()=>{
        console.log('user값이 나타남')
        console.log(user)
        // return ()=>{
        //     console.log('user값이 바뀌기전')
        //     console.log(user)
        // }
    },[])
    return (
            <li Key={user.id}><b style={{cursor:'pointer',color:user.active ? 'green' : 'blue'}} onClick={()=>onToggle(user.id)}>
            {user.username}: </b>
            <span>{user.email}</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
            </li>
    )
}

function UserList({users, onToggle, onRemove}){
    return (
        <div>
            <ul>
            {users.map(user=>(
                <User user={user} onRemove={onRemove} onToggle={onToggle} />
            ))
            }
            </ul>
        </div>
    )
}



export default UserList;