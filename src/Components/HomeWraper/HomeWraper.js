import React from "react";
import {Link, Outlet} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import "./HomeWraper.css";

export function HomeWraper(props) {
    return(
        <Container>
            <Row className={"navBar border"}>
                <Col>
                    <Link to="/">LOGO</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}