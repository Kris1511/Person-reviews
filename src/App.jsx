import { useState } from "react";
import "./App.css";
import People from "./Data/data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0); // useState using 0 cause state going to change that's why
  const { name, job, image, text } = People[index];

  //optional 2
  // const checkNumber = (number) => {
  //   if (number > People.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return People.length - 1;
  //   }
  //   return number;
  // };
  
  // console.log(1 % 4);
  // console.log(2 % 4);
  // console.log(3 % 4);
  // console.log(4 % 4);
  // console.log(10 % 4);
  // console.log(230 % 4);
  // console.log(3490 % 4);
  // console.log(4589 % 2);

// above all output are "remainders"


  const pervPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + People.length) % People.length;

      // optional 1
      // original one************
      // {if (newIndex < 0) {
      //   return People.length - 1;
      // }
      // return newIndex;}

      // optional
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % People.length;
      // {if (newIndex > People.length - 1) {
      //   return 0;
      // }
      // return newIndex;}

      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * People.length); //floor - means will always lower the number
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % People.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={pervPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="btn-surprise">Surprise me</button>
      </article>
    </main>
  );
}

export default App;
