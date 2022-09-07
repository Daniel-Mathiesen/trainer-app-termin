import React from "react";
import RatingPopStyle from './ratingPop.css'

function RatingPopUp(props){
    return(props.trigger) ? (
        <div className="popup z-20">
            <div className="popupInner flex flex-col justify-center text-center rounded-3xl">
                <div className="absolute w-screen h-screen bg-black bg-opacity-60 -z-10 -left-6 -bottom-[20.2rem]"/>
                {props.children}
                <button className="close-btn p-4 rounded-full font-bold bg-[#f1c40e] uppercase" onClick={() => props.setTrigger(false)}>Save Rating</button>
            </div>
        </div>
    ) : "";
}
 
export default RatingPopUp;