import { AuthLayout } from '../../Layouts/AuthLayout';

export const NewAccount = () => {
  return (
    <AuthLayout title="Cadastro" subtitle="Crie sua conta e começe a gerenciar suas finanças.">
      <form>
        <input type="name" name="" id="" placeholder="Nome e sobrenome" />
        <input type="email" name="" id="" placeholder="E-mail" />
        <input type="password" name="" id="" placeholder="Senha" />
        <button type="submit">Criar conta</button>
      </form>
    </AuthLayout>
  );
};
