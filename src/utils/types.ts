export interface Job {
  id?: string;
  rol: string;
  seniority: string;
  company: string;
  description: string;
  location: string;
  createdAt?: string;
  url?: string;
  tags?: string[];
}

export interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface FormProps {
  handleOnSubmit: (values: Job) => void;
  onClose: () => void;
}