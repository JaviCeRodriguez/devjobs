import React from "react";
import { Box } from "@chakra-ui/react";
import { Job as JobType } from "../utils/types";
import Job from "./Job";

const JobList: React.FC<{ jobs: JobType[] }> = ({ jobs }) => {
  return (
    <Box>
      {jobs.map((job: JobType) => (
        <Job key={job.id} job={job} />
      ))}
    </Box>
  );
};

export default JobList;
