/* eslint-disable import/extensions */
import shuffle from "../utils/utils";

let repeatSound = "";
let arr: string[] = [];

export const playSoundOfArray = (sound: string) => {
  const audio = new Audio();
  audio.src = sound;
  audio.currentTime = 0;
  audio.play();
};

const gameHandler = (soundArr: string[]) => {
  arr = soundArr;
  shuffle(arr);
  repeatSound = arr.pop()!;
  playSoundOfArray(repeatSound);
};

export const repeatHandler = () => {
  playSoundOfArray(repeatSound);
};

export const getNewSound = () => {
  repeatSound = arr.pop()!;
  return repeatSound;
};

export const getCurrentSound = () => repeatSound;

export default gameHandler;
