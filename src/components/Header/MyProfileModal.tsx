import { ReactNode, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useStore } from 'effector-react';

import { SignOutButton, UserAvatar } from './styles';

import { Modal } from '../Modal';
import { Form, FormButton, FormError, FormInput } from '../../styles/global';
import { router } from '../../Router';
import { LoginValues } from '../../domain/Login';
import UpdateProfileUseCase from '../../useCases/UpdateProfileUseCase/UpdateProfileUseCase';
import ProfileStore from '../../stores/ProfileStore/ProfileStore';

interface FormProps {
  name: string;
}

const formSchema = yup
  .object({
    name: yup.string().required('O nome é obrigatório.'),
  })
  .required();

export const MyProfileModal = () => {
  const [user, setUser] = useState(() => {
    const storageUser = JSON.parse(window.localStorage.getItem('user') ?? '{}') as LoginValues;
    if (!storageUser) return null;
    return storageUser;
  });

  const closeModalRef = useRef<HTMLButtonElement>(null);

  const { isLoading, hasError, errorMessage } = useStore(ProfileStore);

  const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" alt={user?.name} />;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  const handleUpdateProfile = async ({ name }: FormProps) => {
    if (user?.id)
      UpdateProfileUseCase.execute({ id: user?.id, name }).then(() =>
        closeModalRef.current?.click(),
      );

    setUser(prevState => ({ ...prevState, name: name } as LoginValues));
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('user');
    router.navigate('/login');
  };

  return (
    <Modal title="Meu perfil" trigger={userAvatar} closeModalRef={closeModalRef}>
      <Form onSubmit={handleSubmit(handleUpdateProfile)}>
        <UserAvatar src="https:\\github.com/jemluz.png" alt={user?.name} variant="large" />
        <FormInput {...register('name')} type="text" defaultValue={user?.name} />
        {errors.name && <FormError>{errors.name.message}</FormError>}
        <FormInput type="email" placeholder={user?.email} disabled />
        <FormButton type="submit">{isLoading ? 'Carregando' : 'Atualizar'}</FormButton>

        {hasError && <FormError>{errorMessage}</FormError>}

        <SignOutButton type="button" onClick={handleSignOut}>
          Sair
        </SignOutButton>
      </Form>
    </Modal>
  );
};
