import React from 'react';

class EmailSubmit extends React.Component {
  submit = () => {
    const email_address = this.refs.email_address.value;
    window.analytics.track('EmailSubmit')
    this.props.submit(email_address)
  }

  render() {
    return (
      <div>
        <div className='input-group'>
          <input
            className='form-control'
            type='text'
            ref='email_address'
            placeholder='bobby@important.com'
          />
        </div>
        <div className='modal-footer cta'>
          <button
            className='btn btn-lg'
            onClick={this.submit}
            aria-label='close'>Submit</button>
        </div>
      </div>
    );
  }
}

export default EmailSubmit
