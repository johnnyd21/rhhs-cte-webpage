import React from 'react';
import Card from './Card';
import  '../../css/Card.css';


function Sepacademy() {
  return (
        <div className="about-sep">
            <h1> Computers are changing everything......</h1>
            <p> From cell phones, GPS navigation systems, satellites, movies, to our SMART home systems ("Hey, Alexa, turn the light off please!"), our lives are changing in the speed of light. As so, technology affects every career field! We believe that every 21st century student should have a chance to learn about algorithms, how to make apps, and how the internet works, just like they learn about photosynthesis, the digestive system, or electricity.</p>
             <br></br>
            <p> In the SEP Pathway you will learn popular coding languages like Python, HTML, CSS and Javascript among others. You also have an opportunity to earn college credit through AP Computer Science Principles! In addittion to this, students will learn about soft skills to be the best candidate for any job, have CTE endorsement on their diploma and gain insight to how the real world operates by going on field trips and participating in internships.</p>
                 <br></br>
                 <h2>Software Engineering Pathway Course Sequence</h2>
                      <p>Take a look at our course sequence below to see what you will be learning about in each grade!</p>
        <div className="card-bigcontainer">
        <Card
            imageUrl='https://snap.berkeley.edu/img/snap-byob.png' 
            title= '9th grade: TEALS Intro to Computer Science'
            body='Students learn basic concepts of computer science through SNAP!, an online-based programming language made by University of Berkeley and MIT. The curriculum incorporates game design and development as culminating projects.'
            />

        <Card
            imageUrl='https://yt3.ggpht.com/ytc/AAUvwngUVZBmVudvFKbysQZGc-aE7R-qOspK3d7lrZjI=s900-c-k-c0x00ffffff-no-rj' 
            title= '10th grade: Exploring Computer Science'
            body='Students learn the most popular coding language, Python, through Amazon-sponsored platform called Project Stem and Edhesive. Students will also able to be eligible to take PCEP – Certified  Entry-Level Python Programmer exam from Python Institute.'
            />

        <Card
            imageUrl='https://i.ytimg.com/vi/2_rXHox_J0I/maxresdefault.jpg' 
            title= '11th grade: AP Computer Science Principles'
            body='Students will prepare to take AP Computer Science Principles using ProjectSTEMs curriculum, in partnership with Amazon.'
            />

        <Card
            imageUrl='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0c51d2c2e5f85fe45126eb818f748267/google-cloud-shell.png' 
            title= '12th grade: Computer Science and the City'
            body='In CS and the City, a course designed by CS4ALL, students will learn basic web design skills and learn to use and analyze the NYC open data portal. Students in this course developed THIS website using the knoweldge gained from CS & the City! '
            /> 

        </div>
     </div>
    );
}

export default Sepacademy;
