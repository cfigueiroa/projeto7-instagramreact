import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';
import { useState } from 'react';

export default function Usuario(props) {

    const [foto, setFoto] = useState(`assets/img/${props.data.usuario}.svg`);
    const [nome, setNome] = useState(props.data.nome);

    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" alt="" src={foto} onClick={() => {
                let f = prompt("Qual a nova imagem? Imagem atual: " + foto);
                if (f) return setFoto(f);
            }} />

            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span data-test="name">
                    {nome}
                    <IonIcon data-test="edit-name" icon={pencil} onClick={() => {
                        let n = prompt("Qual o novo nome? Nome atual: " + nome);
                        if (n) return setNome(n);
                    }} />
                </span>
            </div>
        </div>
    )
}
