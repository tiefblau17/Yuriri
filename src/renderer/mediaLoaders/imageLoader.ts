import blankPicture from '../assets/images/icon/blank.jpg';

const pictures: string[] = [];
const videoCovers: string[] = [];

function importAll (r: __WebpackModuleApi.RequireContext, destination: string[]) {
  r.keys().forEach((key, index) => {
    destination[index] = r(key);
  });
}

importAll(require.context('../assets/images/CG', true), pictures);
importAll(require.context('../assets/images/videoCover', true), videoCovers);

const getPictureByID = (id: number) => {
  return pictures[id];
}

const getBlankPicture = () => {
  return blankPicture;
}

const getVideoCoverById = (id: number) => {
  return videoCovers[id];
}

export default {
  getPictureByID,
  getBlankPicture,
  getVideoCoverById
}