import React, { useEffect, useState } from "react";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch(() => {
        setQuote({
          content: "Stay focused and keep coding.",
          author: "Unknown",
        });
      });
  };

  useEffect(() => {
    fetchQuote(); // initial fetch
    const intervalId = setInterval(fetchQuote, 30000); // every 30 sec

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 p-6 rounded-2xl shadow-2xl text-white animate-fade h-full flex flex-col justify-between transition-all duration-1000 ease-in-out">
      <div>
        <p className="text-lg italic transition-opacity duration-1000">"{quote.content}"</p>
      </div>
      <div className="text-right text-sm mt-4 text-white/80">
        — {quote.author}
      </div>
    </div>
  );
};

export default QuoteOfTheDay;
