import React from 'react';
import '../../assets/css/cards.css';
import yt from '../../assets/img/youtube.png';

function Cards() {
  return (
    <div>
      <div className="card justify-content-around" >
        <div className="view overlay">
          <img className="card-img-top" src={yt} alt="carf image cap" />
          <a>
            <div className="mask rgba-white-slight waves-effect waves-light"></div>
          </a>
        </div>

        <div className="card-body">

        </div>
        <h4 className="card-title">Card title</h4>
        <hr />

        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>

        <a href="#!" className="black-text d-flex justify-content-end">
          <h5>Read more <i className="fa fa-angle-double-right"></i></h5>
        </a>

      </div>

    </div>


  );
}
export default Cards

