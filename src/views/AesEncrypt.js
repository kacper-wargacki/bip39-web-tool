import React, { useState } from "react";

import { Container, Form, FormControl, FormGroup, ControlLabel } from "rsuite";

import { AES } from "crypto-js";
import Encryption from "../components/Encryption";

export default function AesEncrypt() {
  const [message, setMessage] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Message</ControlLabel>
          <FormControl
            onChange={setMessage}
            rows={5}
            name="Message"
            componentClass="textarea"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Encryption Key</ControlLabel>
          <FormControl
            name="Encryption key"
            type="text"
            onChange={setEncryptionKey}
          />
        </FormGroup>
      </Form>
      <Encryption
        triggerFunction={() => {
          return AES.encrypt(message, encryptionKey).toString();
        }}
      />
    </Container>
  );
}
