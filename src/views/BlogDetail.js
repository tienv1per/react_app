import {useParams} from 'react-router-dom';

const BlogDetail = () => {
    let { id } = useParams();

    return (
        <div>
            <h1>HELLO BRO with id = {id}</h1>
        </div>

    )
}

export default BlogDetail;