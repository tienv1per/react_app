import {useParams, useNavigate} from 'react-router-dom';
import '../views/Blog.scss'
import useFetch from '../custom/fetch';

const BlogDetail = () => {
    let { id } = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    let {data, isLoading} = useFetch(url, false);

    const navigate = useNavigate();

    const handleBackData = () => {
        return navigate("/blogs");
    }

    return (
        <div>
        <button onClick={handleBackData} className='button-pro'>Back</button>
            <h1>HELLO BRO with id = {id}</h1>
            <div className='blog-detail'>
                {data &&
                    <div>
                        <div className='blog-id'>Blog ID: {data.id}</div>
                        <div className='title'>
                            {isLoading === true ? "Loading data..." : data.title}
                        </div>
                        <div className='body'>
                            {data.body}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogDetail;