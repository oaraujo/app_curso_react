import React from 'react'

const Movie = (props) => (
    <li>{props.id} - {props.title} - {props.categorie}</li>
)

export default Movie