import { EditIcon } from "@chakra-ui/icons";
import { Box, VStack, Center, Heading, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EducationDetails";
import ProfessionalDetails from "./ProfessionalDetailsForm";
import ResumeTemplate from "./ResumeTemplate";

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);

  const initialState = {
    profile: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      address: "",
    },
    professional: {
      summary: "",
      skills: "",
      work: [],
    },
    education: [],
    certification: [],
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);

  const formPage = [
    "Profile Details",
    "Professional Experience",
    "Educational Details",
  ];

  const renderForm = () => {
    switch (page) {
      case 0:
        return (
          <BasicDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <ProfessionalDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <EduacationDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
        case 3:
          return (<ResumeTemplate resumeInfo={resumeInfo} />)
      default:
        return;
    }
  };

  return (
    <VStack justify="center" spacing={4}>
      <Heading p={4}>Build Your Resume <EditIcon boxSize={8} /></Heading>
      <Box w="60%">
        <Progress
          colorScheme="green"
          value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100}
        />
      </Box>
      <Center>
        <Box p={8} borderRadius="lg" fontFamily="Poppins, sans-serif">
          <Center>
            <Heading mb={4}>{formPage[page]}</Heading>
          </Center>
          {renderForm()}
        </Box>
      </Center>
    </VStack>
  );
};

export default ResumeForm;
