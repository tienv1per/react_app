import useFetch from "../custom/fetch";
import { Link } from 'react-router-dom';

const Blog = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let {data, isLoading} = useFetch(url, false);
    if(data && data.length > 0){
        data = data.slice(90);
    }
    console.log(123);

    return (
        <div className="blogs-container">
            {isLoading === false && data && data.length > 0 && data.map(item => {

                return (
                    <div className="single-blog" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>View Detail</Link>
                        </button>
                    </div>
                )
            })}

            {isLoading === true &&
                <div style={{ textAlign: 'center !important' }}>Loading data...</div>
            }
        </div>

    )
}

export default Blog