import React from 'react';
import '../../assets/css/cards.css';
import yt from '../../assets/img/youtube.png';

function Cards() {
    return (
     <div>
        <div class="card justify-content-around" >
        <div class="view overlay">
            <img class="card-img-top" src={yt} alt="carf image cap"/>
            <a>
                <div class="mask rgba-white-slight waves-effect waves-light"></div>
              </a>
        </div>

        <div class="card-body">

            </div>
            <h4 class="card-title">Card title</h4>
            <hr/>
            
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            
            <a href="#!" class="black-text d-flex justify-content-end">
              <h5>Read more <i class="fa fa-angle-double-right"></i></h5>
            </a>
    
          </div>

    </div>
    
    
    );
}
export default Cards

