import React from "react";
import { Box, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { Job as JobType } from "../utils/types";

interface JobProps {
  job: JobType;
  setJobId: (id: string, type: string) => void;
}

const Job: React.FC<JobProps> = ({ job, setJobId }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="red.600"
      borderRadius="sm"
      m={2}
      px={2}
      py={3}
      _hover={{ bgColor: "red.500" }}
      width="100%"
      maxWidth={{ base: "full", md: "xl" }}
    >
      <Box>
        <Heading as="h4" fontSize={16} fontWeight="semibold">
          {job.rol} - {job.seniority}
        </Heading>
        <Text>
          {job.location} - {job.createdAt ?? ""}
        </Text>
      </Box>
      <ButtonGroup>
        <Button
          onClick={() => setJobId(job.id, "UPDATE")}
          leftIcon={<RepeatIcon />}
          colorScheme="blue"
          variant="solid"
        >
          Update
        </Button>
        <Button
          onClick={() => setJobId(job.id, "DELETE")}
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="solid"
        >
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Job;
