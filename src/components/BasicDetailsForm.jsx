import { FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, SimpleGrid} from "@chakra-ui/react";
import React from "react";

const BasicDetails = () => {

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
      <FormControl>
        <FormLabel>First name:</FormLabel>
        <Input type="text" placeholder="Your first name" _placeholder={{opacity: 0.8, color: 'white'}}/>
      </FormControl>
      <FormControl>
        <FormLabel>Last name:</FormLabel>
        <Input type="text" placeholder="Your last name" _placeholder={{opacity: 0.8, color: 'white'}}/>
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number:</FormLabel>
      <InputGroup>
        <InputLeftAddon children='+91' color='blue.600' />
        <Input type='tel' placeholder="phone number" maxLength={10} pattern="[0-9]{10}" _placeholder={{opacity: 0.8, color: 'white'}}/>
      </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Email address:</FormLabel>
        <Input type="email" placeholder="Your email address" _placeholder={{opacity: 0.8, color: 'white'}}/>
        <FormHelperText>Enter email address where you would like to get contacted for jobs</FormHelperText>
      </FormControl>
    </SimpleGrid>
  )
}

export default BasicDetails;
