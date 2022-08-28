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
  const { jobId, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Job to list</ModalHeader>
        <ModalCloseButton />

        <Form jobId={jobId} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
