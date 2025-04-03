'use client'
import { useEffect, useState } from "react";

export const quotes = [
    {
        "quote": "The unexamined life is not worth living.",
        "author": "Socrates"
      },
      {
        "quote": "Man is nothing else but what he makes of himself.",
        "author": "Jean-Paul Sartre"
      },
      {
        "quote": "He who has a why to live can bear almost any how.",
        "author": "Friedrich Nietzsche"
      },
      {
        "quote": "Happiness depends upon ourselves.",
        "author": "Aristotle"
      },
      {
        "quote": "Life must be understood backward. But it must be lived forward.",
        "author": "Søren Kierkegaard"
      },
      {
        "quote": "I think therefore I am.",
        "author": "René Descartes"
      },
      {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "Will Durant (summarizing Aristotle)"
      },
      {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
      },
      {
        "quote": "It is no measure of health to be well adjusted to a profoundly sick society.",
        "author": "Jiddu Krishnamurti"
      },
      {
        "quote": "Freedom is what you do with what's been done to you.",
        "author": "Jean-Paul Sartre"
      },
      {
        "quote": "Knowing yourself is the beginning of all wisdom.",
        "author": "Aristotle"
      },
      {
        "quote": "You have power over your mind—not outside events. Realize this, and you will find strength.",
        "author": "Marcus Aurelius"
      },
      {
        "quote": "Hell is other people.",
        "author": "Jean-Paul Sartre"
      },
      {
        "quote": "The mind is everything. What you think, you become.",
        "author": "Buddha"
      },
      {
        "quote": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        "author": "Heraclitus"
      },
      {
        "quote": "People demand freedom of speech as a compensation for the freedom of thought which they seldom use.",
        "author": "Søren Kierkegaard"
      },
      {
        "quote": "The greatest wealth is to live content with little.",
        "author": "Plato"
      },
      {
        "quote": "Man suffers only because he takes seriously what the gods made for fun.",
        "author": "Alan Watts"
      },
      {
        "quote": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
        "author": "Albert Camus"
      },
      {
        "quote": "Those who know do not speak. Those who speak do not know.",
        "author": "Lao Tzu"
      }
    ]

    function shuffleArray(array: any[]) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      }
      
      export function QuoteRotator() {
        const [shuffledQuotes, setShuffledQuotes] = useState<any[]>([]);
        const [index, setIndex] = useState(0);
        const [visible, setVisible] = useState(true);
      
        useEffect(() => {
          setShuffledQuotes(shuffleArray(quotes));
        }, []);
      
        useEffect(() => {
          const interval = setInterval(() => {
            // Step 1: Start fade-out
            setVisible(false);
      
            // Step 2: Wait for fade-out to finish before changing the quote
            const timeout = setTimeout(() => {
              setIndex((prev) => (prev + 1) % quotes.length);
              setVisible(true); // Step 3: Fade back in with new quote
            }, 600); // match this with the duration below
      
            return () => clearTimeout(timeout);
          }, 6000); // every 6 sec
      
          return () => clearInterval(interval);
        }, [quotes.length]);
      
        if (shuffledQuotes.length === 0) return null;
      
        const currentQuote = shuffledQuotes[index];
      
        return (
          <div className="my-16 text-center px-4 flex flex-col justify-center items-center gap-2">
            <p
        className={`text-2xl text-center transition-opacity duration-1000 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
            >
              “{currentQuote.quote}”
            </p>
            <p
              className={`mt-2 text-md md:text-base text-slate-400 transition-opacity duration-700 ease-in-out ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              — {currentQuote.author}
            </p>
          </div>
        );
      }