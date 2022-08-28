import React from "react";
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
import { FormProps } from "utils/types";

const Form: React.FC<FormProps> = ({ handleOnSubmit, onClose }) => {
  const [values, setValues] = React.useState({
    rol: "",
    seniority: "",
    company: "",
    location: "",
    description: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
          loadingText="Submitting"
          size="md"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={() => handleOnSubmit(values)}
        >
          Add new Job
        </Button>
      </ModalFooter>
    </>
  );
};

export default Form;
