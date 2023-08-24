import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LikeButton } from "./LikeButton";

const MySwal = withReactContent(Swal);

export const Detail = () => {
    const [film, setFilm] = useState(null);

    const token = sessionStorage.getItem("token");

    const query = new URLSearchParams(window.location.search);
    const filmId = query.get("filmId");

    useEffect(() => {
        const filmDetailUrl = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${
            import.meta.env.VITE_MOVIE_API_KEY
        }`;
        axios
            .get(filmDetailUrl)
            .then((res) => {
                setFilm(res.data);
            })
            .catch((err) => {
                MySwal.fire(<h2>{err.message}</h2>);
            });
    }, [filmId]);

    return (
        <>
            {!token && <Navigate to="/" />}
            {film && (
                <div className="row">
                    <div className="col-4">
                        <LikeButton filmData={film} />
                        <img
                            className="w-100"
                            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                            alt="filmData.original_title"
                        />
                    </div>
                    <div className="col-8">
                        <h4>{film.title}</h4>
                        <p>{film.release_date}</p>
                        <p>{film.overview}</p>
                        <h5>Generos:</h5>
                        <ul>
                            {film.genres?.map((gen) => (
                                <li key={gen.id}>{gen.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
