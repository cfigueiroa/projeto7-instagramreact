import { IonIcon } from '@ionic/react';
import { chevronForwardCircle } from 'ionicons/icons'
import { ellipsisHorizontal } from 'ionicons/icons'
import { heartOutline } from 'ionicons/icons'
import { chatbubbleOutline } from 'ionicons/icons'
import { paperPlaneOutline } from 'ionicons/icons'
import { bookmarkOutline } from 'ionicons/icons'
import { pencil } from 'ionicons/icons'

function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <div className="stories">
                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/9gag.svg" />
                        </div>
                        <div className="usuario">
                            9gag
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/meowed.svg" />
                        </div>
                        <div className="usuario">
                            meowed
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/barked.svg" />
                        </div>
                        <div className="usuario">
                            barked
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/nathanwpylestrangeplanet.svg" />
                        </div>
                        <div className="usuario">
                            nathanwpylestrangeplanet
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/wawawicomics.svg" />
                        </div>
                        <div className="usuario">
                            wawawicomics
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/respondeai.svg" />
                        </div>
                        <div className="usuario">
                            respondeai
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/filomoderna.svg" />
                        </div>
                        <div className="usuario">
                            filomoderna
                        </div>
                    </div>

                    <div className="story">
                        <div className="imagem">
                            <img alt="" src="assets/img/memeriagourmet.svg" />
                        </div>
                        <div className="usuario">
                            memeriagourmet
                        </div>
                    </div>

                    <div className="setinha">
                        <IonIcon icon={chevronForwardCircle} />
                    </div>
                </div>

                <div className="posts">
                    <div className="post">
                        <div className="topo">
                            <div className="usuario">
                                <img alt="" src="assets/img/meowed.svg" />
                                meowed
                            </div>
                            <div className="acoes">
                                <IonIcon icon={ellipsisHorizontal} />
                            </div>
                        </div>

                        <div className="conteudo">
                            <img alt="" src="assets/img/gato-telefone.svg" />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <IonIcon icon={heartOutline} />
                                    <IonIcon icon={chatbubbleOutline} />
                                    <IonIcon icon={paperPlaneOutline} />
                                </div>
                                <div>
                                    <IonIcon icon={bookmarkOutline} />
                                </div>
                            </div>

                            <div className="curtidas">
                                <img alt="" src="assets/img/respondeai.svg" />
                                <div className="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="topo">
                            <div className="usuario">
                                <img alt="" src="assets/img/barked.svg" />
                                barked
                            </div>
                            <div className="acoes">
                                <IonIcon icon={ellipsisHorizontal} />
                            </div>
                        </div>

                        <div className="conteudo">
                            <img alt="" src="assets/img/dog.svg" />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <IonIcon icon={heartOutline} />
                                    <IonIcon icon={chatbubbleOutline} />
                                    <IonIcon icon={paperPlaneOutline} />
                                </div>
                                <div>
                                    <IonIcon icon={bookmarkOutline} />
                                </div>
                            </div>

                            <div className="curtidas">
                                <img alt="" src="assets/img/adorable_animals.svg" />
                                <div className="texto">
                                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar">
                <div className="usuario">
                    <img alt="" src="assets/img/catanacomics.svg" />
                    <div className="texto">
                        <strong>catanacomics</strong>
                        <span>
                            Catana
                            <IonIcon icon={pencil} />
                        </span>
                    </div>
                </div>

                <div className="sugestoes">
                    <div className="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img alt="" src="assets/img/bad.vibes.memes.svg" />
                            <div className="texto">
                                <div className="nome">bad.vibes.memes</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img alt="" src="assets/img/chibirdart.svg" />
                            <div className="texto">
                                <div className="nome">chibirdart</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img alt="" src="assets/img/razoesparaacreditar.svg" />
                            <div className="texto">
                                <div className="nome">razoesparaacreditar</div>
                                <div className="razao">Novo no Instagram</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img alt="" src="assets/img/adorable_animals.svg" />
                            <div className="texto">
                                <div className="nome">adorable_animals</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img alt="" src="assets/img/smallcutecats.svg" />
                            <div className="texto">
                                <div className="nome">smallcutecats</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                </div>

                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}

export default Corpo;
