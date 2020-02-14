import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  fetch('/view')
    .then(res => res.json())
    .then(data => setData(data));
    var link = data["data"]==null? "" : data["data"][3]["link"];
    var name = data["data"]==null? "" : data["data"][3]["name"];
  return (
    <div className="App">
      <div className="tuanav">
        <h3 className="tua">Tua</h3>
      </div>
      <div className="list">
        <div>
          <h4 className="name">{name}</h4>
          <iframe className="playlist" title="playlist" src={"https://open.spotify.com/embed/playlist/" + link} height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
          <h4 className="name">{name}</h4>
          <iframe className="playlist" title="playlist" src={"https://open.spotify.com/embed/playlist/" + link} height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
          <h4 className="name">{name}</h4>
          <iframe className="playlist" title="playlist" src={"https://open.spotify.com/embed/playlist/" + link} height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
          <h4 className="name">{name}</h4>
          <iframe className="playlist" title="playlist" src={"https://open.spotify.com/embed/playlist/" + link} height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
