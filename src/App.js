import React from 'react'
import Header from "./components/common/header/Header"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepages from "./components/home/Homepages"

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
      <Route path='/' component={Homepages} />
      </Switch>
    </Router>
    </>
  )
}

export default App