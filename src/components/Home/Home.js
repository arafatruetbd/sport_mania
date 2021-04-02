import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts((data.leagues).slice(0, 9)))
    }, [])
    return (
        <Container>
            <Row>
                {
                    posts.map((post, index) => <Post post={post} index={index} ></Post>)
                }
            </Row>
        </Container>
    );
};

export default Home;