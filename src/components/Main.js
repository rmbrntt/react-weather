import React, {Component} from 'react';
//import logo from './logo.svg';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                <div className="row">
                  <div className="col-md-4">
                    <h2>Weather App</h2>
                  </div>
                  <div className="col-md-1 col-md-offset-6">
                    <div className="form-group">
                    <input className="form-control" type="text" placeholder="Washington, DC"/>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button className="btn btn-success">Get Weather</button>
                  </div>
                </div>

                </div>
                <div className="content">
                    <div className="container-fluid">
                      <h1 className="title">
                        Enter a City and State
                      </h1>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Washington, DC"/>
                      </div>
                      <button className="btn btn-success">Get Weather</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;
