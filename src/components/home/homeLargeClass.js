import React from "react";
import axios from "axios";
import Stars from "../lib/stars";

export default class LargeClass extends React.Component {
  state = {
    classes: [],
  };

// Get all classes 
  
//   componentDidMount() {
//     axios.get(`http://localhost:4000/api/v1/classes`).then((res) => {
//       console.log(res.data);
//       this.setState({ classes: res.data });
//     });
//   }

// Choose Class 

classNumbers=['1','2','3','4']

classNum = this.classNumbers[Math.floor(Math.random() * this.classNumbers.length)];

  componentDidMount() {
    axios.get(`http://localhost:4000/api/v1/classes/` + this.classNum).then((res) => {
      console.log(res.data);
      console.log(this.classNum)
      const classes = [res.data, ""]
      this.setState({ classes });
    });
  }

  render() {
    return (
      <>
        {this.state.classes.slice(0, 1).map((Class) => (
          <a href={`/details/${Class.id}`}>
          <div
            key={Class.id}
            className="flex flex-col-reverse h-96 rounded-2xl mb-12)] bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url("${Class.asset.url}")` }}
          >
            <div className="bg-[#f1c40e] flex flex-col justify-center items-start text-md font-bold px-3 h-1/5 w-2/3 rounded-tr-[50px] rounded-bl-2xl">
              <p className="pb-2">{Class.className}</p>
              <Stars length="40" />
            </div>
          </div>
          </a>
        ))}
      </>
    );
  }
}
