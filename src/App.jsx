import Header from "./components/Header/Header"
import './App.css'
import Landing from "./Pages/Landing/Landing"
import Router from "./Pages/Router"
import LayOut from "./components/LayOut/LayOut"
import { useContext, useEffect } from "react"
import { auth } from "./Utility/fireBase"
import { DataContext } from "./DataProvider/DataProvider"
import { Type } from "./Utility/action.type"

function App() {
  const [{user},dispatch] = useContext(DataContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })
  },[])

  return (
    <LayOut>
    <Router/>
    </LayOut>
  )
}

export default App
