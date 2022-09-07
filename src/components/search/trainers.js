import React from "react";
import axios from "axios";

export default class searchTrainers extends React.Component {
    state = {
      classes: [],
    };
  
  // Get all classes 
    
    componentDidMount() {
      axios.get(`http://localhost:4000/api/v1/trainers`).then((res) => {
        console.log(res.data);
        this.setState({ classes: res.data });
      });
    }
  
  // Choose Class 
  
  //   componentDidMount() {
  //     axios.get(`http://localhost:4000/api/v1/classes/1`).then((res) => {
  //       console.log(res.data);
  //       const classes = [res.data, ""]
  //       this.setState({ classes });
  //     });
  //   }
  
    render() {
      return (
        <div className="Wrapper__smallClasses flex flex-col justify-evenly">
        {this.state.classes.map((Class) => (
            <div className="flex items-start gap-4" key={Class.id}>
                <div className="flex flex-col-reverse h-36 w-36 rounded-2xl mb-12)] bg-cover bg-center bg-no-repeat mb-10"
              style={{ backgroundImage: `url("${Class.asset.url}")` }}></div>
                <h1 className="pt-8 text-2xl font-bold">{Class.trainerName}</h1>
            </div>
            ))}
        </div>
      );
    }
}