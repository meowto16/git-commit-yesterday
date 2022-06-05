import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import generateCommit from "./utils/generateCommit";

const MAX_DATE = new Date().toISOString().split('T')[0]

function App() {
  const [commitMessage, setCommitMessage] = useState('')
  const [commitDate, setCommitDate] = useState<Date>(new Date())
  const [result, setResult] = useState(() => generateCommit(commitMessage, commitDate))

  const handleChangeCommitMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setCommitMessage(event.target.value)
  }

  const handleChangeCommitDate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setCommitDate(event.target.value ? new Date(event.target.value) : new Date())
  }

  useEffect(() => {
      setResult(() => generateCommit(commitMessage, commitDate))
  }, [commitMessage, commitDate])

  return (
    <div className="app">
      <header className="app__header">
        <h1>Commit for other day!</h1>
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset__legend">Create your commit ssh command</legend>

                <div className="fieldset__item">
                    <label className="fieldset__label" htmlFor="commit-message">1. Commit message</label>
                    <input id="commit-message"
                           className="fieldset__input"
                           type="text"
                           value={commitMessage}
                           onChange={handleChangeCommitMessage}
                           placeholder="Enter commit message"
                    />
                </div>

                <div className="fieldset__item">
                    <label className="fieldset__label" htmlFor="commit-date">2. Date you want to commit</label>
                    <input id="commit-date"
                           className="fieldset__input"
                           type="date"
                           value={commitDate.toISOString().split('T')[0]}
                           onChange={handleChangeCommitDate}
                           max={MAX_DATE}
                    />
                </div>

                <div className="fieldset__result">
                    <label className="fieldset__label">3. Result:</label>
                    <textarea className="fieldset__input fieldset__textarea" value={result} readOnly />
                </div>
            </fieldset>
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
