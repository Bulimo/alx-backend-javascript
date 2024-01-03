import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error); // Handle or log the error if needed
    return {
      photo: null,
      user: null,
    };
  }
}
