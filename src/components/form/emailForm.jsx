import React from 'react';
import EmailSubmit from './emailSubmit.jsx';
import EmailConfirmation from './emailConfirmation.jsx';
import got from 'got';

class EmailForm extends React.Component {
  state = {
    submitted: false,
    message: ''
  }

  post = (email_address) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body: JSON.stringify({email_address})
    };
    got('https://contract-reader.herokuapp.com/users', options, null)
      .then(() => {
        this.setState({
          message: 'Thanks! You\'ve been added to the list',
          submitted: true
        });
      })
  }

  render() {
    const { message } = this.state;

    if(!!this.state.submitted)
      return <EmailConfirmation message={message}/>
    else
      return <EmailSubmit submit={this.post}/>
  }
}

export default EmailForm
