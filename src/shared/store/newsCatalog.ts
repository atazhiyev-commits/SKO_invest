import { create } from "zustand";
import { getNews } from "@/api/connect";
import { lang } from "./lg";

export const useGetNews = create((set, get: any) => ({
  news: [],
  fitst_page: [],

  fetchNews: async () => {
    const { news, fitst_page } = get();

    const response = news.length !== 0 ? news : await getNews(lang);
    set({ news: response });
  },

  forceRefresh: async () => {
    const response = await getNews(lang);
    set({ news: response });
  },
}));

export default useGetNews;
