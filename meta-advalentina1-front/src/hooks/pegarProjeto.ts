import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type projetoType = {
  valorTotal: number;
}


export function useProjeto() {
  const [projeto, setProjeto] = useState<projetoType>({ valorTotal: 0 });

  useEffect(() => {
    const projetoReg = database.ref(`projeto`);

    projetoReg.on('value', projeto => {

      const databaseProjeto = projeto.val();

      setProjeto(databaseProjeto);
    })

  }, []);

  return { projeto }
}