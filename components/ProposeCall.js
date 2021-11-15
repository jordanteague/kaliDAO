import React, { Component } from "react";
import {
  chakra,
  Input,
  Button,
  Stack,
  Text
} from '@chakra-ui/react';

class ProposeCall extends Component {

  render() {
    return (
      <React.Fragment>

      <form onSubmit={this.props.submitProposal}>
        <Stack spacing={3}>
          <Input type="hidden" name="dao" value={this.props.dao['address']} />
          <Input type="hidden" name="proposalType" value={2} />
          <Text>Description</Text>
          <Input name="description" placeholder="e.g., I propose calling function X of contract Y"></Input>
          <Text>Contract Address</Text>
          <Input name="account" placeholder="e.g., 0x..."></Input>
          <Input name="amount" type="hidden" value={0} />
          <Text>ABI-Encoded Payload</Text>
          <Input name="payload" placeholder="e.g., 0x..."></Input>
          <Button type="submit">Submit Proposal</Button>
        </Stack>
        </form>

      </React.Fragment>
    );
  }
}

export default ProposeCall;
