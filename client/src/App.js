import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  fetch('/view')
    .then(res => res.json())
    .then(data => setData(data));
    var naam = data["data"]==null? "" : data["data"][0]["name"];
  return (
    <div className="App">
      <div>
          {naam}
      </div>
    </div>
  );
}

export default App;
