import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./SelectedItem.css";
import Pagination from "react-js-pagination";
import { Row, Col } from "reactstrap";

export function SelectedItem(props) {
    let { type } = useParams();
    let url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
    const [items, setItems] = useState([]);
    const [arrItem, setArrItem] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (pageNumber) =>{
        // console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };

    const printCart = (items)=>{
        let newArr = [];
        let size = 10;
        for (let i=0; i<items.length; i+=size) {
            newArr.push(items.slice(i,i+size));
        }
        setArrItem(newArr);
        // console.log(arrItem);
    };

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
                        let filter = moviesSortTitle.filter(x => x.programType === type);
                        setItems(filter);
                        printCart(filter);
                        }
                    )
            } catch (e) {
                alert(e)
            } finally {
                document.getElementById("root").value = 'please wait...!'
            }
        };
        fetchData();
    },[]);
    // console.log(arrItem[activePage]);

    return(
        <div>
            <h2 className={"text-center"}>{type.toUpperCase()}</h2>

            <Row className={"cartWraper"}>
                {arrItem && arrItem.length > 0 &&
                        arrItem[activePage - 1].map((item, ixd) =>
                            <Col key={ixd} xs="8" sm="6" md="4" lg="4" xl="3" className={"cart p-0"}>
                                <div className={"border m-1"}>
                                    <img src={item.images["Poster Art"].url} alt=""/>
                                    <h3 className={"text-center"}> {item.title.slice(0, 15)}</h3>
                                </div>
                            </Col>
                        )
                }
            </Row>
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={items.length}
                pageRangeDisplayed={Math.ceil(arrItem.length)}
                onChange={handlePageChange}
            />
        </div>
    )
}