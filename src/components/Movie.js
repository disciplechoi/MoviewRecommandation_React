import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styles from './Movie.module.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



function Movie({id, medium_cover_image, title, summary, genres,rating})
{   
    
    return(
    <div className={styles.gallery}>      
        <img src={medium_cover_image} className={styles.gallery__img}/>
        <Link to={`/movie/${id}`}>
        <div className={styles.detail}>
            <ul className={`${styles.movie__genres} ${styles.hide}`}>
                {genres.slice(0,2).map((g)=> (<li key={g} className={styles.movie__genres__detail}>{g}</li>))}
            </ul>
            
            <h2 className={styles.movie__title, styles.hide}>{title}</h2>
            
              <Rating name="read-only" value={rating/5} readOnly />
        </div>
        </Link>
    </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;