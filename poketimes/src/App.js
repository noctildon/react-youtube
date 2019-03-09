import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

// 用BrowserRouter tag把要框住的內容包住,用Route tag指定要前往哪個component
// path會往下疊加,也就是/會出現在/about,除非加上exact
// 使用switch tag相當於針對route作switch,只針對某個route做渲染
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            {/* router parameter :[param], 用this.props.match.params.param存取 */}
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
