import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getNews } from "@/api/connect";
import { lang } from "./lg";
import type { NewsItem } from "@/types/api_news_types";

export const useGetNews = create(
  persist(
    (set, get: any) => ({
      news: [],

      fetchNews: async () => {
        const { news } = get();

        const response = news.length !== 0 ? news : await getNews(lang);
        set({ news: response });
      },

      forceRefresh: async () => {
        const response = await getNews(lang);
        set({ news: response });
      },
    }),
    {
      name: "news-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useGetNews;
