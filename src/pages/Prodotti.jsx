import { useState, useEffect } from 'react';
import axios from 'axios';


const apiUrl = 'https://fakestoreapi.com/products';


function Prodotti() {
    const [prodotti, setProdotti] = useState([]);


    function getData() {

        axios.get(apiUrl).then((res) => {
            console.log("Lista Prodotti", res.data);
            setProdotti(res.data);

        }).catch(error => {
                console.log("C'è un problema", error.message);
            })
    };


    useEffect(getData, []);


    return <div className='flex-container flex-wrap'>
        {prodotti.map((prodotto, i) =>

            <div className="card" key={i}>

                <h2> {prodotto.title}</h2>
                <img className="image" src={prodotto.image} alt="" />
                <p className='descriptionProduct'>{prodotto.description}</p>

            </div>
        )}

    </div>
}

export default Prodotti;