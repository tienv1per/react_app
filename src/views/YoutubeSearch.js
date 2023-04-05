import '../views/Blog.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const YouTubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, []);

    const handleSearch = async() => {
        let res = await axios({
            method: "GET",
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 20,
                key: API_KEY,
                type: 'video',
                q: query,
            }
        })

        if(res && res.data && res.data.items){
            let dataVideo = res.data.items;
            let results = [];
            if(dataVideo && dataVideo.length > 0){
                dataVideo.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    results.push(object);
                    return results;
                })
            }

            setVideos(results);
            console.log(results);
        }
        console.log(API_KEY);

    }

    return (
        <div> 
            <div className="youtube-container">
                <input style={{width: '40%', display:'inline', margin: '15px 5px'}} 
                    type="search" className="youtube-search-pro" 
                    placeholder="YouTube Search"
                    value={query}     
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="button-pro" 
                    style={{height: '54px', margin: '15px 5px'}}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {videos && videos.length > 0 && 
            videos.map((item, index) => {
                return (
                    <div className='youtube-result' key={index}>
                        <div className='yotube-result-left'>
                            <iframe className='iframe-yt' 
                                style={{width: '500px', height: '350px'}}
                                src={`https://www.youtube.com/embed/${item.id}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>

                        <div className='youtube-result-right'>
                            <div className='youtube-title'>
                                {item.title}
                            </div>
                            <div className='youtube-created-at'>
                                Created At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                            </div>
                            <div className='youtube-author'>
                                Author: {item.author}
                            </div>
                            <div className='youtube-description'>
                                {item.description}
                            </div>
                        </div>
                    </div>
                )
            })
            }
            
        </div>
    )
}

export default YouTubeSearch;