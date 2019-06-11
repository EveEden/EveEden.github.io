import React from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'

import Main from './components/Main'

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
        <Header className="header-color" title={<span ><strong>Eve Henare</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Eve Henare">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
          <Main />
        </Content>
      </Layout>
    </div>
  )
}

export default App
