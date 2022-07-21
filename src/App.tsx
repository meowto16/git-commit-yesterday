import React, { useState, useId } from 'react'
import generateCommit from "./utils/generateCommit";

import logo from './logo.svg';

import './App.css';

const MAX_DATE = new Date().toISOString().split('T')[0]

function App() {
  const formId = useId()
  const [result, setResult] = useState('')

  const handleBlur: React.FocusEventHandler = () => {
    const form = document.forms[formId as any]
    const message: string = form.message.value
    const date: string = form.date.value

    setResult(() => {
      if (message && date) return generateCommit(message, date)
      return ''
    })
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Commit for other day!</h1>
        <div>
          <form name={formId} onSubmit={(e) => e.preventDefault()}>
            <fieldset className="fieldset">
              <legend className="fieldset__legend">Create your commit ssh command</legend>
              <div className="fieldset__item">
                <label className="fieldset__label" htmlFor="commit-message">1. Commit message</label>
                <input id="commit-message"
                       name="message"
                       className="fieldset__input"
                       type="text"
                       placeholder="Enter commit message"
                       onBlur={handleBlur}
                />
              </div>

              <div className="fieldset__item">
                <label className="fieldset__label" htmlFor="commit-date">2. Date you want to commit</label>
                <input id="commit-date"
                       name="date"
                       className="fieldset__input"
                       type="date"
                       onBlur={handleBlur}
                       max={MAX_DATE}
                />
              </div>

              <div className="fieldset__result">
                <label className="fieldset__label">3. Result:</label>
                <textarea
                  className="fieldset__input fieldset__textarea"
                  value={result}
                  readOnly
                  onFocus={(e) => e.target.select()}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </header>
      <div className="app__copyright">
        <img src={logo} className="app__logo" alt="logo" />
        <p>
            Created by: <a href="https://github.com/meowto16" target="_blank" className="app__link">@meowto16</a>
        </p>
      </div>
    </div>
  );
}

export default App;
