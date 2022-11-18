import Post from './Post';

const postdata = [
    {"id": 0, "usuario": "meowed", "img": "gato-telefone", "curtidopor": "respondeai", "curtidas": 101523, "saved": false, "liked": false},
    {"id": 1, "usuario": "barked", "img": "dog", "curtidopor": "adorable_animals", "curtidas": 99159, "saved": false, "liked": false}
]

export default function Posts() {
    return (
        <div className="posts">
            <Post data={postdata} />
        </div>
    )
}
