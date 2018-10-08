import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-project-1b18c.firebaseio.com/',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,POST,DELETE,HEAD,PUT,OPTIONS',
  // }
});

export default instance;