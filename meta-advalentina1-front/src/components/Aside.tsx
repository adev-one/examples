import { Link } from 'react-router-dom';

import '../styles/aside.scss'

import illustrationImg from '../assets/images/construction.svg';

export function Aside() {
  return (
    <aside>
      <img src={illustrationImg} alt="Ilustração Simbolizando Perguntas e Respostas" />
      <strong>Sua contribuição tem muito valor!</strong>
      <p>Adequação das estruturas físicas da Congregação em Valentina 1</p>
      <Link to="/saiba-mais"><button>Conheça o Projeto</button></Link>
    </aside>
  )
}

