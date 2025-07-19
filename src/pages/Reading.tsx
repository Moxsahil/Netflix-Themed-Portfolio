// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import Cant_Hurt_Me from '../images/Cant_Hurt_Me.jpeg';
import The_subtle from '../images/The_subtle.jpeg';
import Never_finished from '../images/Never_finished.jpeg';
import Think_Like_a_programmer from '../images/Think_Like_a_programmer.png';
import Software_Engineering_at_Google from '../images/Software_Engineering_at_Google.png';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    imgSrc: Cant_Hurt_Me,
    description: "A practical guide to mastering your mind, embracing pain, and unlocking your full potential through mental toughness.",
  },
  {
    title: "Think Like a programmer",
    author: "V. Anton Spraul",
    imgSrc: Think_Like_a_programmer,
    description: "A hands-on approach to mastering the art of problem-solving by thinking logically and creatively like a true programmer.",
  },
  {
    title: "The Subtle art of not giving a fuck",
    author: "Mark Manson",
    imgSrc: The_subtle,
    description: "A practical guide to living a better life by embracing your limitations, accepting hardships, and choosing what truly matters.",
  },
  {
    title: "Never Finished",
    author: "David Goggins",
    imgSrc: Never_finished,
    description: "A raw guide to mastering your mind, embracing discomfort, and pushing beyond all limits.",
  },
  {
    title: "Software Engineering at Google",
    author: "Titus Winters, Tom Manshreck & Hyrum Wright",
    imgSrc: Software_Engineering_at_Google,
    description: "An in-depth look at Google's engineering practices, offering practical insights on scalable software development, teamwork, and long-term code quality."
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
