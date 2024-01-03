export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      const success = true; // Simulating successful response
      if (success) {
        resolve({ message: 'Success! Data received from API.' });
      } else {
        reject(new Error('Failed to fetch data from API.'));
      }
    });
  });
}
