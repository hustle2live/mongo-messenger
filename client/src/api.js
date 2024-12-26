const BASE_URL = process.env.SERVER_URL;

const createURL = ({ endpoint, params }) => {
   const url = `${BASE_URL}/api/${endpoint}?${params}`;

   // BASE_URL.concat(endpoint);

   return url;
};
