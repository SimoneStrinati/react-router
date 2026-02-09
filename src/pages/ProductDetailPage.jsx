import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {

    const { id } = useParams();
    const [details, setDetails] = useState({});


    const apiUrl = `https://fakestoreapi.com/products/${id}`;


    function getData() {

        axios.get(apiUrl).then((res) => {
            setDetails(res.data);
        }).catch(error => {
            console.log("C'è un problema", error.message);
        })
    };

    useEffect(getData, []);

    return <div id="product-details">
        <h1>{details.title}</h1>

        <div className="card" key={details.id}>
            <img className="image" src={details.image} alt="" />
            <p className='descriptionProduct'>{details.description}</p>
            <p>Prezzo: € {details.price}</p>
            <p>{details.category} </p>

            <Link to={`/prodotti/`} className='link'> Torna alla lista prodotti </Link>
        </div>

    </div>
}

export default ProductDetailPage;