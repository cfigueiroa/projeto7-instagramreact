import { IonIcon } from '@ionic/react';
import { addCircleOutline, heartOutline, home, personOutline, searchOutline } from 'ionicons/icons';

export default function FundoMobile() {
    return (
        <div className="fundo-mobile">
            <IonIcon icon={home} />
            <IonIcon icon={searchOutline} />
            <IonIcon icon={addCircleOutline} />
            <IonIcon icon={heartOutline} />
            <IonIcon icon={personOutline} />
        </div>
    );
}
