import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [userData, setData] = useState({})

  return (
    <div>
      <UserContext.Provider value={{ userData, setData }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider