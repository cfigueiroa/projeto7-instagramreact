export default function Sugestao(props) {
    const sugestoes = props.data.map((element) => {
        return (
            <div className="sugestao" key={element}>
                <div className="usuario">
                    <img alt="" src={`assets/img/${element}.svg`} />
                    <div className="texto">
                        <div className="nome">{element}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
        )
    });
    return <>{sugestoes}</>
}
