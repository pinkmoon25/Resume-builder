import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import {IoIosAddCircle} from 'react-icons/io';

const ProfessionalDetails = () => {
  const [workSection, setWorkSection] = React.useState([]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };

  const workExperienceForm = () => {
    return (
      <>
        <FormControl>
          <FormLabel>Job Title: </FormLabel>
          <Input
            type="text"
            placeholder="Software developer"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company/Employer: </FormLabel>
          <Input
            type="text"
            placeholder="Employer(Company) name"
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
        <FormControl>
          <FormLabel>JOb Details:</FormLabel>
          <Textarea
            placeholder="Describe your role and achievements"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
      </>
    );
  };

  return (
    <Stack>
      <SimpleGrid spacing={4} columns={[1, 1, 2]}>
        <FormControl>
          <FormLabel>Summary:</FormLabel>
          <Textarea
            placeholder="Introduce yourself by pitching your skills & explaining how they can be of value to a company"
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Skills:</FormLabel>
          <Input
            type="text"
            placeholder="Communication, Teambuilding, etc.."
            _placeholder={{ opacity: 0.8, color: "white" }}
          />
        </FormControl>
        {workSection}
      </SimpleGrid>
      <Button colorScheme="green" onClick={createWorkSection} w="max-content" rightIcon={<IoIosAddCircle/>}>
        Add Work Experience
      </Button>
    </Stack>
  );
};

export default ProfessionalDetails;
