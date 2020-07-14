import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41601403?s=460&u=28eb9fe563ea0b3f6a320d8055d7181670898797&v=4"
            alt="Rodrigo"
          />
          <div>
            <strong>poowoox/github-explorer</strong>
            <p>
              A simple and clean ReactJS application for exploring Github
              repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41601403?s=460&u=28eb9fe563ea0b3f6a320d8055d7181670898797&v=4"
            alt="Rodrigo"
          />
          <div>
            <strong>poowoox/github-explorer</strong>
            <p>
              A simple and clean ReactJS application for exploring Github
              repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41601403?s=460&u=28eb9fe563ea0b3f6a320d8055d7181670898797&v=4"
            alt="Rodrigo"
          />
          <div>
            <strong>poowoox/github-explorer</strong>
            <p>
              A simple and clean ReactJS application for exploring Github
              repositories.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
