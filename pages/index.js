import React, { Component } from "react";
import { ChakraProvider, Container } from '@chakra-ui/react';
import factory from '../eth/factory.js';
import web3 from '../eth/web3.js';
import Router, { useRouter } from 'next/router';
import Layout from '../components/Layout.js';
import {
  chakra,
  Flex,
  Input,
  Button,
  Text,
  NumberInput,
  NumberInputField,
  Select
} from '@chakra-ui/react';

class Factory extends Component {

  async createDAO() {
    event.preventDefault();
    let object = event.target;
    var array = [];
    for(let i=0; i<object.length; i++) {
      array[object[i].name] = object[i].value;
    }
    const { name, symbol, voters, shares, votingPeriod, quorum, supermajority, mint, burn, call, gov } = array;
    const accounts = await web3.eth.getAccounts();
    let result = await factory.methods.deployKaliDAO(
        name, symbol, true, voters.split(","), shares.split(","), votingPeriod, quorum, supermajority, mint, burn, call, gov
    ).send({ from: accounts[0] });

    let dao = result['events']['DAOdeployed']['returnValues']['kaliDAO'];

    Router.push({
        pathname: '/daos',
        query: { dao: dao }
    });
  }

  render() {

    return (
      <Container minHeight="100vh">
      <ChakraProvider>
        <Flex alignItems="center" justifyContent="center">
          <Flex p={12} rounded={20}>
          <form onSubmit={this.createDAO}>
            <Text>name of your DAO</Text>
            <Input name="name"></Input>
            <Text>symbol for your DAO's token</Text>
            <Input name="symbol"></Input>
            <Text>addresses of initial members</Text>
            <Input name="voters" placeholder="separated by commas, e.g.: 0xabc, 0xdef, 0xghi"></Input>
            <Text>shares for initial members</Text>
            <Input name="shares" placeholder="separated by commas, e.g.: 1,2,3"></Input>
            <Text>voting period (in seconds)</Text>
            <NumberInput name="votingPeriod"><NumberInputField /></NumberInput>
            <Text>quorum (1-100)</Text>
            <NumberInput name="quorum"><NumberInputField /></NumberInput>
            <Text>supermajority (1-100)</Text>
            <NumberInput name="supermajority"><NumberInputField /></NumberInput>
            <Text>vote type - MINT</Text>
            <Select name="mint">
              <option value={0}>SIMPLE_MAJORITY</option>
              <option value={1}>SIMPLE_MAJORITY_QUORUM_REQUIRED</option>
              <option value={2}>SUPERMAJORITY</option>
              <option value={3}>SUPERMAJORITY_QUORUM_REQUIRED</option>
            </Select>
            <Text>vote type - BURN</Text>
            <Select name="burn">
              <option value={0}>SIMPLE_MAJORITY</option>
              <option value={1}>SIMPLE_MAJORITY_QUORUM_REQUIRED</option>
              <option value={2}>SUPERMAJORITY</option>
              <option value={3}>SUPERMAJORITY_QUORUM_REQUIRED</option>
            </Select>
            <Text>vote typee - CALL</Text>
            <Select name="call">
              <option value={0}>SIMPLE_MAJORITY</option>
              <option value={1}>SIMPLE_MAJORITY_QUORUM_REQUIRED</option>
              <option value={2}>SUPERMAJORITY</option>
              <option value={3}>SUPERMAJORITY_QUORUM_REQUIRED</option>
            </Select>
            <Text>vote type - GOV</Text>
            <Select name="gov">
              <option value={0}>SIMPLE_MAJORITY</option>
              <option value={1}>SIMPLE_MAJORITY_QUORUM_REQUIRED</option>
              <option value={2}>SUPERMAJORITY</option>
              <option value={3}>SUPERMAJORITY_QUORUM_REQUIRED</option>
            </Select>
            <Button type="submit">Summon KaliDAO</Button>
          </form>
          </Flex>
        </Flex>
      </ChakraProvider>
      </Container>
    );
  }
}

export default Factory;
