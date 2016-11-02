var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');
import './Home.css'



function Home (props) {
  return (
    <div className="container">
      <h1 className="header">Enter a City and State</h1>
      <GetCityContainer />
    </div>
  )
}

module.exports = Home;
