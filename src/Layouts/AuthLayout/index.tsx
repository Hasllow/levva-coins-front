import { ReactNode } from 'react';
import LevvaCoinsLogo from '../../assets/logo.svg';
interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="">
      <main>
        <header>
          <img src={LevvaCoinsLogo} alt="Marca Levva Coins" />
        </header>
      </main>

      <section>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </section>
    </div>
  );
};
