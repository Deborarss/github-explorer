import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explores" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22102668?s=460&u=78ccebfddee4a7a14663bb43a43874fbb4fb62c5&v=4"
            alt="Débora Silva"
          />
          <div>
            <strong>iHelp</strong>
            <p>
              App to help people who cannot leave home because of the
              coronavirus
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22102668?s=460&u=78ccebfddee4a7a14663bb43a43874fbb4fb62c5&v=4"
            alt="Débora Silva"
          />
          <div>
            <strong>iHelp</strong>
            <p>
              App to help people who cannot leave home because of the
              coronavirus
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22102668?s=460&u=78ccebfddee4a7a14663bb43a43874fbb4fb62c5&v=4"
            alt="Débora Silva"
          />
          <div>
            <strong>iHelp</strong>
            <p>
              App to help people who cannot leave home because of the
              coronavirus
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
