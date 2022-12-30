import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const ResumeTemplate = (props) => {
  const { resumeInfo } = props;

  return (
    <Stack spacing={4}>
      <Center>
        <Heading as="h1">
          {resumeInfo.profile.firstname} {resumeInfo.profile.lastname}
        </Heading>
      </Center>
      <HStack justify="center">
        <Link href={resumeInfo.profile.email} isExternal color="blue.500">
          {" "}
          Email{" "}
        </Link>
        <Link href={resumeInfo.profile.linkedin} isExternal color="blue.500">
          {" "}
          Linkedin{" "}
        </Link>
        <Link href={resumeInfo.profile.github} isExternal color="blue.500">
          {" "}
          Github{" "}
        </Link>
        <Link href={resumeInfo.profile.website} isExternal color="blue.500">
          {" "}
          Website{" "}
        </Link>
      </HStack>
      <HStack justify="center">
        <address>
          <PhoneIcon /> {resumeInfo.profile.phone} &nbsp;
          {resumeInfo.profile.address}
        </address>
      </HStack>
      <VStack spacing={2} align="stretch">
        <Heading as="h3" fontSize="2xl" borderBottomWidth="2px">
          SUMMARY
        </Heading>
        <Text>{resumeInfo.professional.summary}</Text>
      </VStack>
      <VStack spacing={4} align="stretch">
        <Heading as="h3" fontSize="2xl" borderBottomWidth="2px">
          SKILLS
        </Heading>
        <UnorderedList>
          {resumeInfo.professional.skills.split(",").map((s, i) => (
            <ListItem key={i} listStylePosition="inside">
              {s}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
      <VStack spacing={4} align="stretch">
        <Heading as="h3" fontSize="2xl" borderBottomWidth="2px">
          WORK EXPERIENCE
        </Heading>
        {resumeInfo.professional.work.map((w, i) => {
          return (
            <VStack align="stretch" key={i}>
              <HStack justify="space-between" align="baseline">
                <VStack align="stretch">
                  <Heading as="h5" fontSize="xl">
                    {w.jobTitle}
                  </Heading>
                  <Heading as="h5" fontSize="xl">
                    {w.company}
                  </Heading>
                </VStack>
                <Heading as="h6" fontSize="lg">
                  {w.startDate} - {w.endDate}
                </Heading>
              </HStack>
              {w.jobDetails.split("\n").map((d, i) => (
                <Text key={i}>{d}</Text>
              ))}
            </VStack>
          );
        })}
      </VStack>
      <VStack spacing={4} align="stretch">
        <Heading as="h3" fontSize="2xl" borderBottomWidth="2px">
          EDUCATION
        </Heading>
        {resumeInfo.education.map((e, i) => {
          return (
            <HStack justify="space-between" align="baseline" key={i}>
              <VStack align="stretch">
                <Heading as="h5" fontSize="xl">
                  {e.course}
                </Heading>
                <Heading as="h5" fontSize="xl">
                  {e.college}
                </Heading>
              </VStack>
              <Heading as="h6" fontSize="lg">
                {e.startDate} - {e.endDate}
              </Heading>
            </HStack>
          );
        })}
      </VStack>
      <VStack spacing={4} align="stretch">
        <Heading as="h3" fontSize="2xl" borderBottomWidth="2px">
          CERTIFICATIONS
        </Heading>
        {resumeInfo.certification.map((c, i) => {
          return (
            <VStack align="stretch" key={i}>
              <Heading as="h5" fontSize="xl">
                {c.link}
              </Heading>
              <Text>{c.details}</Text>
            </VStack>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default ResumeTemplate;
