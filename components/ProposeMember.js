import React, { Component } from "react";
import {
  chakra,
  Input,
  Button,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

class ProposeMember extends Component {

  render() {
    return (
      <React.Fragment>

          <form onSubmit={this.props.submitProposal}>
            <Stack spacing={3}>
              <Input type="hidden" name="dao" value={this.props.dao['address']} />
              <Input type="hidden" name="proposalType" value={0} />
              <Text>Description</Text>
              <Input name="description" placeholder="e.g., I propose adding [person] as a member..."></Input>
              <Text>Account to receive shares</Text>
              <Input name="account" placeholder="e.g., 0x..."></Input>
              <Text>Number of shares</Text>
              <NumberInput name="amount"><NumberInputField /></NumberInput>
              <Input name="payload" type="hidden" value="0x"></Input>
              <Button type="submit">Submit Proposal</Button>
            </Stack>
          </form>

      </React.Fragment>
    );
  }
}

export default ProposeMember;
