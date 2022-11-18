import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { heart } from 'ionicons/icons';
import { chatbubbleOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { bookmarkOutline } from 'ionicons/icons';
import { bookmark } from 'ionicons/icons';

export default function Post(props) {

    const { id, usuario, img, curtidopor, curtidas, saved, liked } = props.data;
    const [likeds, setLikeds] = useState(saved);
    const [saveds, setSaveds] = useState(liked);

    return (
        <div className="post" key={id}>
            <div className="topo">
                <div className="usuario">
                    <img alt="" src={`assets/img/${usuario}.svg`} />
                    {usuario}
                </div>
                <div className="acoes">
                    <IonIcon icon={ellipsisHorizontal} />
                </div>
            </div>
            <div className="conteudo">
                <img alt="" src={`assets/img/${img}.svg`} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <IonIcon onClick={() => setLikeds(() => !likeds)} icon={likeds ? heart : heartOutline} style={likeds ? { color: "#ed4956" } : {}} />
                        <IonIcon icon={chatbubbleOutline} />
                        <IonIcon icon={paperPlaneOutline} />
                    </div>
                    <div>
                        <IonIcon onClick={() => setSaveds(() => !saveds)} icon={saveds ? bookmark : bookmarkOutline} />
                    </div>
                </div>
                <div className="curtidas">
                    <img alt="" src={`assets/img/${curtidopor}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{curtidopor}</strong> e <strong>outras {curtidas / 1000} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
