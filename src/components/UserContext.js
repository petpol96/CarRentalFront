import React from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="false">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return false;
}