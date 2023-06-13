import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from 'effector-react';

import TransactionStore from '../../stores/TransactionStore/TransactionStore';
import DeleteTransactionUseCase from '../../useCases/DeleteTransactionUseCase/DeleteTransactionUseCase';

import { Modal } from '../Modal';
import {
  FormButton,
  DeleteTransactionButton,
  FormDeleteButton,
  Form,
  FormError,
} from '../../styles/global';
import { Trash } from 'phosphor-react';

interface DeleteProps {
  id: string;
}

export const DeleteModal = ({ id }: DeleteProps) => {
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const { isLoading, hasError, errorMessage } = useStore(TransactionStore);

  const handleDeleteTransaction = async () => {
    DeleteTransactionUseCase.execute(id).then(() => closeModalRef.current?.click());
  };

  const { handleSubmit } = useForm();

  return (
    <Modal
      title="Você tem certeza que deseja excluir essa transação?"
      closeModalRef={closeModalRef}
      trigger={
        <DeleteTransactionButton>
          <Trash size={24} />
        </DeleteTransactionButton>
      }
    >
      <Form onSubmit={handleSubmit(handleDeleteTransaction)}>
        <FormDeleteButton type="submit" onClick={handleDeleteTransaction}>
          {isLoading ? 'Carregando...' : 'Apagar'}
        </FormDeleteButton>
        <FormButton onClick={() => closeModalRef.current?.click()}>Cancelar</FormButton>

        {hasError && <FormError>{errorMessage}</FormError>}
      </Form>
    </Modal>
  );
};
