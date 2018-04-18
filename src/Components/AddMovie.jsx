import React from 'react';

const AddMovie = (props) => {
  return (
        	<form onSubmit={props.onAddMovie} >
                    <input type="text" name="title" placeholder="Escribe el titulo" />
                    <input type="text" name="categorie" placeholder="Escribe la categoria" />
                    <input type="hidden" name="id" value={Math.floor(Math.random()*20000)} />
                    <input type="submit" name="guardar" value="Guardar Pelicula" />
         </form>
  )
}

export default AddMovie;
