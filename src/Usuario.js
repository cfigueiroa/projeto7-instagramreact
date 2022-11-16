import { IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons'

export default function Usuario(props) {
    return (
        <div className="usuario">
            <img alt="" src={`assets/img/${props.data}.svg`} />
            <div className="texto">
                <strong>{props.data}</strong>
                <span>
                    Catana
                    <IonIcon icon={pencil} />
                </span>
            </div>
        </div>
    )
}
