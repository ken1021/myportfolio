import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to={process.env.PUBLIC_URL +"/"}>MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to={process.env.PUBLIC_URL +"/resume"}>Resume</Link>
                <Link to={process.env.PUBLIC_URL +"/contact"}>Contact</Link>
                <Link to={process.env.PUBLIC_URL +"/projects"}>Projects</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to={process.env.PUBLIC_URL +"/"}>MyPortfolio</Link>}>
            <Navigation>
                 <Link to={process.env.PUBLIC_URL +"/resume"}>Resume</Link>
                <Link to={process.env.PUBLIC_URL +"/contact"}>Contact</Link>
                <Link to={process.env.PUBLIC_URL +"/projects"}>Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;