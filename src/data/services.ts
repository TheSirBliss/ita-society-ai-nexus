// src/data/services.ts
export interface Service {
  id: string;
  titleKey: string;
  shortKey: string;
  longKey: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "images",
    titleKey: "services.images.title",
    shortKey: "services.images.short",
    longKey: "services.images.long",
    image: "/images/services/images.jpg",
  },
  {
    id: "gif",
    titleKey: "services.gif.title",
    shortKey: "services.gif.short",
    longKey: "services.gif.long",
    image: "/images/services/gif.gif",
  },
  {
    id: "vr-ar",
    titleKey: "services.vrar.title",
    shortKey: "services.vrar.short",
    longKey: "services.vrar.long",
    image: "/images/services/vrar.jpg",
  },
  {
    id: "lore",
    titleKey: "services.lore.title",
    shortKey: "services.lore.short",
    longKey: "services.lore.long",
    image: "/images/services/lore.jpg",
  },
  {
    id: "website",
    titleKey: "services.website.title",
    shortKey: "services.website.short",
    longKey: "services.website.long",
    image: "/images/services/website.jpg",
  },
  {
    id: "marketing",
    titleKey: "services.marketing.title",
    shortKey: "services.marketing.short",
    longKey: "services.marketing.long",
    image: "/images/services/marketing.jpg",
  },
  {
    id: "meme",
    titleKey: "services.meme.title",
    shortKey: "services.meme.short",
    longKey: "services.meme.long",
    image: "/images/services/meme.jpg",
  },
  {
    id: "ghostwriting",
    titleKey: "services.ghostwriting.title",
    shortKey: "services.ghostwriting.short",
    longKey: "services.ghostwriting.long",
    image: "/images/services/ghostwriting.jpg",
  },
  {
    id: "videogames",
    titleKey: "services.videogames.title",
    shortKey: "services.videogames.short",
    longKey: "services.videogames.long",
    image: "/images/services/videogames.jpg",
  },
  {
    id: "songs",
    titleKey: "services.songs.title",
    shortKey: "services.songs.short",
    longKey: "services.songs.long",
    image: "/images/services/songs.jpg",
  },
  {
    id: "videos",
    titleKey: "services.videos.title",
    shortKey: "services.videos.short",
    longKey: "services.videos.long",
    image: "/images/services/videos.jpg",
  },
  {
    id: "stickers",
    titleKey: "services.stickers.title",
    shortKey: "services.stickers.short",
    longKey: "services.stickers.long",
    image: "/images/services/stickers.png",
  },
];