import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">Step 1</Link>
              </li>
              <li className="navbar-item">
                <Link to="/step2" className="navbar-link">Step 2</Link>
              </li>
              <li className="navbar-item">
                <Link to="/step3" className="navbar-link">Step 3</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/Welcome" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
