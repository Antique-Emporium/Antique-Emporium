import React, { useEffect, useState } from 'react';
import URL from '../../config/config'
import { Icon, Col, Card, Row } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { Meta } = Card;

function Shop() {
    const [Products, setProducts] = useState([])
    let dataReturn = [];
    useEffect(() => {
    fetch(URL+'/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        dataReturn = data;
        console.log(dataReturn)
        setProducts(data)
    }).catch(function(error) {
        console.error(error)
    })
}, [])
    const handleClick = () => {
        dataReturn.map((item, index) => {
            console.log(item._id, index+1)
        })
    }

    const renderCards = Products.map((product, index) => {
        return <Col key={``} lg={6} md={8} xs={24}>
            <u><h2>{product.name}</h2></u>
            <h3>ID: {product._id}</h3>
                {/* <img lazy src={`${product.imageUrl}`} alt={`${product._id}`} width={200}/> */}
                <LazyLoadImage
                    alt={`${product._id}`}
                    src={`${product.imageUrl}`}
                    width={200}
                    effect="blur" />
      </Col>
    })

    return (
       <div className="shopping-page">
           <h1>Shop</h1>
           {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Loading...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>
                        {Products.map((product, index) => {})}
                        {renderCards}
                    </Row>
                </div>
            }
            <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button>Load More</button>
                </div>
           {/* <button onClick={handleClick}>Click me</button> */}
       </div>
    )
}

export default Shop;