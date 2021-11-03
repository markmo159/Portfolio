import { NEWS_KEY } from "../../Keys";
import axios from "axios";

const FetchData = async (endpoint = 'top-headlines', searchTerm , language , soryBy = 'publishedAt', category, country = 'us' ) => {
  if (endpoint === 'everything'){
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: searchTerm,
          language: language,
          sortBy: soryBy,
          apiKey : NEWS_KEY,
          pageSize: 10
        }
      });
      return response;
    } catch (error) {
      return(error.response)
    }
  }
  else {
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        q: searchTerm,
        category: category,
        country: country,
        apiKey: NEWS_KEY,
        pageSize: 10
      }
    });
    return response;
    } catch (error) {
      return(error.response)
    }
  }
}

export default FetchData;

