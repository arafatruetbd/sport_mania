import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data.leagues[0]));
    }, [])
    return (
        <div className='container-fluid'>

            <div className='d-flex justify-content-between bg-primary'>
                <div>
                    <h3>{post.strLeague}</h3>
                    <p>Founded: {post.intFormedYear}</p>
                    <p>Country: {post.strCountry}</p>
                    <p>Sport Type: {post.strSport}</p>
                    <p>Gender:{post.strGender}</p>
                </div>
                <div>
                    <img src={post.strGender === 'Male' ? '/male.png' : '/female.png'} alt="" style={{ width: '50%', height: '300px', margin:'10px' }}/>
                </div>
            </div>
            <div>
                <p>
                    {post.strDescriptionEN}
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <a href={post.strFacebook}><img src={`/facebook.png`} alt="twitter" style={{ height: '100px' }} /></a>
                <a href={post.strTwitter}><img src={`/Twitter.png`} alt="twitter" style={{ height: '100px' }} /></a>
                <a href={post.strYoutube} ><img src={`/YouTube.png`} alt="youtube" style={{ height: '100px' }} /></a>
            </div>

        </div>
    );
};

export default PostDetail;