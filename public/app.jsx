window.onload  = function() {
  var React = require('react');

var HelloName = React.createClass({
  render: function() {
    return <div>Hello {this.props.name} </div>;
  }
});

React.render(
  <HelloName name="Nena" />,
  document.getElementById('name')
);
}