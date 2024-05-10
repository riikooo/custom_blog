import React, { useState, useEffect, FC } from 'react';

interface Film {
  title: string;
  opening_crawl: string;
  // 他のフィールドも必要に応じて追加
}

const StarWars: FC = () => {
  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    const fetchFilm = async (): Promise<void> => {
      try {
        const response = await fetch('https://swapi.dev/api/films/1/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error('Fetch failed:', error);
      }
    };
    fetchFilm();
  }, []);

  return (
    <div>
      {film ? (
        <div>
          <h1 className='StarWars-title'>{film.title}</h1>
          <p className='StarWars-text'>{film.opening_crawl}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StarWars;
