import React from 'react';
class Contract extends React.Component {
  render() {
    console.log(this.props)
    if(this.props.contract) {
      return (
        <div> Hi </div>
      );
    } else {
      return null;
    }
  }
}

export default Contract
