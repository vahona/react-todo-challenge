import React, { useState } from 'react'
import Header from './Header'
import All from './All'
import { Switch, Route, Router } from 'react-router-dom'
import Active from './Active'
import Completed from './Completed'
import useAddingList from './useAddingList'


function App(props) { 
    
    const [values, setValue] = useAddingList("")
    const [todoList, setTodoList] = useAddingList([])

    
    return(
        <>
         <h1># To do</h1>
            <div >
                <Header />
            </div>
            <Switch>
                <Route exact path="/"></Route>
                <Route path="/All"><All/></Route>
                <Route path="/Active">
                 <Active/>
                </Route>
                <Route path="/Completed">
                    <Completed />
                </Route>
            </Switch>
        </>
    )
}

export default App
