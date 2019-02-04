// import { Component } from 'react'
import * as React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom'
import Dashboard from './dashboard';
import LpgsysLoginPage from './login';


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact={true} path='/' component={LpgsysLoginPage} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

export default App