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
        <button onClick={handleBackData} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Back</button>
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