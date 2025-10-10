import axios from 'axios';


// Create an Axios instance with a base URL and custom headers
// Replace the baseURL with your actual backend server URL
// The header "ngrok-skip-browser-warning" is used to bypass ngrok's browser warning
// if you're using ngrok for local development
//by pass cores origin policy issue
// export default axios.create({
//     baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });

export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' }
});