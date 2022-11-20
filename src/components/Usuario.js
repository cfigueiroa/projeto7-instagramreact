import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';
import { useState } from 'react';

export default function Usuario(props) {

    const [foto, setFoto] = useState(require(`../assets/img/${props.data.usuario}.svg`));
    const [nome, setNome] = useState(props.data.nome);

    return (
        <div data-test="user" className="usuario">
            <img
                data-test="profile-image"
                alt={props.data.usuario}
                src={foto}
                onClick={() => {
                    const f = prompt("Qual a nova imagem? Imagem atual: " + foto);
                    f && setFoto(f);
                }} />
            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span data-test="name">
                    {nome}
                    <IonIcon
                        data-test="edit-name"
                        icon={pencil}
                        onClick={() => {
                            const n = prompt("Qual o novo nome? Nome atual: " + nome);
                            n && setNome(n);
                        }} />
                </span>
            </div>
        </div>
    );
}
