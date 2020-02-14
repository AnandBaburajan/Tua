import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(
    {"data": [ {"id":null, "name": null, "link": null} ] }
  );

  fetch('/view')
    .then(res => res.json())
    .then(data => setData(data));
  return (
    <div className="App">
      <div>{data["data"][0]["name"]}</div>
    </div>
  );
}

export default App;
