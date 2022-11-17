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

    const [liked, setLiked] = useState(false);
    function handleLike() {
        setLiked(!liked);
    }
    const [saved, setSaved] = useState(false);
    function handleSave() {
        setSaved(!saved);
    }

    return props.data.map((element, index) =>
        <div className="post" key={index}>
            <div className="topo">
                <div className="usuario">
                    <img alt="" src={`assets/img/${element.usuario}.svg`} />
                    {element.usuario}
                </div>
                <div className="acoes">
                    <IonIcon icon={ellipsisHorizontal} />
                </div>
            </div>
            <div className="conteudo">
                <img alt="" src={`assets/img/${element.img}.svg`} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <IonIcon onClick={handleLike} icon={liked ? heart : heartOutline} style={liked ? { color: "#ed4956" } : {}} />
                        <IonIcon icon={chatbubbleOutline} />
                        <IonIcon icon={paperPlaneOutline} />
                    </div>
                    <div>
                        <IonIcon onClick={handleSave} icon={saved ? bookmark : bookmarkOutline} />
                    </div>
                </div>
                <div className="curtidas">
                    <img alt="" src={`assets/img/${element.curtidopor}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{element.curtidopor}</strong> e <strong>outras {element.curtidas / 1000} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
