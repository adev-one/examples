import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { Aside } from '../components/Aside';
import { Voltar } from '../components/Voltar';

import { AuthContext } from '../App';

import logoImg from '../assets/images/logo.png';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/home.scss';

export function SignIn() {

  const history = useHistory();

  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {

    if (user) {
      history.push('/admin/lancamentos');
      return;
    }

    const autorizado = await signInWithGoogle();

    if (autorizado) {
      history.push('/admin/lancamentos');
    } else {
      alert('Seu email não está autorizado para fazer login');
    }
  }

  return (
    <div id="page-auth">
      <Aside />
      <main>
        <div className="main-content vertical-center">
          <img src={logoImg} alt="AD VALENTINA 1" />
          <button onClick={handleCreateRoom} className="login">
            <img src={googleIcon} alt="Icone Google" />
            Fazer Login com o Google
          </button>
          <Voltar />
        </div>
      </main>
    </div>
  )
}