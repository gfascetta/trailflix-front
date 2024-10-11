import { useState, useEffect } from 'react';
import { get } from '../../../helpers/httpApi/http-client';

export default function Movies() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const allMovies = async () => {
        try {
            const movies = await get('movies/all');
            if(movies){
                setData(movies);
                setIsLoading(false);
                setError(false);
            }
            
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        allMovies();
    }, []);


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error {console.log(error)}</div>;

    return (
        <div>
            <h3>Peliculitas del back:</h3>
            <ul>
                {data && data.map((movie, index) => (
                    <li key={index}>
                        {movie.title} ({movie.year}) - Directed by {movie.director}
                    </li>
                ))}
            </ul>
        </div>
    );
}