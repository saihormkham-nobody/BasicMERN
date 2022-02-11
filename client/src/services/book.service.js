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
    console.log("ERROR", err);
  }
  return null;
};

export const getFinishedBook = async (reqPage) => {
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
  const response = await fetch(`${bookUri}id/${id}`);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  const json = await response.json();
  return json;
};

export const updateBookAsRead = async ({ id }) => {
  try {
  } catch (err) {
    console.log(err);
  }
  return;
};

export const insertReadingBook = async ({ name, author }) => {
  const response = await fetch(`${readingBookUri}`, {
    method: "POST",
    body: JSON.stringify({ name, author }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    console.log(response.status, response.statusText);
    const errorMessage = await json.errors.message;
    throw new Error(errorMessage);
  }

  return json;

  return;
};
