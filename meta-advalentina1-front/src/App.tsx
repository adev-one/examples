import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { firebase, auth } from './services/firebase';

import { useAuth } from './hooks/pegarAutorizados';

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { KnowMore } from "./pages/KnowMore";
import { Admin } from "./pages/Admin";

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {

  const authDB = useAuth();
  const emailsAutorizados = authDB.auth.autorizados;

  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Faltando informações do Google');
      }

      const emailAutorizado = emailsAutorizados.find(emailAuth => emailAuth === email) ?? null;

      if (emailAutorizado) {
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })

        return true;
      }
    }
    return false;
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/entrar" component={SignIn} />
        <Route path="/saiba-mais" component={KnowMore} />
        <Route path="/admin/lancamentos" component={Admin} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
