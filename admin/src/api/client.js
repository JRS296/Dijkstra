//Axios Setup - for communication with backend, you can use Fetch as well
import axios from "axios";

// Server Client
//const client = axios.create({baseURL: 'https://blog-app-service-gag1.onrender.com/api'}); //Render
const client = axios.create({baseURL: 'http://20.204.202.169:3000/api'}); //Azure IP

//Dev Client
//const client = axios.create({baseURL: 'http://20.204.202.169:3000/api'});

export default client;