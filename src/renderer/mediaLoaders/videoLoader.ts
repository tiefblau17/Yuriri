const videos: string[] = [];

function importAll (r: __WebpackModuleApi.RequireContext, destination: string[]) {
  r.keys().forEach((key, index) => {
    destination[index] = r(key);
  });
}

importAll(require.context('../assets/videos', true), videos);

const getVideoById = (id: number) => {
  return videos[id];
}

export default {
  getVideoById
}