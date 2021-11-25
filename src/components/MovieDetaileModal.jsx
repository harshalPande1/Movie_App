import React from 'react'
import ReactDom from 'react-dom';
const MovieDetaileModal = ({closebtn ,selectMovie }) => {
    const movieDetaile = <div className="movieModal">
    <header>
            <button onClick={()=>closebtn()}>X</button>
    </header>
    <div className="movieDetailes">
    <div className="movieImg">
        <img src={selectMovie[0].i.imageUrl} alt='moviePoster' />
    </div>
      <div className="movieInfo">
      <h2>{selectMovie[0].l}</h2>
    
       <div> <strong>Cast :  </strong> <p className="movieDet">{selectMovie[0].s}</p> </div>
       <div> <strong>rank :  </strong> <p className="movieDet">{selectMovie[0].rank}</p> </div>
       <div> <strong>Year :  </strong> <p className="movieDet">{selectMovie[0].y}</p> </div>
      </div>
    </div>
    </div>
    return ReactDom.createPortal(movieDetaile,document.getElementById('movieDetailes'));
}

export default MovieDetaileModal
