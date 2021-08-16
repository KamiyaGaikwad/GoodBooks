import React, { useState } from "react";
import "./styles.css";

var bookinfo = {
  Javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5"
    }
  ],
  Fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

var booksgenre = ["Javascript", "Fiction", "Business"];
export default function App() {
  const [booked, setBooks] = useState("Javascript");
  function onClickHandler(genre) {
    console.log(genre);
    setBooks(genre);
    console.log(booked);
  }
  return (
    <div className="App">
      <h1>
        <span role="img">📚</span> GoodBooks
      </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>

      {booksgenre.map(function (genre) {
        return (
          <button key={genre} onClick={() => onClickHandler(genre)}>
            {" "}
            {genre}{" "}
          </button>
        );
      })}
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookinfo[booked].map((book) => (
            <li>
              {" "}
              <div className="bookrate"> {book.name} </div>
              <div className="bookrate1"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
