import { FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../App';

import { Aside } from '../components/Aside';

import logoImg from '../assets/images/logo.png';

import '../styles/home.scss';
import '../styles/admin.scss';
import { useState } from 'react';
import { database } from '../services/firebase';
import { useOfertas } from '../hooks/pegarOfertantes'

export function Admin() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [oferta, setOferta] = useState('');
  const [ofertante, setOfertante] = useState('');
  const [obs, setObs] = useState('');

  const ofertasReg = useOfertas();

  if (!user) {
    history.push('/entrar');
  }

  async function enviarArquivo(event: FormEvent) {
    event.preventDefault();

    if (oferta.trim() === '') {
      return;
    }
    if (ofertante.trim() === '') {
      return;
    }

    const ofertas = {
      ofertante: ofertante,
      oferta: oferta,
      obs: obs,
    }

    await database.ref(`ofertas/`).push(ofertas);

    setOfertante('')
    setOferta('')
    setObs('')



  }


  return (
    <div id="page-auth">
      <Aside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="AD VALENTINA 1" />
          <div className="separator">LANÇAR</div>
          <form onSubmit={enviarArquivo} >
            <input
              type="text"
              placeholder="Nome do contribuinte"
              onChange={event => setOfertante(event.target.value)}
              value={ofertante}
            />
            <input
              type="text"
              placeholder="Valor da contribuição"
              onChange={event => setOferta(event.target.value)}
              value={oferta}
            />
            <input
              type="text"
              placeholder="Observação"
              onChange={event => setObs(event.target.value)}
              value={obs}
            />
            <button className="voltarBtn" type="submit">Lançar</button>
          </form>

          <div className="separator">LANÇAMENTOS</div>

          {ofertasReg.questions.map(ofertaLine => {
            return (
              <div className="lancamento">
                <div className="titulo">
                  <h4>{ofertaLine.ofertante}</h4>
                  <h4 className="valor">R$ {ofertaLine.oferta}</h4>
                </div>
                <p>Observação: {ofertaLine.obs}</p>
              </div>
            )
          }
          )}

        </div>
      </main>
    </div>
  )
}