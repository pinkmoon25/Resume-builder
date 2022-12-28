import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import {IoIosAddCircle} from 'react-icons/io';

const BasicDetails = () => {
  const [addressSection, setAddressSection] = React.useState([]);

  const createAddressSection = () => {
    setAddressSection(
      addressSection.concat(
        <FormControl>
          <FormLabel>Address: </FormLabel>
          <Input
            type="text"
            placeholder="city, state, country"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
      )
    );
  };

  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>First name:</FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last name:</FormLabel>
          <Input
            type="text"
            placeholder="Your last name"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number:</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+91" color="blue.600" />
            <Input
              type="tel"
              placeholder="phone number"
              maxLength={10}
              pattern="[0-9]{10}"
              _placeholder={{ opacity: 0.8, color: "white" }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Email address:</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
          <FormHelperText>
            Enter email address to get contacted for jobs
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Linkedin:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Github:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Portfolio or Website:</FormLabel>
          <Input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        {addressSection}
      </SimpleGrid>
      <Button
        colorScheme="green"
        onClick={createAddressSection}
        isDisabled={addressSection.length}
        w="max-content"
        rightIcon={<IoIosAddCircle/>}
      >
        Add Address
      </Button>
    </Stack>
  );
};

export default BasicDetails;
