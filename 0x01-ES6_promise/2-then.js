export default async function handleResponseFromAPI(promise) {
  // return promise
  //   .then(() => ({ status: 200, body: 'success' }))
  //   .catch(() => (new Error()))
  //   .then(() => console.log('Got a response from the API'));
  promise.then(() => {
    const obj = {
      status: 200,
      body: 'success',
    };
    return obj;
  })
    // When the Promise rejects, return an empty Error object
    .catch(() => (new Error()))
    // For every resolution, log Got a response from the API to the console
    .finally(() => {
      console.log('Got a response from the API');
    });
}
