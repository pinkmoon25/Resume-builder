import {
  Box,
  Button,
  HStack,
  VStack,
  Center,
  Heading,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EducationDetails";
import ProfessionalDetails from "./ProfessionalDetailsForm";

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);
  const formPage = [
    "Profile Details",
    "Professional Experience",
    "Educational Details",
  ];
  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  const renderForm = () => {
    switch (page) {
      case 0:
        return <BasicDetails />;
      case 1:
        return <ProfessionalDetails />;
      case 2:
        return <EduacationDetails />;
      default:
        return;
    }
  };

  return (
    <VStack justify="center" spacing={4}>
      <Heading p={4}>Build your Resume</Heading>
      <Box w="60%">
        <Progress value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100} />
      </Box>
      <Center>
        <Box bg="cornflowerblue" p={8} color="white" borderRadius="lg">
          <Center>
            <Heading mb={4}>{formPage[page]}</Heading>
          </Center>
          {renderForm()}
          <HStack spacing={4} justify="space-between" mt={4}>
            <Button
              onClick={prevPage}
              isDisabled={page === 0}
              colorScheme="blue"
            >
              Prev
            </Button>
            <Button
              onClick={nextPage}
              isDisabled={page === 2}
              colorScheme="blue"
            >
              Next
            </Button>
          </HStack>
        </Box>
      </Center>
    </VStack>
  );
};

export default ResumeForm;
