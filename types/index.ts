export type ProfileType = {
  _id: string,
  name: string,
  image : string
};

export type PostType = {
  title : string,
  mainImage : {
    image : string
  }
}