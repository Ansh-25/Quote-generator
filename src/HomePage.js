import axios from "axios";
import { React, useState , useEffect } from "react";
import { Link } from "react-router-dom";
import QuoteCard from "./QuoteCard"

function HomePage() {
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    const res = await axios.get(
      "https://quote-garden.herokuapp.com/api/v3/quotes"
    );
    const num = Math.floor(Math.random() * 10);
    setQuote(res.data.data[num]);
  };
  
  useEffect(() =>{
    getQuote();
    console.log("hi");
  },[]);

  return (
    <div >
      <div className='text-right mx-32 mt-10 pb-24'>
        <button onClick={getQuote}>♻️ Regenerate Quote</button>
      </div>
      <QuoteCard quote={quote}/>
      <Link to={"/" + quote.quoteAuthor} className='flex items-center py-12 px-7 text-left w-2/5 mx-auto hover:bg-[#333333] hover:text-white '>
        <div>
          {quote.quoteAuthor && <p className='text-2xl font-semibold'> {quote.quoteAuthor}</p>}
          {quote.quoteGenre && <p className='text-sm font-thin'> {quote.quoteGenre}</p>}
        </div>
        <div className='ml-auto text-3xl text-white'> &gt; </div>
      </Link>
      <br />
    </div>
  );
}

export default HomePage;