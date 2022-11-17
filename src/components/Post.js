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

    const [saved, setSaved] = useState(props.data.saved);
    function handleClick() {
        setSaved(!saved);
    }

    const [liked, setLiked] = useState(false);
    function handleLike() {
        setLiked(!liked);
    }

    const posts = props.data.map((post) => {
        return (
            <div className="post" key={post.usuario}>
                <div className="topo">
                    <div className="usuario">
                        <img alt="" src={`assets/img/${post.usuario}.svg`} />
                        {post.usuario}
                    </div>
                    <div className="acoes">
                        <IonIcon icon={ellipsisHorizontal} />
                    </div>
                </div>
                <div className="conteudo">
                    <img alt="" src={`assets/img/${post.img}.svg`} />
                </div>
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <IonIcon icon={liked ? heart : heartOutline} style={liked ? { color: "#ed4956" } : {}} onClick={handleLike} />
                            <IonIcon icon={chatbubbleOutline} />
                            <IonIcon icon={paperPlaneOutline} />
                        </div>
                        <div>
                            <IonIcon icon={saved ? bookmark : bookmarkOutline} onclick={handleClick} />
                        </div>
                    </div>
                    <div className="curtidas">
                        <img alt="" src={`assets/img/${post.curtidopor}.svg`} />
                        <div className="texto">
                            Curtido por <strong>{post.curtidopor}</strong> e <strong>outras {post.curtidas / 1000} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return posts
}
