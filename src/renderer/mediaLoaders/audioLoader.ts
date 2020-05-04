class MyAudio {
  id: number
  name: string;
  audio: HTMLAudioElement;
  constructor(name: string, audio: HTMLAudioElement) {
    let dotCounter: number = 0;
    let secondDot: number;
    let lastDot: number;
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) == '.') {
        lastDot = i;
        dotCounter++;
        if (dotCounter == 2) {
          secondDot = i;
        }
      }
    }
    this.id = Number(name.substring(0, secondDot));
    this.name = name.substring(secondDot+1, lastDot);
    this.audio = audio;
  }
}

const musics: MyAudio[] = [];

function importAll (r: __WebpackModuleApi.RequireContext, destination: MyAudio[]) {
  r.keys().forEach((key, index) => {
    destination[index] = new MyAudio(key, new Audio(r(key)))
  });
}

importAll(require.context('../assets/audios', true), musics);

let currentPlayingMusicId: number = null;

const playMusicById = (id: number) => {
  if (currentPlayingMusicId != null) {
      musics[currentPlayingMusicId].audio.pause();
  }
  musics[id].audio.currentTime = 0;
  musics[id].audio.play();
  currentPlayingMusicId = id;
};

const pauseMusicById = () => {
  if (currentPlayingMusicId != null) {
    musics[currentPlayingMusicId].audio.pause();
  }
  currentPlayingMusicId = null;
};

const getNameById = (id: number) => {
  return musics[id].name;
}

export default {
  pauseMusicById,
  playMusicById,
  getNameById
};