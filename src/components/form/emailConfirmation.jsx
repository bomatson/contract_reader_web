import React from 'react';

class EmailConfirmation extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        <div className='input-group text-center'>
          <p className='confirmation'> {message} </p>
        </div>
        <div className='modal-footer cta'>
          <button
            className='btn btn-lg'
            data-dismiss='modal'
            aria-label='close'>Close</button>
        </div>
      </div>
    );
  }
}

export default EmailConfirmation
