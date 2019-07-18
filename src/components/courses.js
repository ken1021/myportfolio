import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Courses extends Component {
  render() {
    return(
        <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.courseName}</h4>
          <p>{this.props.courseDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Courses;
