import React from 'react';
import ReactDOM from 'react-dom';

//css
import "./css/index.css"

//components
import Navigation from "./components/navigation.js"

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
        <div className="main-grid-item item2">
          <p>2</p>
        </div>
        {/* Services */}
        <div className="main-grid-item">
          <p>3</p>
        </div>
        {/* Sponsors */}
        <div className="main-grid-item">
          <p>4</p>
        </div>
        {/* Features */}
        <div className="main-grid-item">
          <p>5</p>
        </div>
        {/* Footer */}
        <div className="main-grid-item">
          <p>6</p>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));