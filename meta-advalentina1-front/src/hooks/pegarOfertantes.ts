import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type ofertasType = {
    ofertante: string;
    oferta: string;
    obs: string;
}
type FirebaseQuestion = Record<string, {
    ofertante: string;
    oferta: string;
    obs: string;
}>

export function useOfertas() {
    const [questions, setQuestions] = useState<ofertasType[]>([])
    // const [title, setTitle] = useState('');
    useEffect(() => {
        const ofertasReg = database.ref(`ofertas`);

        ofertasReg.on('value', ofertas => {

            const databaseRoom = ofertas.val();
            const firebaseQuestion: FirebaseQuestion = databaseRoom ?? {};
            const parsedQuestion = Object.entries(firebaseQuestion).map(([key, value]) => {
                return {
                    id: key,
                    oferta: value.oferta,
                    ofertante: value.ofertante,
                    obs: value.obs,
                }
            })

            // setTitle(databaseRoom.title)
            setQuestions(parsedQuestion)
        })

        return () => {
            ofertasReg.off('value');
        }
    }, []);

    return { questions }
}