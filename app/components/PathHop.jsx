var React = require('react');
var Nav = require('Nav');

var PathHop = React.createClass({
  render: function() {
    return (
      <div className="path-hop">
        <Nav />

        <div className="row">
          <div className="title-section columns medium-9 medium-offset-3">
            <h4>pathHop</h4>
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
                  <div className="button grey leaflet tech">leaflet</div>
                  <div className="button grey mapbox tech">mapbox</div>
                  <div className="button grey node tech">node</div>
                </div>
              </div>

            </div>

          </div>

          <div className="row">
            <div className="summary columns medium-6 medium-offset-3 left">
              <p className="text-center">this is pathHop, a social network where users can create a map out
                of the places they visit, and share their maps with friends.</p>
            <a href="http://path-hop.herokuapp.com/"><img src="img/pathHop.jpg" className="centered"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PathHop;
