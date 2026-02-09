import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    const currentId = parseInt(id);


    const apiUrl = `https://fakestoreapi.com/products/${id}`;


    function getData() {

        axios.get(apiUrl).then((res) => {
            setDetails(res.data);
        }).catch(error => {
            console.log("C'è un problema", error.message);
            navigate("/prodotti");
        })
    };

    useEffect(getData, [id]);

    return <div id="product-details">
        <h1>{details.title}</h1>

        <div className="card" key={details.id}>
            <img className="image" src={details.image} alt="" />
            <p className='descriptionProduct'>{details.description}</p>
            <p>Prezzo: € {details.price}</p>
            <p>{details.category} </p>


            <div className="navigation-buttons">
                {/* Bottone Prodotto Precedente */}
                {currentId > 1 && (
                    <button onClick={() => navigate(`/prodotti/${currentId - 1}`)}>
                        Vai al prodotto precedente
                    </button>)}
                    

                    {/* Bottone Prodotto Successivo */}
                <button onClick={() => navigate(`/prodotti/${currentId + 1}`)}>Vai al prodotto successivo</button>
            </div>

            <Link to={`/prodotti/`} className='link'> Torna alla lista prodotti </Link>
            {/* <Link to={`/prodotti/${parseInt(id) + 1}`} className='link'> Torna al prossimo prodotto </Link> */}
        </div>

    </div>
}

export default ProductDetailPage;