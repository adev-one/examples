import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type authType = {
  autorizados: Array<string>;
};
type FirebaseQuestion = Record<string, Array<string>>

export function useAuth() {
  const [auth, setAuth] = useState<authType>({ autorizados: [] });

  useEffect(() => {
    const authReg = database.ref(`auth`);

    authReg.on('value', auth => {

      const databaseAuth = auth.val();

      setAuth(databaseAuth);
    })

  }, []);

  return { auth }
}