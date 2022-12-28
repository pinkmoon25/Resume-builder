import { Button, FormLabel, SimpleGrid, Stack, FormControl, Input } from "@chakra-ui/react";
import React from "react";
import {IoIosAddCircle} from 'react-icons/io';

const EduacationDetails = () => {

  const [educationSection, setEduactionSection] = React.useState([]);
  const [certificateSection, setCertificateSection] = React.useState([]);

  const createCertificateSection = ()=> {
    setCertificateSection(certificateSection.concat(<FormControl>
      <FormLabel>Certificate Link: </FormLabel>
      <Input type='url' placeholder='Enter Certificate' _placeholder={{opacity: 0.8, color: 'white'}} mb={4} />
      <FormLabel>Additional Details: </FormLabel>
      <Input type='text' placeholder='eg. Level1 or React or Data Science' _placeholder={{opacity: 0.8, color: 'white'}} />
      </FormControl>))
  }

  const createEducationSection = () => {
    setEduactionSection(educationSection.concat(educationForm()));
  }

  const educationForm = () => (
<>
<FormControl>
  <FormLabel>College/University or School: </FormLabel>
  <Input
    type="text"
    placeholder="school, college or university name"
    _placeholder={{ opacity: 0.8, color: "white" }}
  />
</FormControl>
<FormControl>
  <FormLabel>Course/Degree or Graduation: </FormLabel>
  <Input
    type="text"
    placeholder="Bachelors, Masters or High school diploma"
    _placeholder={{ opacity: 0.8, color: "white" }}
  />
</FormControl>
<FormControl>
  <FormLabel>Start date: </FormLabel>
  <Input
    type="month"
    placeholder="Enter in format YYYY-MM"
    _placeholder={{ opacity: 0.8, color: "white" }}
  />
</FormControl>
<FormControl>
  <FormLabel>End date: </FormLabel>
  <Input
    type="month"
    placeholder="Enter in format YYYY-MM"
    _placeholder={{ opacity: 0.8, color: "white" }}
  />
</FormControl>
</>
)

  return (
    <Stack>
    <SimpleGrid spacing={4} columns={[1, 1, 2]}>
      <FormControl>
        <FormLabel>College/University or School: </FormLabel>
        <Input
          type="text"
          placeholder="school, college or university name"
          _placeholder={{ opacity: 0.8, color: "white" }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Course/Degree or Graduation: </FormLabel>
        <Input
          type="text"
          placeholder="Bachelors, Masters or High school diploma"
          _placeholder={{ opacity: 0.8, color: "white" }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Start date: </FormLabel>
        <Input
          type="month"
          placeholder="Enter in format YYYY-MM"
          _placeholder={{ opacity: 0.8, color: "white" }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>End date: </FormLabel>
        <Input
          type="month"
          placeholder="Enter in format YYYY-MM"
          _placeholder={{ opacity: 0.8, color: "white" }}
        />
      </FormControl>
      {educationSection}
      {certificateSection}
    </SimpleGrid>
    <Button colorScheme='green' onClick={createEducationSection} w='max-content' 
    rightIcon={<IoIosAddCircle/>}>Add Education</Button>
    <Button colorScheme='green' onClick={createCertificateSection} w='max-content'
    rightIcon={<IoIosAddCircle/>}>Add Certificates</Button>
    </Stack>
  );
};

export default EduacationDetails;

