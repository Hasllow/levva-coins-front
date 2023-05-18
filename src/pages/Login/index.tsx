import { AuthLayout } from '../../Layouts/AuthLayout';

export const Login = () => {
  return (
    <AuthLayout title="Login" subtitle="Gerenciar suas entradas e saídas nunca foi tão simples.">
      <form>
        <input type="email" name="" id="" placeholder="E-mail" />
        <input type="password" name="" id="" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </AuthLayout>
  );
};
