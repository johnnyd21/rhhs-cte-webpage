import React from 'react';
import Card from './Card';
import  '../../css/Card.css';


function Sepacademy() {
  return (
        <div className="card-bigcontainer">
        <Card
            imageUrl='https://snap.berkeley.edu/img/snap-byob.png' 
            title= 'Freshmen year 9th'
            body='Students learn basic concepts of computer science through SNAP!, an online-based 
            programming language made by University of Berkeley and MIT.'
            />

        <Card
            imageUrl='https://yt3.ggpht.com/ytc/AAUvwngUVZBmVudvFKbysQZGc-aE7R-qOspK3d7lrZjI=s900-c-k-c0x00ffffff-no-rj' 
            title= 'Sophmore Year 10th'
            body='Students learn the most popular coding language, Python
            , through Amazon-sponsored platform called Edhesive. Students will also able to be eligible to take PCEP – Certified 
            Entry-Level Python Programmer exam from Python Institute.'
            />

        <Card
            imageUrl='https://i.ytimg.com/vi/2_rXHox_J0I/maxresdefault.jpg' 
            title= 'Junior year 11th'
            body='Students will prepare and take AP Computer Science Principles using Edhesives curriculum.'
            />

        <Card
            imageUrl='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0c51d2c2e5f85fe45126eb818f748267/google-cloud-shell.png' 
            title= 'Senior year 12th'
            body='In CS and the City, a course designed by CS4ALL, students will learn basic 
            web design skills and learn to use and analyze NYC open data. '
            /> 

        </div>
    );
}

export default Sepacademy;
