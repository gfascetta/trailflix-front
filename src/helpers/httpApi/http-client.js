//import { toast } from 'react-toastify';

const doFetch = (method) => async (endpoint, body) => {
    const config = {
      method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    };
    
    
    if (method === 'GET' || method === 'DELETE') {
      delete config.body;
    }
  
    try {
      const response = await window.fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, config);
      const jsonResponse = await response.json();
  
      if (!response.ok) {
        throw new Error(jsonResponse.message);
      }
  
      return jsonResponse;

    } catch (e) {
      console.error(e);
      console.error(e.message);
      throw new Error(e.message);
    }
  };
  
const get = doFetch('GET');
const put = doFetch('PUT');
const post = doFetch('POST');
const remove = doFetch('DELETE');

export { get, put, post, remove };