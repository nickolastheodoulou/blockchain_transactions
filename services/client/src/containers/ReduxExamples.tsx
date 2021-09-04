import React from 'react'
import logo from '../logo.svg'
import {Counter} from '../features/counter/Counter'
import './ReduxExamples.tsx.css'

const ReduxExamples = () => {
  return(
    <div className="ReduxExamples">
      <header className="ReduxExamples  -header">
        <img src={logo} className="ReduxExamples-logo" alt="logo" />
        <Counter />
        <p>
                  Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="ReduxExamples-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="ReduxExamples-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="ReduxExamples-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="ReduxExamples-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default ReduxExamples
