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
            p
          </Modal>
          <Modal title="Nova transação" trigger={newTransactionButton}>
            p
          </Modal>
        </div>
        <Modal title="Meu perfil" trigger={userAvatar}>
          p
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
};
