import { ReactNode } from 'react';

import {
  HeaderContainer,
  HeaderContent,
  NewCategoryButton,
  NewTransactionButton,
  SignOutButton,
  UserAvatar,
} from './styles';

import levvaCoinsLogo from '../../assets/logo.svg';
import { Modal } from '../Modal';
import {
  Form,
  FormButton,
  FormInput,
  TransactionTypeButton,
  TransactionTypeContainer,
} from '../../styles/global';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import { router } from '../../Router';
import { CategoryModal } from './CategoryModal';

export const Header = () => {
  const newTransactionButton: ReactNode = (
    <NewTransactionButton>Nova Transação</NewTransactionButton>
  );
  const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" alt="Jemima Luz" />;

  const handleSignOut = () => {
    window.localStorage.removeItem('user');
    router.navigate('/login');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva Coins" />

        <div>
          <CategoryModal />

          <Modal title="Nova transação" trigger={newTransactionButton}>
            <Form>
              <FormInput type="text" placeholder="Descrição" required />
              <FormInput type="number" placeholder="Preço" required />
              <FormInput type="text" placeholder="Categoria" required />
              <TransactionTypeContainer>
                <TransactionTypeButton type="button" variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton type="button" variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionTypeContainer>

              <FormButton type="submit">Cadastrar</FormButton>
            </Form>
          </Modal>
        </div>
        <Modal title="Meu perfil" trigger={userAvatar}>
          <Form>
            <UserAvatar src="https:\\github.com/jemluz.png" alt="Jemima Luz" variant="large" />
            <FormInput type="text" value="Jemima Luz" />
            <FormInput type="email" placeholder="jemima.luz@levva.io" disabled />
            <FormButton type="submit">Atualizar</FormButton>

            <SignOutButton type="button" onClick={handleSignOut}>
              Sair
            </SignOutButton>
          </Form>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
};
