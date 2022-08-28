import React, { useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { FormProps } from "utils/types";
import {
  getElementById,
  addElement,
  updateElementById,
} from "../api/localstorage/crud";

const initialValues = {
  id: "",
  rol: "",
  seniority: "",
  company: "",
  location: "",
  description: "",
};

const Form: React.FC<FormProps> = ({ jobId, onClose }) => {
  const [values, setValues] = React.useState(initialValues);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitValues = (values: any) => {
    if (values.id) {
      updateElementById("jobs", jobId, values);
    } else {
      const valuesWithId = { ...values, id: uuidv4() };
      addElement("jobs", valuesWithId);
    }
    setValues(initialValues);
    onClose();
  };

  useEffect(() => {
    if (jobId) {
      const job = getElementById("jobs", jobId);
      setValues(job || initialValues);
    }
  }, []);

  return (
    <>
      <ModalBody>
        <form>
          <Stack spacing={4}>
            <HStack>
              <FormControl id="rol" isRequired>
                <FormLabel>Rol</FormLabel>
                <Input
                  name="rol"
                  value={values.rol}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="HTML Developer"
                />
              </FormControl>
              <FormControl id="seniority" isRequired>
                <FormLabel>Seniority</FormLabel>
                <Input
                  name="seniority"
                  value={values.seniority}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Senior"
                />
              </FormControl>
            </HStack>

            <HStack>
              <FormControl id="company">
                <FormLabel>Company</FormLabel>
                <Input
                  name="company"
                  value={values.company}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Incubator"
                />
              </FormControl>
              <FormControl id="location">
                <FormLabel>Location</FormLabel>
                <Input
                  name="location"
                  value={values.location}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Argentina"
                />
              </FormControl>
            </HStack>

            <HStack>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={values.description}
                  onChange={handleOnChange}
                  rows={5}
                  resize="none"
                  placeholder="Add relevant information of this job"
                />
              </FormControl>
            </HStack>
          </Stack>
        </form>
      </ModalBody>

      <ModalFooter gap={2}>
        <Button
          loadingText="Submitting"
          size="md"
          bg={"gray.600"}
          color={"white"}
          _hover={{
            bg: "gray.500",
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          loadingText={jobId ? "Updating" : "Submitting"}
          size="md"
          bg={jobId ? "orange.400" : "blue.400"}
          color={"white"}
          _hover={{
            bg: jobId ? "orange.500" : "blue.500",
          }}
          onClick={() => submitValues(values)}
        >
          {jobId ? "Update" : "Submit"}
        </Button>
      </ModalFooter>
    </>
  );
};

export default Form;
