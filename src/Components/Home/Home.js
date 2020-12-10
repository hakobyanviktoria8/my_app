import React from "react";
import {Link} from 'react-router-dom';
import {Series} from "../../Sevagir/Series/Series";
import {Movies} from "../../Sevagir/Movies/Movies";
import "./Home.css";
import { Row, Col } from 'reactstrap';

export function Home(props) {
    return(
        <Row className={"home"}>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <div className={"cartComponent border"}>
                    <Link to="series">Series</Link>
                </div>
            </Col>
            <Col xs="6" sm="6" md="6" lg="6" xl="6">
                <div className={"cartComponent border"}>
                    <Link to="movie">Movies</Link>
                </div>
            </Col>
        </Row>
    )
}