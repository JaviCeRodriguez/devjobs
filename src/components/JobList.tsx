import React from "react";
import { Box } from "@chakra-ui/react";
import { Job as JobType } from "../utils/types";
import Job from "./Job";

interface JobListProps {
  jobs: JobType[];
  setJobId: (id: string, type: string) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, setJobId }) => {
  return (
    <Box>
      {jobs.map((job: JobType) => (
        <Job key={job.id} job={job} setJobId={setJobId} />
      ))}
    </Box>
  );
};

export default JobList;
