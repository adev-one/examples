import { Aside } from '../components/Aside';
import { Voltar } from '../components/Voltar';

import logoImg from '../assets/images/logo.png';

import '../styles/home.scss';

import img1 from '../assets/images/projeto/imagem_1.jpg';
import img2 from '../assets/images/projeto/imagem_2.jpg';
import img3 from '../assets/images/projeto/imagem_3.jpg';
import img4 from '../assets/images/projeto/imagem_4.jpg';

export function KnowMore() {
  return (
    <div id="page-auth">
      <Aside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="AD VALENTINA 1" />
          <div className="separator">O PROJETO</div>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <div className="imagens">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <Voltar />
        </div>
      </main>
    </div>
  )
}