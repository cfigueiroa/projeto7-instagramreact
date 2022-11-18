import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';

export default function Usuario(props) {

    const [foto, setFoto] = useState(`assets/img/${props.data.usuario}.svg`);
    const [nome, setNome] = useState(props.data.nome);

    return (
        <div className="usuario">
            <img alt="" src={foto} onClick={() => setFoto(prompt("Qual a nova imagem? Imagem atual: " + foto))} />
            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span>
                    {nome}
                    <IonIcon icon={pencil} onClick={() => setNome(prompt("Qual o novo nome? Nome atual: " + nome))} />
                </span>
            </div>
        </div>
    )
}
