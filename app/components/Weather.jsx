var React = require('react');
var Nav = require('Nav');

var Weather = React.createClass({
  render: function() {
    return (
      <div className="weather">
        <Nav />

        <div className="row">
          <div className="title-section columns medium-9 medium-offset-3">
            <h4>How's the Weather?</h4>
          </div>

          <div className="row">

            <div className="columns small-12 medium-9 medium-offset-3 info">

              <div className="columns medium-2 left info-title info-type">
                <p>type</p>
                <div className="info-content">
                  <div className="button grey">web app</div>
                </div>
              </div>

              <div className="columns medium-10 left info-title info-tech">
                <p>tech</p>
                <div className="tech-list right">
                  <div className="button grey javascript tech">javascript</div>
                  <div className="button grey react tech">react</div>
                  <div className="button grey webpack tech">webpack</div>
                  <div className="button grey foundation tech">foundation</div>
                </div>
              </div>

            </div>

          </div>

          <div className="row">
            <div className="summary columns medium-6 medium-offset-3 left">
              <p className="text-center">this is how's the weather?, a react single page app that allows the user
              to search for the current temperature of a specific city.</p>
            <a href="http://howstheweathertoday.herokuapp.com/#/?_k=pgbew5"><img src="img/reactWeather.jpg" className="centered"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Weather;
