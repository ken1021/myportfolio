import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ken Lin</h2>
            <div className="div-avatar ">
            </div>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>" Devote my efforts to work and become a professional Web front end developer in my career "</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    188 168 04849
                  </ListItemContent>
                </ListItem>



                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    yqkenlin@gmail.com
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-wechat" aria-hidden="true"/>
                    ken45167999
                  </ListItemContent>
                </ListItem>
                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
