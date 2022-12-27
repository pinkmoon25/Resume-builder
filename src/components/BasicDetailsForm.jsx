import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const BasicDetails = () => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const handleInput = (e) => setFirstname(e.target.value);

  return (
    <FormControl>
      <FormLabel>First name</FormLabel>
      <Input type="text" placeholder="Your first name" value={firstname} onChange={handleInput}/>
      <FormLabel>Last name</FormLabel>
      <Input type="text" placeholder="Your last name" value={lastname} onChange={handleInput}/>
    </FormControl>
  )
}

export default BasicDetails;
