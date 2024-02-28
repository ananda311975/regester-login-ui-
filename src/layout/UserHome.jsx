import axios from 'axios'
import {useEffect, useState} from 'react'

export default function UserHome() {
  const [todos, setTodos] = useState([])

  useEffect( ()=>{
    const run = async()=>{
      let token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8000/todos', {
        headers : { Authorization : `Bearer ${token}`}
      })
      setTodos(rs.data.todos)
    }
    run()
  }, [] )

  return (
    <>
<div class="bg-cover bg-center bg-no-repeat p-10 border  min-w-[100px]  rounded-[15px] mt-10 shadow-md ml-20 mr-20" style={{ backgroundImage: 'url("D:\code came academy\front_project\src\layout\image1.jpg")' }}>
  <div class="h-20 bg-gradient-to-r from-cyan-500 to-blue-400 px-8  mt-auto ">
    <p class='text-4xl text-center m-auto'>ยินดีต้อนรับสู่ร้าน GAIJIN TEM</p>
  </div>
</div>


  
    </>
    
  )
}
