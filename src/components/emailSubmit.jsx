import React from 'react';
import got from 'got';

class EmailSubmit extends React.Component {
  post = () => {
    let email_address = this.refs.email_address.value;
    let body = JSON.stringify({email_address});
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body
    };
    got('http://instrumental.tech/users', options, null)
      // .then((resp) => {
      //   if(resp.body)
      //     this.setState({contract: resp.body});
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
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
            data-dismiss='modal'
            onClick={this.post}
            aria-label='close'>Submit</button>
        </div>
      </div>
    );
  }
}

export default EmailSubmit
