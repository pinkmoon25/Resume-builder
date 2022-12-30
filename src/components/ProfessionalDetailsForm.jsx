import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ProfessionalDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [workSection, setWorkSection] = React.useState([]);

  const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });

  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x === "");
    if (isEmpty) return;

    const updatedValue = {
      ...resumeInfo.professional,
      work: resumeInfo.professional.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      professional: updatedValue,
    };
    console.log(workData);
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };

  const workExperienceForm = () => {
    return (
      <SimpleGrid spacing={4} columns={[1, 1, 2]} key={workSection.length}>
        <FormControl>
          <FormLabel>Job Title: </FormLabel>
          <Input
            type="text"
            placeholder="Software developer"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, jobTitle: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company/Employer: </FormLabel>
          <Input
            type="text"
            placeholder="Employer(Company) name"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, company: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="month"
            placeholder="Enter in format YYYY-MM"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, startDate: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>End date: </FormLabel>
          <Input
            type="month"
            placeholder="Enter in format YYYY-MM"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, endDate: e.target.value }));
            }}
          />
        </FormControl>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>JOb Details:</FormLabel>
            <Textarea
              placeholder="Describe your role and achievements"
              onChange={(e) => {
                setWorkData((prev) => ({
                  ...prev,
                  jobDetails: e.target.value,
                }));
              }}
            />
          </FormControl>
        </GridItem>
      </SimpleGrid>
    );
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Summary:</FormLabel>
        <Textarea
          placeholder="Introduce yourself by pitching your skills & explaining how they can be of value to a company"
          value={resumeInfo.professional.summary}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              summary: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Skills:</FormLabel>
        <Input
          type="text"
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.skills}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              skills: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      {workSection}
      <Button
        colorScheme="messenger"
        onClick={createWorkSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Work Experience
      </Button>
      <Center mt={8}>
        <Button
          colorScheme="teal"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          colorScheme="whatsapp"
          onClick={() => {
            saveData();
            console.log(resumeInfo);
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </Center>
    </Stack>
  );
};

export default ProfessionalDetails;
