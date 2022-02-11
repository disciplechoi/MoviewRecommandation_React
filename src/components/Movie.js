import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styles from './Movie.module.css';


function Movie({id, medium_cover_image, title, summary, genres,rating})
{
    return(
    <div className={styles.gallery}>      
        <img src={medium_cover_image} className={styles.gallery__img}/>
        <Link to={`/movie/${id}`}>
        <div className={styles.detail}>
            <h2 className={styles.movie__title, styles.hide}>{title}</h2>
            {genres.map((g)=> (<li key={g}>{g}</li>))}
            <p className={styles.movie__summary, styles.hide}>{rating}</p>
            <ul className={styles.movie__genres, styles.hide}>
            
            </ul>
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