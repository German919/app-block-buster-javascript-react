export const state = {
    calorias:0,
    caloriasTotal: 1360563
}

export const createStore = (reducer, state) => {

    //let state =  initialState
    
    let updater = () =>{}

    const getState = () => {
    
        return state
    }
    const dispatch = (action) => {
        state = reducer(state, action)
        updater()
    }
    const subscribe = (listener) => {
        updater = listener
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}
