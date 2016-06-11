var React = require('react');
var Nav = require('Nav');

var Travelbug = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h4>travelbug</h4>
        <div class="section info-section">
          <div class="info">
            <div class="info-title info-type">type</div>
            <div class="info-content">
              <div class="button grey">web app</div>
            </div>
            <div class="info-tech">tech</div>
            <div class="tech-list">
              <div class="laravel tech">laravel</div>
              <div class="php tech">php</div>
            </div>
          </div>
        </div>
        <div class="summary">
          <p>this is travelbug, a social network aimed at connecting travelers to other travelers. it was built
          using the php framework laravel, along with sass and bootstrap. I envisioned this project as a way
          for travelers to stay in touch with the friends they make on their travels, while not being as much of a
          distraction as other social networks tend to be. </p>
          <img src="img/travelbug.jpg"/>
        </div>
      </div>
    );
  }
});

module.exports = Travelbug;
