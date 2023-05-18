import { AuthLayout } from '../../Layouts/AuthLayout';
import { Form, FormInput } from '../../styles/global';

export const Login = () => {
  return (
    <AuthLayout title="Login" subtitle="Gerenciar suas entradas e saídas nunca foi tão simples.">
      <Form>
        <FormInput type="email" name="" id="" placeholder="E-mail" />
        <FormInput type="password" name="" id="" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </AuthLayout>
  );
};
