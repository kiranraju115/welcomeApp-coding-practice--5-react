// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.onButtonText()

    return (
      <div className="container">
        <h1 className="header">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
