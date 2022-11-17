import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';

export default function Usuario(props) {
    
    const [nome, setNome] = useState(props.data.nome);
    function handleClick() {
        const novoNome = prompt("Qual o novo nome? Nome atual: " + nome);
        setNome(novoNome);
    }
    const [foto, setFoto] = useState(`assets/img/${props.data.usuario}.svg`);
    function handleImg(){
        const novaImg = prompt("Qual a nova imagem? Imagem atual: " + foto);
        setFoto(novaImg);
    }
    
    return (
        <div className="usuario">
            <img alt="" src={foto} onClick={handleImg} />
            <div className="texto">
                <strong>{props.data.usuario}</strong>
                <span>
                    {nome}
                    <IonIcon icon={pencil} onClick={handleClick} />
                </span>
            </div>
        </div>
    )
}
