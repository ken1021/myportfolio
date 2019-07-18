import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="div-avatar ">
            </div>
            <div className="banner-text">
              <h1>Web Developer</h1>
              <h1 style={{marginTop:'20px',fontSize:'20px'}}>前端开发工程师</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React  | mySQL | gitHub | AI | UX | Coredraw</p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
