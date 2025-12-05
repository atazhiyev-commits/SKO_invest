import { create } from "zustand";
import { getNews } from "@/api/connect";
import { lang } from "./lg";

export const useGetNews = create((set, get: any) => ({
  news: [],
  first_page: [],

  fetchNews: async (totlaPage: number) => {
    const { news } = get();

    const response = news.length !== 0 ? news : await getNews(lang, totlaPage);
    set({ news: response });
  },
}));

export default useGetNews;
