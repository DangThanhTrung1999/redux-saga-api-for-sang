import {connect} from 'react-redux';
import MovieComponents from '../components/MovieComponent';
import {
    addMovieAction,
    fetchFailedAction,
    fetchMoviesAction,
    fetchSuccessAction,
    updateItemAction,
    updateItemSuccessAction,
    deleteItemAction,
    deleteItemSuccessAction
} from '../actions';

const mapStateToProps = (state) => {
    console.log(`Tai container parse :${JSON.stringify(state)}`);
    return {
        movies: state.movieReducers,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        },
        onUpdateItemAction: (updatedMovie) => {
            dispatch(updateItemAction(updatedMovie));
        },
        onDeleteItemAction:(deletedMovieId)=>{
            console.log('onDeleteItemAction')
            dispatch(deleteItemAction(deletedMovieId));
        }
    };
};
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponents);
export default MovieContainer;

