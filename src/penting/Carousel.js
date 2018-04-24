import React, { Component } from 'react';
import allianz from './../pict/ban1.png';
import azs from './../pict/ban2.png';
import jv from './../pict/ban3.png';

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={allianz} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={azs} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={jv} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
      </div>
    );
  }
}

export default Carousel;
