import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import Navbar from "./Navbar";
import PizzaHome from './PizzaHome.js';
import PizzaCreate from './PizzaCreate.js';
import PizzaOrder from './PizzaOrder.js';

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Navbar/>

      <Route exact path='/'>
        <PizzaHome/>
      </Route>
      <Route path='/pizza'>
        <PizzaCreate users={users} setUsers={setUsers}/>
      </Route>
      <Route path='/pizzaorder/'>
        <PizzaOrder/>
      </Route>
    </>
  );
};
export default App;
