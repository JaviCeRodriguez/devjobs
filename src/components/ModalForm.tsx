import React from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalFormProps } from "utils/types";
import Form from "./Form";

const ModalForm: React.FC<ModalFormProps> = (props) => {
  const { isOpen, onClose } = props;

  const handleOnSubmit = (values: any) => {
    // onClose();
    console.log("values", values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Job to list</ModalHeader>
        <ModalCloseButton />

        <Form handleOnSubmit={handleOnSubmit} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
