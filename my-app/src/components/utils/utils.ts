export default function shuffle(array: Array<string>) {
  array.sort(() => Math.random() - 0.5);
}
