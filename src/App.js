import { useEffect, useState } from 'react';
import './App.css';
import Section from './components/Section';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App = () => {
  const genreIncrement = 4
  const [limit, setLimit] = useState(genreIncrement)
  const [genres, setGenres] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit
    })
    const responseBody = await response.json()
    setGenres(responseBody.data.reference_list.values)
  }

  useEffect(() => {
    fetchData()
  }, [, limit])

  return (
    <>
    <Navbar />
    <HeroSection />
      {genres && (
        <div className='container'>
        {Object.values(genres).map((genre, index) => (<Section key={index} genre={genre.value}/>
        ))}
        </div>
        )}
      <div className='page-end' 
      onMouseEnter={() => {
        setLimit(limit + genreIncrement)
      }}
      />
    </>
  );
}

export default App;
