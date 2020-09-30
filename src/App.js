import React, {createContext, useState, memo} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useRoutes } from './components/Routes'
import { Nav } from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'

export const MyContext = createContext()

const App = () => {

  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
  })

  const [userId, setUserId] = useState(false)
  
  const routes = useRoutes(userId)

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
