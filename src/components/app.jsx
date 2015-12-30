import React from 'react';
import Contract from './contract.jsx';
import got from 'got';

class App extends React.Component {
  state = {
    contract: null,
    link: null
  }

  fetch = (e) => {
    let link = this.refs.contractLink.value;
    let body = JSON.stringify({link});
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      json: true,
      body
    };
    got('http://contract-reader.herokuapp.com/contracts', options, null)
      .then((resp) => {
        if(resp.body)
          this.setState({contract: resp.body});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='new-submission'>
        <h1 className='heading'>Summarize</h1>
        <p className='subheading'>Paste a link of your contract to see a summary of its contents</p>
        <fieldset>
          <input
            type='text'
            maxLength='300'
            autoComplete='off'
            autoFocus='true'
            ref='contractLink' />
        </fieldset>

        <div className='submit-link'>
          <button
            value='Read Contract'
            onClick={this.fetch}
            data-transition='fade'>
              Read Contract
          </button>
        </div>
        <Contract contract={this.state.contract} />
      </div>
    );
  }
}

export default App
