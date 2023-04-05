import { useState } from "react";

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if(!title) return alert('title shit');
        if(!content) return alert('content shit');
        console.log(title);
        console.log(content);
    }

    return (
        <div style={{backgroundColor: 'cadetblue', }}>
            <div style={{padding: '20px'}}>
                <label className="label-pro">Title: </label>
                <input className="input-pro" type="text" 
                    style={{width: '50%', display: 'inline'}} 
                    value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>

            <div>
                <label className="label-pro">Content: </label>
                <input className="input-pro" type="text" 
                    style={{width: '50%', display: 'inline'}} 
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