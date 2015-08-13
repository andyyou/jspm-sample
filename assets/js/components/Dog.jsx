import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.name}: bark!!!</div>
    );
  }
}

export default Dog;