import Post from './Post';

const postdata = [
    {
        "usuario": "meowed",
        "img": "gato-telefone",
        "curtidas": "respondeai",
        "comentarios": "101.523",
        "saved": false
    },
    {
        "usuario": "barked",
        "img": "dog",
        "curtidas": "adorable_animals",
        "comentarios": "99.159",
        "saved": false
    }
]

export default function Posts() {
    return (
        <div className="posts">
            <Post data={postdata}/>
        </div>
    )
}
