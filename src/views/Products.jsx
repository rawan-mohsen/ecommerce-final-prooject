import { createRef, useEffect, useState } from "react";
import SiteNav from "../layout/SiteNav";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Product } from "../components/Product";
import ProductDetails from "../components/ProductDetails";
import FilterProducts from "../components/FilterProducts";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { categoriesData } from "../assets/images/database/categories";
import productData from "../assets/images/database/products.json";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { json} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Products() {


    const baseUrl = "https://dummyjson.com/products";

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const btnRef = createRef();

    function getProducts() {
        fetch(baseUrl)
            .then((json) => json.json())
            .then((res) => setProducts(res.products));
    }

    function getCategories() {
        fetch(`${baseUrl}/categories`)
            .then((json) => json.json())
            .then((res) => setCategories(res));
    }

    let FilterProducts = (category) => {
        fetch(`${baseUrl}/category/${category}`)
            .then((json) => json.json())
            .then((res) => setProducts(res.products));
        setSelectedCategory(category);
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <div className="text-center">
            <SiteNav />
            <div className="m-4">
                <h2>Products</h2>
                <h3>Numbers of Products: {products.length}</h3>
                <Container>
                    <Row className="d-flex justify-content-center">
                        {
                            products.length > 0
                                ?
                                <>
                                    <Col sm={12}>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            id="dropdown-item-button" title={selectedCategory}>
                                            <Dropdown.Item onClick={getProducts}>{selectedCategory}</Dropdown.Item>
                                            {
                                                categories.map((category, index) =>
                                                    <Dropdown.Item onClick={() => FilterProducts(category)} key={index}>{category}</Dropdown.Item>
                                                )
                                            }
                                        </DropdownButton>
                                    </Col>
                                    {
                                        products.map((Product) =>
                                            <Col key={Product.id} sm={12} md={6} lg={4} className="card-group">
                                                <Card className="m-2">
                                                    <Card.Img variant="top" src={Product.thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{Product.title}</Card.Title>
                                                        <Card.Text>{Product.price} $</Card.Text>
                                                        <small className="text-muted">{Product.brand}</small>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Link to={`/products/${Product.id}`} className="btn btn-primary">View more</Link>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                </>
                                :
                                <Spinner animation="border" role="status" className="m-4">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                        }
                        {/* <Col sm={12}>
                            <DropdownButton
                                as={ButtonGroup}
                                id="dropdown-item-button"
                                title={selectedCategory}
                            >
                                <Dropdown.Item onClick={getProducts}>
                                    {selectedCategory}
                                </Dropdown.Item>
                                {categories.map((category, index) => (
                                    <Dropdown.Item
                                        onClick={() => FilterProducts(category)}
                                        key={index}
                                    >
                                        {category}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Col> 
                        {products.length > 0 ? (
                            <>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary">All</Button>
                                    {categories.map((category, index) => (
                                        <Button
                                            key={index}
                                            variant="primary"
                                            ref={btnRef}
                                            onClick={() => FilterProducts(category)}
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                                <ViewProducts products={products} />
                            </>
                        ) : (
                            <Col sm={12}>
                                <Spinner animation="grow" className="m-4" />
                            </Col>
                        )} */}
                    </Row>
                </Container>
            </div>
        </div>
    );
}
