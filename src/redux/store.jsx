import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import MovieReducer from './feature/movieSlice'
import rootSaga from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        movie: MovieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store