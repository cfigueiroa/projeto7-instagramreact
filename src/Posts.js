import Post from './Post';

const postdata = [
    {
        "usuario": "meowed",
        "img": "gato-telefone",
        "curtidas": "respondeai",
        "comentarios": "101.523"
    },
    {
        "usuario": "barked",
        "img": "dog",
        "curtidas": "adorable_animals",
        "comentarios": "99.159"
    }
]

export default function Posts() {
    return (
        <div className="posts">
            <Post data={postdata}/>
        </div>
    )
}
