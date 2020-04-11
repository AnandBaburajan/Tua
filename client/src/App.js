import React, {useState} from 'react';
import NewPlaylist from './NewPlaylist';
import './App.css';

function App() {
  const [data, setData] = useState({});

  fetch('/view')
    .then(res => res.json())
    .then(data => setData(data));
    const len = data["data"]==null? 0 : data["data"].length;
    const items = []

    for (let i=0;i<len;i++) {
      var link = data["data"]==null? "" : data["data"][i]["link"];
      var name = data["data"]==null? "" : data["data"][i]["name"];
      items.push(
        <div className="item">
        <h4 className="name">{name}</h4>
        <iframe className="playlist" title="playlist" src={"https://open.spotify.com/embed/playlist/" + link} height="280" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      )
    }
  

  return (
    <div className="App">
      <div className="tuanav">
        <h3 className="tua">Tua</h3>
        <NewPlaylist/>
      </div>
      
      <h1 className="friends">What your friends are listening to</h1>
      <div className="list">
          {items}
      </div>
    </div>
  );
}

export default App;
