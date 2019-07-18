import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Courses from './courses';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center',marginTop:'50px'}}>
            <div className="div-avatar ">
            </div>
            </div>
            <h2 style={{paddingTop: '0.2em'}}>Ken Lin</h2>
            <h4 style={{color: 'grey'}}>Front-End Developer</h4>
            <hr style={{borderTop: '3px solid #e58e26', width: '50%'}}/>
            <p className="p-fontstyle">I had worked in trading and marketing companies for almost 10years since I graduated in University, however my interest in IT Tec grew stronger and deeper in my mind these years, and also I have strong wishes to work in IT related jobs to develop my IT career. Therefore I spend my spare time in learning computer program language and tec. In 2019, I resigned my job and devote my time and efforts to study and enhance my computer Tec through online internet courses and my friends tutoring. </p>
            <hr style={{borderTop: '3px solid #e58e26', width: '50%'}}/>
            <p className="p-fontstyle">Hard-working, Responsible and detail-oriented, like sports</p>
            <hr style={{borderTop: '3px solid #e58e26', width: '50%'}}/>
            <h5>Address</h5>  
            <p className="p-fontstyle">Tianhe district Guangzhou</p>
            <h5>Phone</h5>
            <p className="p-fontstyle">188-1680-4849</p>
            <h5>Email</h5>
            <p className="p-fontstyle">yqkenlin@gmail.com</p>
            <h5>Wechat</h5>
            <p className="p-fontstyle">ken45167999</p>
            <hr style={{borderTop: '3px solid #e58e26', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2008}
              schoolName="Beijing Normal University ZhuHai Campus"
              schoolDescription="I have acquired a bachelor degree in Business Administration, and passed Cet-6 and scored 800 on my TOEIC international exam in Aug 2008."
               />

               
                <hr style={{borderTop: '3px solid #e58e26'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2008}
              endYear={2014}
              jobName="Honda Motorcycle Guangzhou Branch"
              jobDescription="worked in overseas business
              department, responsible for the motorcycle spare parts supply and after service, preparing the custom clear docments for the goods, dealing with the customer feedbacks on reciving and returning emails and calls, also make daily inventory checking and updating.   learning the management methods, values and spirits from Honda corporations. 
              "
              />

              <Experience
                startYear={2014}
                endYear={2016}
                jobName="Heymobi apps Marketting Guangzhou"
                jobDescription="the company served for the apps publishers,expecially the mobile game apps, by increasing their apps mobile traffics and gaining huge amount of installs from users.
                i worked as marketing manager and lead my team to expand sales market overseas ,mainly in South Korea & Japan.
                "
                />
                <Experience
                startYear={2017}
                endYear={2018}
                jobName="bbgame Guangzhou"
                jobDescription="a new startup company,specialized in mobile games publishing and marketing,
                at first i was responsible for mobile game business manager in marketing section and then HR assitant due to position adjustment.
                "
                />
              <hr style={{borderTop: '3px solid #e58e26'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={60}
                />
              <Skills
                  skill="Html/Css"
                  progress={75}
                  />
              <Skills
                    skill="React"
                    progress={50}
                    />
               <Skills
                      skill="Github"
                      progress={45}
                      />                   
              <Skills
                      skill="Ai"
                      progress={65}
                      />
              <Skills
                      skill="Coredraw"
                      progress={50}
                      /> 
              <Skills
                      skill="ux photoshop xd"
                      progress={50}
                      /> 
              <h2>IT Courses</h2>
              <Courses startYear={2010}
                 endYear={2011}
                 courseName="SunRise IT traning center Guangzhou --html&css"
                 courseDescription=" traning for the beginners on HTML5 and CSS basics and small projects practise after class,
                 Building a Website"
                  />

                <Courses startYear={2018}
                 endYear={2019}
                 courseName="Udemy - The Complete JavaScript Course 2018"
                 courseDescription="learning the JavaScript fundamentals,ES6 new features and building responsive website "
                  />
                                  <Courses startYear={2018}
                 endYear={2019}
                 courseName="Udemy - Advanced CSS and Sass Take your CSS to Next Level"
                 courseDescription="learning CSS3 flex box, CSS Grid,and Using advanced CSS and Sass to build websites "
                  />                  
                                  <Courses startYear={2018}
                 endYear={2019}
                 courseName="Udemy - Mordern React the complete Guide"
                 courseDescription=" learning basic node JS, create React projects,and building  web applications in React"
                  />
                <hr style={{borderTop: '3px solid #e58e26'}}  />  

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
