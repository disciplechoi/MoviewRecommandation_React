import Movie from "../components/Movie";
import {useEffect, useState} from "react";
import styles from "./Home.module.css";
import { style } from '@mui/system';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50&page=2');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  console.log(movies);

  useEffect(() => {
     getMovies();
  },[]);

  return (
    <div className={styles.container}>
      {loading? <h1>Loading...</h1> : 
      <div className={styles.subcontainer}>
        <div className={styles.title}>
          <h1 className={`${styles.title__number} ${styles.title__pink}`}>100</h1>
          <h1>GOOD MOVIES</h1>
        </div>
        
     
            <div className={styles.gallery}>
            {movies.map((movie=> 
            <Movie 
            key={movie.id} 
            id={movie.id}
            medium_cover_image={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
            rating={movie.rating} />
            ))}
          </div>
         
      </div>
    }
    </div>
  ); 
}

export default Home;