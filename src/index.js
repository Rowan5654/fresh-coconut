import React from 'react';
import ReactDOM from 'react-dom';

//css
import "./css/index.css"

//components
import Navigation from "./components/navigation.js"
import Introduction from "./components/introduction.js"
import Services from './components/services';
import Sponsors from './components/sponsors';

function App()
{
  return (
    <>
      <div className="main-grid">
        {/* Navigation */}
        <div className="main-grid-item">
          {Navigation()}
        </div>
        {/* Splash Title */}
        <div className="main-grid-item">
          {Introduction()}
        </div>
        {/* Services */}
        <div className="main-grid-item">
          {Services()}
        </div>
        {/* Sponsors */}
        <div className="main-grid-item sponsors">
          {Sponsors()}
        </div>
        {/* Features */}
        <div className="main-grid-item" id="next">
          <p>5</p>
        </div>
        {/* Footer */}
        <div className="main-grid-item" id="unfinished">
          <p>6</p>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));