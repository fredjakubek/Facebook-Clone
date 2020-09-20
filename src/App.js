import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Login from './Login.js'
import {useStateValue} from './StateProvider.js';

function App() {

  const [{user}, dispatch]= useStateValue();

  return (
   <div className="app">
      {!user ? (
        <Login/>
        ) : (
          <>
            <Header/>
            
              <div className="app__body">
                <Sidebar />
                <Feed /> 
              </div>
          </>
       )
      }
   </div>
  );
}

export default App;
