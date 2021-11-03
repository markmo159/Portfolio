import { BOOKS_KEY } from "../../Keys";
import axios from "axios";

const FetchBooks = async (searchTerm) => {
  const response = await axios.get ('https://www.googleapis.com/books/v1/volumes?',{
    params : {
      q: searchTerm,
      maxResults: 20,
      key: BOOKS_KEY
    }
  });
  return response
}

export default FetchBooks;
