import {INIT_FINISHED_LIST, ADD_MANY_FINISHED_LIST } from "../action.type"

export const initFinishedBooks = books => ({
    type: INIT_FINISHED_LIST,
    payload: books
})

export const addManyFinishedBooks = books => ({
    type: ADD_MANY_FINISHED_LIST,
    payload: books
})