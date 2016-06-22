var React = require('react');
var Nav = require('Nav');

var Travelbug = React.createClass({
  render: function() {
    return (
      <div className="travelbug">
        <Nav />

        <div className="row">
          <div className="title-section columns medium-9 medium-offset-3">
            <h4>travelbug</h4>
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
                  <div className="button grey laravel tech">laravel</div>
                  <div className="button grey php tech">php</div>
                </div>
              </div>

            </div>

          </div>

          <div className="row">
            <div className="summary columns medium-6 medium-offset-3 left">
              <p className="text-center">this is travelbug, a social network aimed at connecting travelers to other travelers. it was built
              using the php framework laravel, along with sass and bootstrap.</p>
            <a href="http://infinite-badlands-99742.herokuapp.com/"><img src="img/travelbug.jpg" className="centered"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Travelbug;
