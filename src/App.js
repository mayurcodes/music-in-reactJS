import { useState } from "react";
import "./styles.css";

const songsDB = {
  pop: [
    { music: "Breathless", singer: "Shankar Mahadevan", rating: "4.2/5" },
    { music: "Tera Chehra", singer: "Adnan Sami", rating: "4/5" },
    { music: "Sochta Hun Uska Dil", singer: "Babul Supriyo", rating: "4/5" },
    { music: "Deewana Tera", singer: "Sonu Nigam", rating: "4/5" },
    {
      music: "Piya Re Piya Re",
      singer: "Nusrat Fateh Ali Khan",
      rating: "3.9/5"
    }
  ],

  retro: [
    { music: "Bachna Ae Hasinon", singer: "Kishore Kumar", rating: "4.6/5" },
    { music: "O Mere Dil Ke Chain", singer: "Kishore Kumar", rating: "4.6/5" },
    { music: "Likhe Jo Khat Tujhe", singer: "Mohammed Rafi", rating: "4.5/5" },
    { music: "Chala Jata Hoon", singer: "Kishore Kumar", rating: "4.3/5" },
    { music: "Ek Ajnabee Haseena Se", singer: "Kishore Kumar", rating: "4.3/5" }
  ],

  classic: [
    {
      music: "Pyar Hua Iqrar Hua",
      singer: "Manna Dey, Lata Mangeshkar",
      rating: "4.6/5"
    },
    {
      music: "Ajib Dastan Hai Yeh",
      singer: "Lata Mangeshkar",
      rating: "4.5/5"
    },
    {
      music: "Haal Kaisa Hai Janab Ka",
      singer: "Asha Bhosle, Kishore Kumar",
      rating: "4.5/5"
    },
    { music: "Mera Joota Hai Japani", singer: "Mukesh", rating: "4.5/5" },
    {
      music: "Chhod Do Aanchal Zamana Kya Kahega",
      singer: "Kishore Kumar, Asha Bhosle",
      rating: "4.4/5"
    }
  ]
};

var songsList = Object.keys(songsDB);

export default function App() {
  const [selectType, setSelectType] = useState("pop");

  function songTypeClickHnadler(songType) {
    setSelectType(songType);
  }
  return (
    <div className="App">
      <h1>Top 5 Songs</h1>
      <h2>Check out best songs!!</h2>
      <div>
        {songsList.map(function (songType) {
          return (
            <button onClick={() => songTypeClickHnadler(songType)}>
              {songType}
            </button>
          );
        })}
        <hr />
      </div>
      <div className="output">
        <ul>
          {songsDB[selectType].map(function (songType) {
            return (
              <li>
                <div>Song : {songType.music}</div>
                <div>singer : {songType.singer}</div>
                <div>rating : {songType.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
