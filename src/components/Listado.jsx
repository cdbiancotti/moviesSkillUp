import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Listado.css";
import { FilmCard } from "./FilmCard";

const MySwal = withReactContent(Swal);

export const Listado = () => {
    const token = sessionStorage.getItem("token");

    const [films, setFilms] = useState([]);

    const location = useLocation();

    const searchValue = location.state?.searchValue;

    useEffect(() => {
        const endpointType = searchValue ? "search" : "discover";
        const query = searchValue ? `&query=${searchValue}` : "";
        const asd = import.meta.env;
        const apiUrl = `https://api.themoviedb.org/3/${endpointType}/movie?api_key=${
            import.meta.env.VITE_MOVIE_API_KEY
        }${query}`;
        axios
            .get(apiUrl)
            .then((res) => {
                const resultsWithFavoriteIdentified = res.data.results.map((film) => {
                    const isFavorite = Boolean(localStorage.getItem(film.id));
                    return {
                        ...film,
                        initialIsFavorite: isFavorite,
                    };
                });
                setFilms(resultsWithFavoriteIdentified);
            })
            .catch((err) => {
                MySwal.fire(<h2>{err.message}</h2>);
            });
    }, [searchValue]);

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className="row">
                {searchValue && (
                    <div className="col-12">
                        Resultados encontrados para "
                        <strong>
                            <em>{searchValue}</em>
                        </strong>
                        "
                    </div>
                )}
                {films.length ? (
                    films.map((filmData) => <FilmCard key={filmData.id} filmData={filmData} />)
                ) : (
                    <p>No se encontraron peliculas.</p>
                )}
            </div>
        </>
    );
};
