import { Box, Button, HStack, VStack, Center, Heading, Progress } from "@chakra-ui/react";
import React from "react";
import BasicDetails from "./BasicDetailsForm";

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);
  const formPage = ['Profile Details', 'Professional Experience', 'Educational Details']
  const nextPage = () => {
    setPage((page) => page + 1)
  }

  const prevPage = () => {
    setPage((page) => page - 1)
  }

  const renderForm = () => {
    switch(page) {
      case 0:
        return <BasicDetails />
      case 1:
        return <h1>Page 1</h1>
      case 2:
        return <h1>Page 2</h1>
      default:
        return

    }
  }

  return (
    <VStack height='100vh' justify='center'>
      <Box w='60%'>
        <Progress value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100} />
      </Box>
      <Center>
        <Box bg='cornflowerblue' w='80%' p={8} color='white' borderRadius='lg'>
        <Center>
          <Heading mb={4}>
            {formPage[page]}
          </Heading>
        </Center>
          {renderForm()}
          <HStack spacing={4} justify='space-between' mt={4}>
            <Button onClick={prevPage} isDisabled={page === 0} colorScheme='blue'>Prev</Button>
            <Button onClick={nextPage} isDisabled={page === 2} colorScheme='blue'>Next</Button>
          </HStack>
        </Box>
      </Center>
    </VStack>
  )

}

export default ResumeForm;
