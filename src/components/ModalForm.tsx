import React from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalFormProps } from "utils/types";
import { addElement } from "../api/localstorage/crud";
import Form from "./Form";

const ModalForm: React.FC<ModalFormProps> = (props) => {
  const { isOpen, onClose } = props;

  const handleOnSubmit = (values: any) => {
    console.log("values", values);
    addElement("jobs", values);
    onClose();
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
