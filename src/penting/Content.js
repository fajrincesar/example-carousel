import React, { Component } from 'react';
import './../styles/Content.css';
class Content extends Component {
  render() {
    return (
      <div className="Content">
          <div className="jumbotron">
              <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4"></hr>
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
            
            <div className="container">
                <div className="row">
                  <div className="panel panel-primary">
                    <div className="panel-heading"><h1>Panel Title</h1></div>
                    <div className="panel-body"><p>lorem ipsum dolor shit</p></div>
                    <div className="panel-footer"><a href="http://www.kompas.com/" target="_blank">Continue..</a></div>
                  </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
            <div class="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title" data-target="#panel-1" data-toggle="collapse" data-parent="#lin_accor">bootstrap</h3>
                    </div>
                    <div className="panel-collapse collapse" id="panel-1">
                        <div className="panel-body">
                            <p>lorem ipsum dolor man shit amat</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <center><button className="btn btn-primary">click</button></center><br></br>
      </div>
    );
  }
}

export default Content;