import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import Loader from "../Loader";
import SlabLoader from "../Loader/SlabLoader";
import imageNotFound from './image_not_found.jpg';

const Products = () => {
    
    const [products, setProducts] = useState([])

    const [ spinner, setSpinner ] = useState(true);
    
    const Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzbGFiZm1seS5jbjczNTMwLnRtd2ViLnJ1IiwiaWF0IjoxNjM4NTUzNjc3LCJleHAiOjE3Mzg1NTM2NzcsInN1YiI6InNsYWIuZWNvbW1lcmNlc2F5dCJ9.XelxzlK7owen5f798SMkv-iMDIXz14rXmHGYGysqOUw'

    const data = {
      "jsonrpc": "2.0",
      "method": 'products.get'
    }
    console.log(products)
    useEffect(() => {
        async function fetchData() {
            await axios({
                method: 'post',
                url: 'https://api.billz.uz/v1/',
                data,
                headers: {Authorization},
            }).then(response => {
                if (response.status === 200) {
                    setProducts(response.data.result);
                    setSpinner(false)
                }
            });
            }
            fetchData();
      }, []);
    



    return(
        
        <div className="container">
            
            {spinner ?  <div className="mt-5 d-flex justify-content-center"><Loader /></div>  : null}
            <div class="card-group">
            <div class="row">
            {products.map((prod) => (
                <div class="col-md-3">

                <Card style={{ width: '18rem' }} key={ prod.ID } className="mb-2 shadow"> 
                    <Card.Img variant="top"  src={( prod.imageUrls ? prod.imageUrls[0].url : imageNotFound)} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                        { prod.price } UZS
                        </Card.Text>
                        <Card.Text>
                            quantity: { prod.price < 2 ? 'Low' : 'Average' }
                        </Card.Text>
                        <Button variant="primary">To Basket</Button>
                    </Card.Body>
                </Card>

         </div>
            ))}
            

      </div>
      </div>
      </div>
    )
}

export default Products;

// ID	int	ID продукта
// name	string	Название
// sku	string	Артикул
// barCode	string	Баркод
// price	float	Цена в сумах
// priceUSD	float	Цена в доллара США
// discountAmount	float	Сумма скидки в сумах
// qty	float	Кол-во
// properties	object	Атрибуты
// offices	array	Список магазинов
// imageUrls	array	Список ссылок на картинки проудкта

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [ spinner, setSpinner ] = useState(true);

//   // It will be executed before rendering

//   useEffect(() => {
//     setTimeout(() => setSpinner(false), 1000)
//   }, []);

//   // [] means like componentDidMount

//   return !spinner && <div>Your content</div>;
// };

// export default App;