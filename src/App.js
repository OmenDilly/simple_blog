import React, {createContext, useState} from 'react';
import ApolloClient from '@apollo/client'
import ApolloProvider from '@apollo/client'
import { useRoutes } from './components/Routes'
import { Nav } from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

export const MyContext = createContext()

const App = () => {

  // const client = new ApolloClient({
  //   uri: 'https://graphqlzero.almansi.me/api'
  // })

  const [userId, setUserId] = useState(false)
  
  const routes = useRoutes(userId)

  return (
    // <ApolloProvider client={client}>
      <MyContext.Provider
        value={{
          userId,
          setUserId
        }}
      >
        <Router>
          <Nav/>
          {routes}
        </Router>
      </MyContext.Provider>
    // </ApolloProvider>
  );
}

export default App;
