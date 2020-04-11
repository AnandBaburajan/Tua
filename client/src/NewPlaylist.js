import axios from 'axios';
import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const NewPlaylist = () => {

  const [toAddName, setName] = useState("");
  const [toAddLink, setLink] = useState("");
  const handleNameChange = (e, { name, value }) => {
    setName(value);
  };
  const handleLinkChange = (e, { name, value }) => {
    setLink(value);
  };
  const addNewPlaylist = () => {
    
    axios.post('/new', {
      name: toAddName, link: toAddLink
    })
    .then(res => console.log(res));

  };

  return (
    <div className="newForm">
      <Form onSubmit={addNewPlaylist}>
        <Form.Group inline required>
          <Form.Field required>
            <Input onChange={handleNameChange} value={toAddName} placeholder="Name" name="playname" id="playname" />
          </Form.Field>
          <Form.Field required>
            <Input onChange={handleLinkChange} value={toAddLink} placeholder="id" name="playid" id="playid" label='https://open.spotify.com/playlist/' />
          </Form.Field>
          <Form.Field>
            <Form.Button content="Add" />
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  )
}
export default NewPlaylist;