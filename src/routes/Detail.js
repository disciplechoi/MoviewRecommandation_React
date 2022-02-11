import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function Detail(){
    const {id}= useParams();
    const [detail, SetDetail] = useState([]);
    
    console.log({id});
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        SetDetail(json.data.movie);
        console.log(detail);
      };
      useEffect(() => {
        getMovie();
      }, []);

    return(
      <div>
        <h1>{detail.title_long}</h1>
        <img src={detail.medium_cover_image}/>
        <h1>{detail.genres}</h1>
        <h1>{detail.rating}</h1>
        <h1>{detail.runtime}</h1>
        <h1>{detail.description_full}d</h1>
      </div>
      )

    
    
    
    ;
}

export default Detail;