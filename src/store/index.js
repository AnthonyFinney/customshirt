import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2769a3",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./exp.jpg",
  fullDecal: "./threejs.png"
});

export default state;