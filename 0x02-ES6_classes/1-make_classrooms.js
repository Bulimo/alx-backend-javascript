import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [];
  for (const i of [19, 20, 34]) {
    classes.push(new ClassRoom(i));
  }
  return classes;
}
