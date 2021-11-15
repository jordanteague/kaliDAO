import React, { Component } from "react";
import {
  chakra,
  Input,
  Button,
  Text,
  Flex,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Badge
} from '@chakra-ui/react';
import web3 from '../eth/web3.js';

class Proposals extends Component {

  render() {

    const { dao, proposals } = this.props;

    return (
      <React.Fragment>

        <Flex alignItems="center" justifyContent="center">
          { proposals.length == 0 ?
            <Flex>
              <Text>Not much going on in here...make a proposal!</Text>
            </Flex>
             :
          <Table variant="simple">
            {proposals.map((p, index) => (
              <Tr key={index}>
                <Td>{p['type']}</Td>
                <Td>{p['description']}</Td>
                <Td><Badge colorScheme="green">yes: {p['yesVotes']}</Badge></Td>
                <Td><Badge colorScheme="red">no: {p['noVotes']}</Badge></Td>
                <Td>
                  {p['open'] ?
                  <form onSubmit={this.props.vote}>
                    <Input type="hidden" name="dao" value={this.props.dao['address']} />
                    <Input type="hidden" name="index" value={index} />
                    <Select name="approval">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Select>
                    <Button type="submit">Vote</Button>

                  </form>
                :
                  <form onSubmit={this.props.process}>
                    <Input type="hidden" name="dao" value={this.props.dao['address']} />
                    <Input type="hidden" name="index" value={index} />
                    <Button type="submit">Process</Button>
                  </form>
                }
                </Td>
              </Tr>
            ))}
          </Table>
          }
        </Flex>

      </React.Fragment>
    );
  }
}

export default Proposals;
