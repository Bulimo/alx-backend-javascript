import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  // Use Promise.all to resolve all promises
  // Promise.all([uploadPhoto(), createUser()])
  //   // Log body firstName lastName to the console
  //   .then(([photo, user]) => {
  //     console.log(photo.body, user.firstName, user.lastName);
  //   })
  //   // In the event of an error, log Signup system offline to the console
  //   .catch(() => {
  //     console.log('Signup system offline');
  //   });
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (e) {
    console.error('Signup system offline');
  }
}
