import React, { useState } from "react";
import "./styles.css";

var bookinfo = {
  Manga: [
    {
      name: "Jujutsu Kaisen, volume 3",
      description:
        "Tensions are high as the Goodwill Event between the Tokyo and Kyoto campuses of Jujutsu High approaches. But before the competition can even begin, a couple of Kyoto students confront Fushiguro and Kugisaki",
      rating: "4.5/5"
    },
    {
      name: "One-Punch Man, Volume 4",
      description:
        "Saitama is now a certified hero! And with that title comes great responsibility—he’s required to perform one heroic deed per week. While Saitama makes the rounds to meet his quota, an incoming threat from outer space is screeching toward Earth",
      rating: "4/5"
    },
    {
      name: "The Ancient Magus' Bride, Vol. 2",
      description:
        "Great power comes at a price ... Chise Hatori's life has recently undergone shocking change. As a sleigh beggy--a person capable of generating and wielding tremendous magical power--she has transformed from an unwanted child to a magician's apprentice who has been introduced to fae royalty.",
      rating: "4.35/5"
    }
  ],
  Fiction: [
    {
      name: "Shiva Trilogy",
      description:
        "The Immortals of Meluha is the first book of Amish Tripathi, first book of Amishverse, and also the first book of Shiva Trilogy. The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      description:
        "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
      rating: "4.5/5"
    },
    {
      name: "Harry Potter and the Prisoner of Azkaban",
      description:
        "Harry, Ron and Hermoine return to Hogwarts just as they learn about Sirius Black and his plans to kill Harry. However, when Harry runs into him, he learns that the truth is far from reality.",
      rating: "4.6/5"
    }
  ],
  Ocean: [
    {
      name: "Lady With a Spear",
      description:
        "Memoir of the famous marine biologist, including accounts of early SCUBA diving and other intrepid adventures.",
      rating: "4/5"
    },
    {
      name: "The Rime of the Modern Mariner",
      description:
        "A mariner appears on a park bench and begins his tale...Cursed by an albatross he slew whilst hunting whales, the mariner and his crew find themselves stranded within the North Pacific Garbage Patch- a vast, hypoxic, slow-whirling maelstrom of plastic waste; a hidden repository for the world's litter",
      rating: "3/5"
    },
    {
      name: "The Unnatural History of the Sea",
      description:
        "Humanity can make short work of the oceans’ creatures. In 1741, hungry explorers discovered herds of Steller’s sea cow in the Bering Strait, and in less than thirty years, the amiable beast had been harpooned into extinction.",
      rating: "3.5/5"
    }
  ]
};

var booksgenre = ["Manga", "Fiction", "Ocean"];
export default function App() {
  const [booked, setBooks] = useState("Manga");
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
              <div className="bookrate2"> {book.description} </div>
              <br />
              <div className="bookrate1"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
