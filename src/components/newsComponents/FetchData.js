import { NEW_KEY } from "../../Keys";
import axios from "axios";

const FetchData = async (endpoint = 'top-headlines', searchTerm , language , soryBy = 'publishedAt', category, country = 'us' ) => {
  if (endpoint === 'everything'){
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: searchTerm,
        language: language,
        sortBy: soryBy,
        apiKey : NEW_KEY,
        pageSize: 10
      }
    });
    return response;
  }
  else {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        q: searchTerm,
        category: category,
        country: country,
        apiKey: NEW_KEY,
        pageSize: 10
      }
    });
    return response;
  }
}


export default FetchData;

