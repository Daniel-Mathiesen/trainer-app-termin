import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TrainerDetailPage = () => {
    const { classId } = useParams();
    const [Trainer, SetClass] = useState([]);
  
    useEffect(() => {
      Axios.get(`http://localhost:4000/api/v1/trainers/${classId}`).then((res) => {
        console.log(res.data);
        SetClass(res.data);
      });
    }, []);
  
  // Choose Class 
  
  //   componentDidMount() {
  //     axios.get(`http://localhost:4000/api/v1/classes/1`).then((res) => {
  //       console.log(res.data);
  //       const classes = [res.data, ""]
  //       this.setState({ classes });
  //     });
  //   }
  
      return (
        <div className="flex items-center gap-4 my-5">
            <div
        className="class_image bg-cover bg-no-repeat bg-center h-28 w-28 rounded-xl"
        style={{ backgroundImage: `url(${
            Trainer.asset ? Trainer.asset.url : "https://via.placeholder.com/150"
        })` }}
      ></div>
            <h1 className="font-bold text-xl mb-6">{Trainer.trainerName}</h1>
        </div>
      );
}

export default TrainerDetailPage;