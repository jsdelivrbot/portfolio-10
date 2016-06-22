var React = require('react');
var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');
var {Link, IndexLink} = require('react-router');
var Carousel = require('nuka-carousel');

var Home = React.createClass({

  render: function() {
    return (
      <div className="row">
        <h3>Selected Projects</h3>
        <Carousel>
          <Link to='portfolio'><h5>Portfolio</h5><img className="text-center" src={"img/eeyore.jpeg"}/></Link>
          <Link to='travelbug'><h5>Travelbug</h5><img className="text-center" src={"img/travelbug.jpg"}/></Link>
          <Link to='pathhop'><h5>pathHop</h5><img className="text-center" src={"img/pathHop.jpg"}/></Link>
          <Link to='weather'><h5>React Weather</h5><img className="text-center" src={"img/reactWeather.jpg"}/></Link>
          <Link to='circles'><h5>Circles and Squares of Doom</h5><img className="text-center" src={"img/circles.jpg"}/></Link>
        </Carousel>
      </div>
    )
  }
});

module.exports = Home;
