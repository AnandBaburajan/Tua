import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const NewPlaylist = () => {
  return (
    <div className="newForm">
      <Form>
        <Form.Group inline required>
          <Form.Field required>
            <Input placeholder="Name" name="playname" id="playname" />
          </Form.Field>
          <Form.Field required>
            <Input placeholder="id" name="playid" id="playid" label='https://open.spotify.com/playlist/' />
          </Form.Field>
          <Form.Field>
            <Button>Add</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  )
}
export default NewPlaylist;