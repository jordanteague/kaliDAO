import React, {Component} from "react";
import {
  chakra,
  Flex,
  Button,
  Text,
  Spacer,
  VStack
} from '@chakra-ui/react';

class Nav extends Component {

  render() {
    return (
      <Flex bgColor="blue.900" padding={5} marginBottom={10} width="100vw">
        <Flex><Button colorScheme="blue" size="sm">{this.props.account}</Button></Flex>
      </Flex>
    );
  }
}

export default Nav;
