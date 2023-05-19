import * as Dialog from '@radix-ui/react-dialog';

import {
  HeaderContainer,
  HeaderContent,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from './styles';

import levvaCoinsLogo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva Coins" />

        <div>
          <NewCategoryButton>Nova Categoria</NewCategoryButton>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </HeaderContent>
      <UserAvatar src="https://github.com/jemluz.png" alt="Jemima Luz" />
    </HeaderContainer>
  );
};
