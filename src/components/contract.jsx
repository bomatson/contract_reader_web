import React from 'react';
class Contract extends React.Component {
  sentences() {
    if (!!this.props.contract.summary) {
      let sentences = this.props.contract.summary.split('.');

      return sentences.map((sent, index) => {
        let num = (index + 1) + '. ';
        if (sent.length > 0) {
          return (
            <div className='sentence'>
              <strong>{ num }</strong>
              { sent }
            </div>
          );
        }
      });
    }
  }

  render() {
    let contract = this.props.contract;
    let sentences = contract ? this.sentences() : null;

    return (
      <div>
        { sentences }
      </div>
    );
  }
}

export default Contract
