import { AuthLayout } from '../../Layouts/AuthLayout';
import { Form, FormInput } from '../../styles/global';

export const NewAccount = () => {
  return (
    <AuthLayout title="Cadastro" subtitle="Crie sua conta e começe a gerenciar suas finanças.">
      <Form>
        <FormInput type="name" name="" id="" placeholder="Nome e sobrenome" />
        <FormInput type="email" name="" id="" placeholder="E-mail" />
        <FormInput type="password" name="" id="" placeholder="Senha" />
        <button type="submit">Criar conta</button>
      </Form>
    </AuthLayout>
  );
};
