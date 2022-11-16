import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';

export default function Usuario(props) {
    const [nome, setNome] = useState(props.data.nome);
    function handleClick() {
        const novoNome = prompt("Qual o novo nome? Nome atual: " + nome);
        setNome(novoNome);
    }
    return (
        <div className="usuario">
            <img alt="" src={`assets/img/${props.data.usuario}.svg`} />
            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span>
                    {nome}
                    <IonIcon icon={pencil} onclick={handleClick} />
                </span>
            </div>
        </div>
    )
}
