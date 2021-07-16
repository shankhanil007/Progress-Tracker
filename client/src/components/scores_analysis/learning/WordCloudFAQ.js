import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import axios from "axios";

const WordCloudFAQ = () => {
  const [words, setWords] = useState();
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/data");

    const text = res.data;
    setWords(text);
  }, []);
  console.log(words);
  const size = [600, 400];
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ marginTop: "100px" }}>
          {words && <ReactWordcloud words={words} />}
        </div>
      </div>
    </div>
  );
};
export default WordCloudFAQ;
