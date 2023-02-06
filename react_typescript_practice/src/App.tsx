import React, { useState } from 'react'
import './App.css'
import Copier from './components/Copier'

const quotes: string[] = [
  'random words',
  'todd wuz here',
  'bugs in the system',
  'pink lemonade is the greatest album of all time',
  'howdy'
]

type AppState = {
  count: number
}

type AppProps = {
  message: string
}

export default class App extends React.Component<AppProps, AppState> {
  
  state: Readonly<AppState> = {
    count: 0
  }

  increment = (): void => {
    this.setState({count: this.state.count + 1})
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <div className='card'>
          <p>{this.props.message}</p>
        </div>
        <div className="card">
          <button onClick={this.increment}>
            count is {this.state.count}
          </button>
        </div>
        <div className='card'>
          <Copier quotes={quotes}/>
        </div>
      </div>
    )
  }
  
}