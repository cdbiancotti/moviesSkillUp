// import { useEffect, useState } from "react";

export const Favorites = () => {
    // const [favoriteFilms, setFavoriteFilms] = useStateState([]);

    // useEffect(() => {
    //     // localStorage.
    // }, []);

    return (
        <>
            ea
            {/* {!token && <Navigate to="/" />}
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
                    films.map((filmData) => {
                        const imageUrl = `https://image.tmdb.org/t/p/w500${filmData.poster_path}`;
                        return (
                            <div className="card col-lg-3 card col-md-4 col-sm-5 p-0" key={filmData.id}>
                                <LikeButton filmData={filmData} />
                                <img className="card-img-top" src={imageUrl} alt={filmData.original_title} />
                                <div className="card-body">
                                    <h5 className="card-title">{filmData.title}</h5>
                                    <p className="card-text">{filmData.overview.substring(0, 50)}...</p>
                                    <Link to={`/detalle?filmId=${filmData.id}`} className="btn btn-primary">
                                        More info
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No se encontraron peliculas.</p>
                )}
            </div> */}
        </>
    );
};
