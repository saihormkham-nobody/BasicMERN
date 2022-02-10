import { api } from "../config/api";

const bookUri = api.baseUri + "books/";
const readingBookUri = bookUri + "reading/";
const finishedBookUri = bookUri + "finished/";

export const getAllReadingBook = async () => {
  try {
    const response = await fetch(readingBookUri);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getAllFinishedBook = async (reqPage) => {
  try {
    const response = await fetch(`${finishedBookUri}?page=${reqPage}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const deleteBook = async ({ id }) => {
  try {
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getBookById = async (id) => {
  try {
  } catch (err) {
    console.log(err);
  }
  return;
};

export const updateBookAsRead = async ({ id }) => {
  try {
  } catch (err) {
    console.log(err);
  }
  return;
};

export const insertReadingBook = async ({ name, author }) => {
  try {
  } catch (err) {
    console.log(err);
  }

  return;
};
