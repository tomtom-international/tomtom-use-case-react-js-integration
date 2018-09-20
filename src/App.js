import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + "/sdk/tomtom.min.js";
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tomtom.L.map('map', {
        source: 'vector',
        key: '<your-api-key>',
        center: [37.769167, -122.478468],
        basePath: '/sdk',
        zoom: 15
      });
    }
  }

  render() {
    return <div id = "map" ></div>
  }
}

export default App;
