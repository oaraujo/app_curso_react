import React,{ Component, propTypes } from 'react'
import MoviesList from './MoviesList'

class App extends Component {
    constructor(...props){
        super(...props)
        this.state = {
            movies: [
                {id:1, title: "Growns Up",categorie: "Comedia,General"},
                {id:2, title: "Thor: Ragnarok",categorie: "Ficcion,Sobrenatural"},
                {id:3, title: "El diario de Ana Frank",categorie: "Recuentos de la vida"}
            ]
        }
        this.handleOnAddMovie = this.handleOnAddMovie.bind(this)
    }

    handleOnAddMovie(e){
        e.preventDefault()
        let form = e.target,
            movie = {
                id: form.id.value,
                title: form.title.value,
                categorie: form.categorie.value
            }
        this.setState({
            movies: this.state.movies.concat([movie])
        })

    }

    render(){
        return(
            <MoviesList 
                movies={this.state.movies}
                onAddMovie={this.handleOnAddMovie}
                />
        )
    }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App