import { useState } from "react";
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Nav />
      <JobList />
    </Box>
  );
}

export default App;
