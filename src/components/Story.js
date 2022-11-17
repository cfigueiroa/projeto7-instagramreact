export default function Story(props) {
    const stories = props.data.map((element) => {
        return (
            <div className="story" key={element}>
                <div className="imagem">
                    <img alt="" src={`assets/img/${element}.svg`} />
                </div>
                <div className="usuario">
                    {element}
                </div>
            </div>
        )
    })
    return <>{stories}</>
}
