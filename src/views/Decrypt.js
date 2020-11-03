import React, { useState } from "react";

import { Form, FormGroup, FormControl, ControlLabel, Container } from "rsuite";
import Decryption from "../components/Decryption";

import { decryptWithPrivateKey } from "eth-crypto";

export default function Decrypt() {
  const [privKey, setPrivKey] = useState("");
  const [cipheredText, setCipheredText] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Priv Key</ControlLabel>
          <FormControl
            rows={5}
            name="privkey"
            componentClass="textarea"
            onChange={setPrivKey}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Ciphered text</ControlLabel>
          <FormControl
            rows={5}
            name="ciphered text"
            componentClass="textarea"
            onChange={setCipheredText}
          />
        </FormGroup>
      </Form>
      <Decryption
        triggerFunction={() => {
          const decoded = JSON.parse(atob(cipheredText));
          return decryptWithPrivateKey(privKey, decoded);
        }}
      />
    </Container>
  );
}
