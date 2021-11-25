/** @format */

import React from "react";

const Cards = (props) => {

    const movieHandler = () =>{
          props.cardBtn();
          return props.selectedMovie(props.id)
    }
  return (
    <>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={props.img} alt='title' className='cardImg'></img>
          </div>
          <div className='flip-card-back'>
            <h4 className='cardText'>{props.title}</h4>
            <p>gener</p>
            <p>year : {props.year}</p>
            <button
              className='cardbtn'
              onClick={() => movieHandler()}>
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
