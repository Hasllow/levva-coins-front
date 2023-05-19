import { ReactNode } from 'react';

import {
  HeaderContainer,
  HeaderContent,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from './styles';

import levvaCoinsLogo from '../../assets/logo.svg';
import { Modal } from '../Modal';
import { Form, FormButton, FormInput } from '../../styles/global';

export const Header = () => {
  const newCategoryButton: ReactNode = <NewCategoryButton>Nova Categoria</NewCategoryButton>;
  const newTransactionButton: ReactNode = (
    <NewTransactionButton>Nova Transação</NewTransactionButton>
  );
  const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" alt="Jemima Luz" />;

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva Coins" />

        <div>
          <Modal title="Nova categoria" trigger={newCategoryButton}>
            <p>categoria</p>
          </Modal>
          <Modal title="Nova transação" trigger={newTransactionButton}>
            <p>transacao</p>
          </Modal>
        </div>
        <Modal title="Meu perfil" trigger={userAvatar}>
          <Form>
            <UserAvatar src="https:\\github.com/jemluz.png" alt="Jemima Luz" variant="large" />
            <FormInput type="text" value="Jemima Luz" />
            <FormInput type="email" placeholder="jemima.luz@levva.io" disabled />
            <FormButton type="submit">Atualizar</FormButton>
          </Form>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
};
