import "./styles.css";
import React, { useState } from "react";
var musicLibrary = {
  Classic: [
    {
      name: "O Re Piya",
      rating: "4.4/5",
      Artist: "Rahat Fateh Ali Khan",
      Movie: "Aaja Nachle",
      Released: "2007"
    },
    {
      name: "Aaoge Jab Tum",
      rating: "4.3/5",
      Artist: "Rashid Khan",
      Movie: "Jab We Met",
      Released: "2007"
    },
    {
      name: "Rangrez",
      rating: "4/5",
      Artist: "Krsna Solo",
      Movie: "Tanu Weds Manu",
      Released: "2011"
    }
  ],

  HipHop: [
    {
      name: "Lose Yourself",
      rating: "4.5/5",
      Artist: "Eminem",
      Movie: "8 Mile",
      Released: "2002"
    },
    {
      name: "Rap God",
      rating: "4.4/5",
      Artist: "Eminem",
      Movie: "The Marshall Mathers LP 2",
      Released: "2013"
    },
    {
      name: "Lost Ones",
      rating: "4/5",
      Artist: "J. Cole",
      Movie: "Cole World: The Sideline Story",
      Released: "2011"
    }
  ],

  Folk: [
    {
      name: "Dilbaro",
      rating: "4.5/5",
      Artist: "Vibha Saraf, Harshdeep Kaur, Shankar Mahadevan",
      Movie: "Raazi",
      Released: "2018"
    },
    {
      name: "Genda Phool",
      rating: "4/5",
      Artist: "Sujata Majumdar, V.N. Mahathi, Shraddha Pandit",
      Movie: "Delhi-6",
      Released: "2009"
    },
    {
      name: "Ambarsariya",
      rating: "3.5",
      Artist: "Munna Dhiman,Ram Sampath, Sona Mohapatra",
      Movie: "Fukrey",
      Released: "2013"
    }
  ]
};

var library = Object.keys(musicLibrary);

export default function App() {
  var [meaning, setMeaning] = useState("Folk");
  function genreClickHandler(item) {
    setMeaning(item);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem", textAlign: "center", paddingBottom: "0" }}>
        {" "}
        <em>🎶 Good Music</em>
      </h1>
      <p style={{ fontSize: "x-large", textAlign: "center" }}>
        Checkout my favorite music. Select a genre to get started.
      </p>
      <div style={{ textAlign: "center" }}>
        {library.map((item) => (
          <button
            onClick={() => genreClickHandler(item)}
            style={{
              textAlign: "center",
              margin: "1rem 3rem",
              fontSize: "15px",
              fontWeight: "bolder",
              padding: "0.5rem 3.5rem",
              cursor: "pointer",
              border: "1.5px solid black",
              borderRadius: "10px",
              background: "#A689E1"
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicLibrary[meaning].map((book) => (
            <li
              style={{
                border: "1.5px solid #5946B2 ",
                padding: "0.5rem 1rem",
                height: "8.5rem",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "5px",
                listStyle: "none"
              }}
              key={book.name}
            >
              <div style={{ fontSize: "30px", paddingBottom: "10px" }}>
                {book.name}
              </div>
              <div>
                {" "}
                <b>Artist:</b> {book.Artist}{" "}
              </div>
              <div>
                {" "}
                <b>Movie:</b> {book.Movie}{" "}
              </div>
              <div>
                <b>Released-in: </b>
                {book.Released}{" "}
              </div>
              <div style={{ paddingTop: "0" }}>
                <b>Rating:</b>
                {book.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
