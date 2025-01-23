/**
 * @file Store.ts
 * @description This file sets up the Redux store for the movie app using Redux Toolkit.
 */

/**
 * @constant store
 * @description Configures the Redux store with the movieReducer.
 * @type {Store}
 */

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @description Type representing the root state of the Redux store.
 */

/**
 * @typedef {typeof store.dispatch} AppDispatch
 * @description Type representing the dispatch function of the Redux store.
 */
import { configureStore } from '@reduxjs/toolkit'
import movieReducer from 'stores/MovieSlice'

export const store = configureStore({
  reducer: {
    counter: movieReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
