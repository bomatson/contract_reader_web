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
    got('http://instrumental.tech/users', options, null)
      .then(() => {
        this.setState({
          message: "Thanks! You've been added to the list",
          submitted: true
        });
      })
      .catch(console.log);
  }

  render() {
    const { message } = this.state;
    const post = this.post;

    if(!!this.state.submitted)
      return <EmailConfirmation message={message}/>
    else
      return <EmailSubmit something='true' submit={this.post}/>
  }
}

export default EmailForm

