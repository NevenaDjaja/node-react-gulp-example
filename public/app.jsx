var React = require('react');

var HelloYou = React.createClass({
  render: function() {
    return <div>Hello {this.props.name} </div>;
  }
});

React.renderComponent(
  <helloMessage name="Nena" />,
  document.getElementById('name')
);