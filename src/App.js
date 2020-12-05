import React from 'react';
import './App.css';
import './Bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Academy_Card from './Components/Academy_Card';
import LionsTV from './Components/LionsTV';
import Splash from './Components/splash';
import Dashboard from './Components/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "choices":[]
    };
  }
  makeChoice = (choice) => {
    this.setState(state => {
      state["choices"].push(choice)
      return state
    })
  }

 render() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <div className="card-container">
        <Academy_Card 
          title="Software Engineering Pathway" 
          text="This pathway gives students the ability to be innovative with technology and learn a variety of computer programming languages." 
          img="https://inteng-storage.s3.amazonaws.com/img/iea/XD6KZvJ2Gv/sizes/software-trends_resize_md.jpg"
          alt="Image of Software Engineering Pathway"
          webpage="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932698&type=d&pREC_ID=2065998"
          makeChoice={this.makeChoice} />
      
        <Academy_Card 
          title="Academy of Hospitality & Tourism" 
          text="Richmond Hill High Schools's Academy of Hospitality & Tourism helps students create career paths in one of the world’s and New York City's  largest industries, from hotels to sports, entertainment, and event management." 
          img="https://potomac.edu/wp-content/uploads/2019/04/Studying-Hospitality-Tourism.jpg"
          alt="Image of Academy of Hospitality & Tourism"
          webpage="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932678&type=d&pREC_ID=2066003"
          makeChoice={this.makeChoice} />

        <Academy_Card 
          title="Art & Design Academy" 
          text="The Richmond Hill High School visual arts classes explore basic and advanced drawing, the world of ceramics, portfolio design and computer graphics." 
          img="https://i.guim.co.uk/img/media/e6ee88c4b60cd6fd315fb472beb8989920dd59a9/7_231_882_529/master/882.jpg?width=300&quality=85&auto=format&fit=max&s=b17e271238f5286e2fbfa3d4aca6f0b8"
          alt="Image of Art & Design"
          webpage="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932672&type=d&pREC_ID=2066008"
          makeChoice={this.makeChoice}/>
        </div>
     
        <Dashboard choices={this.state.choices} />

    </div>
          
  );
 }
}

export default App;
