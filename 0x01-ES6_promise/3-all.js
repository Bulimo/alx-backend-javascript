import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  // Use Promise.all to resolve all promises
  // return Promise.all([uploadPhoto(), createUser()])
  //   // Log body firstName lastName to the console
  //   .then((val) => {
  //     console.log(val[0].body, val[1].firstName, val[1].lastName);
  //   })
  //   // In the event of an error, log Signup system offline to the console
  //   .catch(() => console.log('Signup system offline'));
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (e) {
    console.log('Signup system offline');
  }
}
