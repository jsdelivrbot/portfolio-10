var React = require('react');
var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');
var {Link, IndexLink} = require('react-router');

// <div className="image-wrapper overlay-fade-in">
//   <Link to='travelbug'><h5 className="name">Travelbug</h5><img className="text-center" src={"img/travelbug.jpg"}/></Link>
//   <div className="image-overlay-content"><h5>travelbug</h5></div>
// </div>
var Home = React.createClass({
  render: function() {
    return (
      <div className="row home">
        <h5 className="selected-projects">Selected Projects</h5>
        <div className="row">
          <div className="columns medium-centered medium-8">
              <Link to='travelbug'><h5 className="name">Travelbug</h5>
                <div className="image-wrapper overlay-fade-in">
                  <img className="text-center" src={"img/travelbug.jpg"}/>
                    <div className="image-overlay-content"><h5>travelbug</h5></div>
                </div>
              </Link>
              <Link to='pathhop'><h5 className="name">pathHop</h5><img className="text-center" src={"img/pathHop.jpg"}/></Link>
              <Link to='weather'><h5 className="name">React Weather</h5><img className="text-center" src={"img/reactWeather.jpg"}/></Link>
              <Link to='circles'><h5 className="name">Circles and Squares of Doom</h5><img className="text-center" src={"img/circles.jpg"}/></Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
