import { IonIcon } from '@ionic/react';
import { bookmark, bookmarkOutline, chatbubbleOutline, ellipsisHorizontal, heart, heartOutline, paperPlaneOutline } from 'ionicons/icons';
import { useState } from 'react';

export default function Post(props) {

    const { id, usuario, img, curtidopor, curtidas, saved, liked } = props.data;
    const [likeds, setLikeds] = useState(saved);
    const [saveds, setSaveds] = useState(liked);
    const [curtidasCount, setCurtidasCount] = useState(curtidas);
    const [hearts, setHearts] = useState(false);

    return (
        <div data-test="post" className="post" key={id}>
            <div className="topo">
                <div className="usuario">
                    <img alt={usuario} src={`assets/img/${usuario}.svg`} />
                    {usuario}
                </div>
                <div className="acoes">
                    <IonIcon icon={ellipsisHorizontal} />
                </div>
            </div>
            <div className="conteudo">
                {hearts && <IonIcon icon={heart} className="heart" />}
                <img
                    data-test="post-image"
                    onDoubleClick={() => !likeds ? (
                        setLikeds(() => !likeds),
                        setCurtidasCount(() => curtidasCount + 1),
                        setHearts(() => true), setTimeout(() => setHearts(() => false), 500))
                        :
                        (setHearts(() => true), setTimeout(() => setHearts(() => false), 500))}
                    alt={img}
                    src={`assets/img/${img}.svg`}
                />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <IonIcon
                            data-test="like-post"
                            onClick={() => !likeds ? (
                                setLikeds(() => !likeds),
                                setCurtidasCount(() => curtidasCount + 1))
                                :
                                setLikeds(() => !likeds, setCurtidasCount(() => curtidasCount - 1))}
                            icon={likeds ? heart : heartOutline}
                            style={likeds ? { color: "#ed4956" } : {}}
                        />
                        <IonIcon icon={chatbubbleOutline} />
                        <IonIcon icon={paperPlaneOutline} />
                    </div>
                    <div>
                        <IonIcon
                            data-test="save-post"
                            onClick={() => setSaveds(() => !saveds)}
                            icon={saveds ? bookmark : bookmarkOutline}
                        />
                    </div>
                </div>
                <div className="curtidas">
                    <img alt={curtidopor} src={`assets/img/${curtidopor}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{curtidopor}</strong> e <strong data-test="likes-number">outras {curtidasCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
