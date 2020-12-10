import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./SelectedItem.css";
import { Row, Col } from "reactstrap";

export function SelectedItem(props) {
    let { type } = useParams();
    let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                await fetch(url)
                    .then(response => response.json())
                    .then(response =>{
                            //all movies
                            let movies = response.entries;
                            //filter releaseYear property greater than 2010
                            let moviesGreat2010 = movies.filter(x => x.releaseYear >= 2010);
                            //Sorted by the title attribute value in ascending alphanumeric order
                            let moviesSortTitle = moviesGreat2010.sort((a, b) => (a.title > b.title) ? 1 : -1);
                            //selected type items
                            setItems(moviesSortTitle.filter(x => x.programType === type));
                        }
                    );
            } catch (e) {
                alert(e)
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            <h2 className={"text-center"}>{type.toUpperCase()}</h2>
            {console.log(items)}
            <Row className={"cartWraper"}>
                {
                    items.map((item,ixd)=>
                        <Col key={ixd} xs="8" sm="6" md="4" lg="4" xl="3" className={"cart p-0"}>
                            <div className={"border m-1"}>
                                <img src={item.images["Poster Art"].url} alt=""/>
                                <h3 className={"text-center"}> {item.title.slice(0,15)}</h3>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}