import React from "react";

function QuoteCard(props) {

  return (
      <div className='flex pl-[30%] mx-1/5 my-24'>
        <div className='w-2 min-h-full mr-[8%] bg-[#F7DF94] inline-block'></div>
        {props.quote && <p className='text-3xl w-1/2 font-normal text-left inline-block'>"{props.quote.quoteText}"</p>}
      </div>
  );
}

export default QuoteCard;