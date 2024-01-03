import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
  // try {
  //   const photo = await uploadPhoto();
  //   const user = await createUser();
  //   console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  // } catch (e) {
  //   console.error('Signup system offline');
  // }
}
