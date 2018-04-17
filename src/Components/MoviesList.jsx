import React from 'react'
import Movie from './Movie'
import AddMovie from './AddMovie'

const MoviesList = (props) => (
    <div>
               <AddMovie onAddMovie={props.onAddMovie}/>

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
