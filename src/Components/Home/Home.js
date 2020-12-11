import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css";
import { Row, Col } from 'reactstrap';

export function Home(props) {
    return(
        <Row className={"home"}>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <div className={"cartComponent border"}>
                    <Link to="series">
                        <img src={'https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg'} alt=""/>
                        <h2>Series</h2>
                    </Link>
                </div>
            </Col>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <div className={"cartComponent border"}>
                    <Link to="movie">
                        <img src={"https://streamcoimg-a.akamaihd.net/000/109/8345/1098345-PosterArt-f0f207e02947ca76d9f9b238aea54dc1.jpg"} alt=""/>
                        <h2>Movies</h2>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}