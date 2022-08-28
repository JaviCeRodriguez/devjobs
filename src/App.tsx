import { useEffect, useRef, useState } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import ModalForm from "./components/ModalForm";
import { Job as JobType } from "./utils/types";
import { getItem, removeElementById } from "./api/localstorage/crud";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const jobs = useRef<JobType[]>(getItem("jobs"));
  const [isLoading, setIsLoading] = useState(false);
  const [jobId, setJobId] = useState({ id: "", type: "" });

  const getData = () => {
    jobs.current = getItem("jobs");
    setIsLoading(false);
  };

  const handleJob = (id: string, type: string) => {
    setJobId({ id, type });
    if (type === "DELETE") {
      removeElementById("jobs", id);
      setIsLoading(true);
    } else {
      onOpen();
    }
  };

  const handleCloseModal = () => {
    onClose();
    setJobId({ id: "", type: "" });
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  }, [jobs.current, isLoading]);

  return (
    <Box>
      <ModalForm
        jobId={jobId.id}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={handleCloseModal}
      />
      <Nav />
      <Button onClick={onOpen}>Add Job</Button>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <JobList jobs={jobs.current} setJobId={handleJob} />
      )}
    </Box>
  );
};

export default App;
