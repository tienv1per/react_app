import { useState } from "react";
import axios from "axios";

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async() => {
        if(!title) return alert('title shit');
        if(!content) return alert('content shit');

        let data = {
            title: title,
            body: content, 
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if(res && res.data){
            let blogData = res.data;
            props.handleAddNew(blogData);
            console.log(blogData);
        }
        
    }

    return (
        <div style={{backgroundColor: 'cadetblue', }}>
            <div style={{padding: '20px'}}>
                <label className="label-pro">Title: </label>
                <input className="input-pro" type="text" 
                    style={{width: '233px', display: 'inline'}} 
                    value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>

            <div>
                <label className="label-pro" style={{margin: '0 20px'}}>Content: </label>
                <input className="input-pro" type="text" 
                    style={{width: '50%', display: 'inline', margin: '0 20px'}} 
                    value={content} onChange={(event) => setContent(event.target.value)}/>
            </div>

            <button 
                style={{margin: '20px'}} 
                className="button-pro"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}

export default AddNewBlog;