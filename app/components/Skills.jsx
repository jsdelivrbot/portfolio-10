var React = require('react');
var Portfolio = require('Portfolio');

var Skills = React.createClass({
    // use the map method to create arrays of projects and skills
    render: function(){
            var skills = this.props.skillList.map(function(skill, index){
                return (<li key={index}>{skill}</li>);
            });

            return (
                <div className="skills col-md-12 text-center">
                    <h5 className="heading">Things I Like to Do:</h5>
                    <ul className="skillList menu simple inline-list">
                    {skills}
                    </ul>
                </div>
        );
    }
});

module.exports = Skills;
