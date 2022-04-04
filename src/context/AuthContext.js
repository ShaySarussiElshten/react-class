import React from 'react'

const AuthContext = React.createContext({
    setUsers: () => {},
    users: []
})


export default AuthContext