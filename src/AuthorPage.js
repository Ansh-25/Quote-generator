import axios from "axios";
import QuoteCard from "./QuoteCard"
import {useParams , Link} from "react-router-dom";
import { React, useState , useEffect } from "react";

function AuthorPage() {
    let {name} = useParams();
    const [quote, setQuote] = useState([]);
  
    useEffect(() =>{
        const getQuote = async () => {
            const res = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`);
            setQuote(Array.from(res.data.data));
        };
        getQuote();
    },[name]);

    return (
        <>
            <div className="text-right my-8 mx-20" to="/">
                <Link to="/">Back To home</Link>
            </div>
            <div className="w-2/5 ml-52 pl-52 mb-24">
                <p className='text-3xl font-semibold'>{name}</p>
            </div>
            {quote && quote.map(item => <QuoteCard quote={item}/>)}
        </>
    );
}

export default AuthorPage;