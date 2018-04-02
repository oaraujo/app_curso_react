import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => (
    <div>
                <form onSubmit={props.onAddMovie}>
                    <input type="text" name="title" placeholder="Escribe el titulo" />
                    <input type="text" name="categorie" placeholder="Escribe la categoria" />
                    <input type="hidden" name="id" value={Math.floor(Math.random()*20000)} />
                    <input type="submit" name="guardar" value="Guardar Pelicula" />
                </form>

                <ul>

                {
                    props.movies.map(movie=>(
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            categorie={movie.categorie}
                        />
                    ))
                }

                    
                </ul>

            </div>
)

export default MoviesList