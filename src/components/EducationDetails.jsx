import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormLabel,
  SimpleGrid,
  Stack,
  FormControl,
  Input,
  Center,
} from "@chakra-ui/react";
import React from "react";

const EduacationDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [educationSection, setEduactionSection] = React.useState([]);
  const [certificateSection, setCertificateSection] = React.useState([]);

  const [educationData, setEducationData] = React.useState({
    college: "",
    course: "",
    startDate: "",
    endDate: "",
  });

  const [certificateData, setCertificateData] = React.useState({
    link: "",
    details: "",
  });

  React.useEffect(() => {
    saveEducationData();
  }, [educationSection.length]);

  React.useEffect(() => {
    saveCertificateData();
  }, [certificateSection.length]);

  const saveEducationData = () => {
    const isEmpty = Object.values(educationData).some((x) => x === "");
    if (isEmpty) return;
    const updateValue = {
      ...resumeInfo,
      education: resumeInfo.education.concat(educationData),
    };
    setResumeInfo(updateValue);
  };

  const saveCertificateData = () => {
    const isEmpty = Object.values(certificateData).some((x) => x === "");
    if (isEmpty) return;
    const updateValue = {
      ...resumeInfo,
      certification: resumeInfo.certification.concat(certificateData),
    };
    setResumeInfo(updateValue);
  };

  const createCertificateSection = () => {
    setCertificateSection(
      certificateSection.concat(
        <FormControl key={certificateSection.length}>
          <FormLabel>Certificate Link: </FormLabel>
          <Input
            type="url"
            placeholder="Enter Certificate"
            mb={4}
            onChange={(e) => {
              setCertificateData((prev) => ({ ...prev, link: e.target.value }));
            }}
          />
          <FormLabel>Additional Details: </FormLabel>
          <Input
            type="text"
            placeholder="eg. Level 1 or React or Data Science"
            onChange={(e) => {
              setCertificateData((prev) => ({
                ...prev,
                details: e.target.value,
              }));
            }}
          />
        </FormControl>
      )
    );
  };

  const createEducationSection = () => {
    setEduactionSection(educationSection.concat(educationForm()));
  };

  const educationForm = () => (
    <SimpleGrid spacing={4} columns={[1, 1, 2]} key={educationSection.length}>
      <FormControl>
        <FormLabel>College/University or School: </FormLabel>
        <Input
          type="text"
          placeholder="school, college or university name"
          onChange={(e) => {
            setEducationData((prev) => ({ ...prev, college: e.target.value }));
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Course/Degree or Graduation: </FormLabel>
        <Input
          type="text"
          placeholder="Bachelors, Masters or High school diploma"
          onChange={(e) => {
            setEducationData((prev) => ({ ...prev, course: e.target.value }));
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Start date: </FormLabel>
        <Input
          type="month"
          placeholder="Enter in format YYYY-MM"
          onChange={(e) => {
            setEducationData((prev) => ({
              ...prev,
              startDate: e.target.value,
            }));
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>End date: </FormLabel>
        <Input
          type="month"
          placeholder="Enter in format YYYY-MM"
          onChange={(e) => {
            setEducationData((prev) => ({ ...prev, endDate: e.target.value }));
          }}
        />
      </FormControl>
    </SimpleGrid>
  );

  return (
    <Stack>
      <SimpleGrid spacing={4} columns={[1, 1, 2]}>
        <FormControl>
          <FormLabel>College/University or School: </FormLabel>
          <Input
            type="text"
            placeholder="school, college or university name"
            onChange={(e) => {
              setEducationData((prev) => ({
                ...prev,
                college: e.target.value,
              }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Course/Degree or Graduation: </FormLabel>
          <Input
            type="text"
            placeholder="Bachelors, Masters or High school diploma"
            onChange={(e) => {
              setEducationData((prev) => ({ ...prev, course: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="month"
            placeholder="Enter in format YYYY-MM"
            onChange={(e) => {
              setEducationData((prev) => ({
                ...prev,
                startDate: e.target.value,
              }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>End date: </FormLabel>
          <Input
            type="month"
            placeholder="Enter in format YYYY-MM"
            onChange={(e) => {
              setEducationData((prev) => ({
                ...prev,
                endDate: e.target.value,
              }));
            }}
          />
        </FormControl>
        {educationSection}
        {certificateSection}
      </SimpleGrid>
      <Button
        colorScheme="whatsapp"
        onClick={createEducationSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Education
      </Button>
      <Button
        colorScheme="whatsapp"
        onClick={createCertificateSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Certificates
      </Button>
      <Center mt={8}>
        <Button
          colorScheme="teal"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          {" "}
          back{" "}
        </Button>
        <Button
          colorScheme="whatsapp"
          onClick={() => {
            saveEducationData();
            saveCertificateData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save & Submit
        </Button>
      </Center>
    </Stack>
  );
};

export default EduacationDetails;
