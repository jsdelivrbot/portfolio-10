var React = require('react');
var Nav = require('Nav');

var Circles = React.createClass({
  render: function () {
    return (
      <div className="circles">
        <Nav />

        <div className="row">
          <div className="title-section columns medium-9 medium-offset-3">
            <h4>Circles and Squares of Doom</h4>
          </div>

          <div className="row">

            <div className="columns small-12 medium-9 medium-offset-3 info">

              <div className="columns medium-2 left info-title info-type">
                <p>type</p>
                <div className="info-content">
                  <div className="button grey">game</div>
                </div>
              </div>

              <div className="columns medium-10 left info-title info-tech">
                <p>tech</p>
                <div className="tech-list right">
                  <div className="button grey javascript tech">javascript</div>
                  <div className="button grey angular tech">angular</div>
                </div>
              </div>

            </div>

          </div>

          <div className="row">
            <div className="summary columns medium-6 medium-offset-3 left">
              <p className="text-center">this is circles and squares of doom, a game written in Angular.
              It is tetris-meets-dungeons-and-dragons. The object of the game is to connect as many of the
              same-colored flame icons as possible. Connecting squares of the same-colored icon together destroys
              all other icons with the same color and gets you extra points.</p>
            <a href="http://www.kevintokheim.com/Circles-and-Squares-of-Doom/"><img src="img/circles.jpg" className="centered"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Circles;
