import useFetch from "../custom/fetch";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = 'https://jsonplaceholder.typicode.com/posts';
    let {data: dataBlogs, isLoading} = useFetch(url, false);
    useEffect(() => {
        if(dataBlogs && dataBlogs.length > 0){
            let data = dataBlogs.slice(88);
            setNewData(data);
        }
    
    }, [dataBlogs]);

    const handleAddNew = (blog) => {
        setShow(false);
        let data = newData;
        data.unshift(blog);
    }

    const deleteBlog = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id);
        setNewData(data);
    }

    return (
        <div>
            <Button variant="primary" className="my-3 button-pro" onClick={handleShow}>
                Add New Blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
             </Modal>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button className="button-pro">
                                <Link to={`/blog/${item.id}`}>View Detail</Link>
                            </button>
                            <button  className="button-pro" onClick={() => deleteBlog(item.id)}>
                                Delete Blog
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }
            </div>
        </div>


    )
}

export default Blog