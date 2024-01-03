import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // const promises = [
  //   signUpUser(firstName, lastName),
  //   uploadPhoto(fileName),
  // ];
  // return Promise.all(promises.map((promise) => (
  //   promise
  //     .then((value) => ({ status: 'fulfilled', value }))
  //     .catch((error) => ({ status: 'rejected', value: error })))))
  //   .then((results) => (results.map(({ status, value }) => ({ status, value }))));
  const values = Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return values;
}
