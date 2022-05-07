import '../styles/voltar.scss';
import { useHistory } from 'react-router-dom';

export function Voltar() {
  const history = useHistory();

  return (
    <button className="voltarBtn" onClick={history.goBack}>Voltar</button>
  )
}