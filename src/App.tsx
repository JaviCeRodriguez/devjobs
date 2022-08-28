import { useEffect, useRef, useState } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import ModalForm from "./components/ModalForm";
import { Job as JobType } from "./utils/types";
import { getItem } from "./api/localstorage/crud";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const jobs = useRef<JobType[]>(getItem("jobs"));
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    jobs.current = getItem("jobs");
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    onClose();
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  }, [jobs.current, isLoading]);

  return (
    <Box>
      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={handleCloseModal} />
      <Nav />
      <Button onClick={onOpen}>Add Job</Button>
      {isLoading ? <Box>Loading...</Box> : <JobList jobs={jobs.current} />}
    </Box>
  );
};

export default App;
