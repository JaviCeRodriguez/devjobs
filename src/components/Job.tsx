import React from "react";
import { Box, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { Job as JobType } from "../utils/types";

const Job: React.FC<{ job: JobType }> = ({ job }) => {
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
      maxWidth={{ base: "full", md: "xl" }}
    >
      <Box>
        <Heading as="h4" fontSize={16} fontWeight="semibold">
          Job title - Rol - Seniority
        </Heading>
        <Text>Location - Date</Text>
      </Box>
      <ButtonGroup>
        <Button leftIcon={<RepeatIcon />} colorScheme="blue" variant="solid">
          Update
        </Button>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="solid">
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Job;
