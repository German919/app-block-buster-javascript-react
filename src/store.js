import {createStore} from "./redux/index.js"
import reducer from "./reducer/index.js"
import movies from "./movies.js"
import {movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds} from "./normalice.js"

const initialState = {
    moviesList : movieListAsMap(movies),
    filter : "all",
    list: {
        all: getAllIds(movies),
        mostValued:getMostValuedIds(movies),
        leastValued:getLeastValuedIds(movies)
    }
}

const store = createStore(reducer, initialState)

export default store