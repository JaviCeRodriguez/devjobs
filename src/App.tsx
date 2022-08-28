import { useState } from "react";
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import ModalForm from "./components/ModalForm";
import { Box, Button, useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Nav />
      <Button onClick={onOpen}>Add Job</Button>
      <JobList />
    </Box>
  );
}

export default App;
