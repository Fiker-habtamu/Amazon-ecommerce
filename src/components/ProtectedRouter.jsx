import React, { useContext, useEffect } from 'react'
import { DataContext } from '../DataProvider/DataProvider'

function ProtectedRouter({children,msg,redirect}) {
	const [{user},dispatch] = useContext(DataContext)
	useEffect(()=>{
		if(!user){
			// navigate
		}
	},[user])

  return children
}

export default ProtectedRouter
