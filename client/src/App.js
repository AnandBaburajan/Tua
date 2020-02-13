import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});
  fetch('/view')
    .then(res => res.json())
    .then(data => setData(data[1]));
  return (
    <div className="App">
      {data.name}<br/>
      {data.link}
    </div>
  );
}

export default App;
