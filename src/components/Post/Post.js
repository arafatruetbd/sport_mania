import React from 'react';
import { useHistory } from 'react-router';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Post = (props) => {
    const { idLeague, strLeague, strSport } = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        console.log(history);
        history.push(url);
    }
    return (
        <Col className="mb-4" sm="12" lg="4">
            <Card>
                <CardImg top width="100%" src={`${props.index + 1}.png`} style={{ width: '100%', height: '100px', padding: '10px' }} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{strLeague}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Sport Type: {strSport}</CardSubtitle>
                    {/* <CardText>Sport Type: {strSport}</CardText> */}
                    <Button onClick={() => showComments(idLeague)}>Explore <i class="fa fa-arrow-right"></i></Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Post;