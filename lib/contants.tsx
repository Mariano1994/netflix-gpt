import logoImage from "./../app/assets/logo.svg";
import avatarImage from "./../app/assets/avatarImage.png";

export const Logo = logoImage;
export const AvatarUserImage = avatarImage;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGMzOGYwZWEyZmVlNzhlYjc2OGYzZWRkYzUxODcwMiIsIm5iZiI6MTc0OTA3MDk3Ni43NjksInN1YiI6IjY4NDBiNDgwNDZkNTc0ZmJjNDdmNTFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJslm8EN71PNZJ3uQUi335NxeZDA-HP_sDPEYaOblSA",
  },
};

export const imageBaseUrlTMDB = `https://image.tmdb.org/t/p/w400`;
