
import React from 'react';
import Acard from './Acard'


const Achievement = () => {
  return (
     <div className="about-sa">
            <h1>Welcome to the Student Achievement Page</h1>
            <h4>Here you will find various projects that students of the RHHS Software Engineering program have completed.</h4>
             <br></br>
    <div className="acard-container">
        <Acard 
        title='Fashion Game Scratch Project!'
        description='Within the first year of RHHS, students explore Scratch. With Scratch, you can program your own interactive stories, games, animations, and share your creations with others in the online community.'
        projectlink='https://scratch.mit.edu/projects/149206977'/>

        <Acard 
        title='Paint Box!'
        description=' With Scratch, you can program your own interactive games!'
        projectlink='https://scratch.mit.edu/projects/181253578'/>
    </div>
</div>
  )
  }
export default Achievement;

/*
<a href="https://scratch.mit.edu/projects/11710850/" class="btn btn-primary">Maze</a> 
    <a href="https://scratch.mit.edu/projects/40065008/" class="btn btn-primary">Dodgeball</a>
        <a href="https://scratch.mit.edu/projects/181253578/" class="btn btn-primary">Paint ball</a>
        <img1 src="img_girl.jpg" alt="Girl in a jacket" width="200" height="200"></img1>
         </div>
    </div>
    </div>

  <div class="col-sm-">
    <div class="card2">
      <div class="card-body">
        <h5 class="card-title">Softmore Year</h5>
        <p class="card-text">The second year of High school, p5.js is another learning program that help students learn how to style and cooridinate. In addition, p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! Click the links below to see different students work.</p>
        <a href="https://editor.p5js.org/mnarine2619@richmondhillhs.org/sketches/rJzIzwgK7" class="btn btn-primary">Creativity project</a>
         <a href="https://editor.p5js.org/mnarine2619@richmondhillhs.org/sketches/SJPkH-ux4" class="btn btn-primary">Snowflakes</a>
         <a href="https://editor.p5js.org/mnarine2619@richmondhillhs.org/sketches/2wPSnbAS2" class="btn btn-primary">Multiple</a>

      </div>
    </div>
  </div>

  <div class="col-sm-">
    <div class="card3">
      <div class="card-body">
        <h5 class="card-title">Junior Year</h5>
        <p class="card-text">During your Junior year, student will be creating different projects that includes the concept of algorithm.A programming algorithm is a procedure or formula used for solving a problem. It is based on conducting a sequence of specified actions in which these actions describe how to do something, and your computer will do it exactly that way every time.  </p>
        <a href="https://docs.google.com/document/d/1xHxukm8QDnFcobLeoj29EuPbKALqUCa6fHz8xfX3Jfs/edit" class="btn btn-primary">PERFORMANCE CREATE TASK</a>


      </div>
    </div>
  </div>
  <div class="col-sm-">
    <div class="card4">
      <div class="card-body">
        <h5 class="card-title">Senior Year</h5>
        <p class="card-text">The last year students will be more focused on developing apps and websites through github. GitHub can be thought of as a serious social networking site for software developers. Click the link for different projects.</p>
        <a href="https://github.com/Mnarine2619/Pizza" class="btn btn-primary">Pizza lab</a>
         <a href="https://github.com/Mnarine2619/Grocery" class="btn btn-primary">Grocery</a>
         <a href="https://github.com/Mnarine2619/petbook" class="btn btn-primary">Petbook</a>

      </div>
    </div>
  </div
  */