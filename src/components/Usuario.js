import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';

export default function Usuario(props) {

    const [foto, setFoto] = useState(`assets/img/${props.data.usuario}.svg`);
    const [nome, setNome] = useState(props.data.nome);

    function mudaNome() {
        const temp = prompt("Qual o novo nome? Nome atual: " + nome);
        if (temp) {
            setNome(temp);
        }
    }

    function mudaFoto() {
        const temp = prompt("Qual a nova imagem? Imagem atual: " + foto);
        if (temp) {
            setFoto(temp);
        }
    }

    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" alt="" src={foto} onClick={mudaFoto} />
            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span data-test="name">
                    {nome}
                    <IonIcon data-test="edit-name" icon={pencil} onClick={mudaNome} />
                </span>
            </div>
        </div>
    )
}
