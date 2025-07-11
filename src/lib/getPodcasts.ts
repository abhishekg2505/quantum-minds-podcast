// lib/getPodcasts.ts
"use server";

import { PodcastData } from "@/src/types/podcast";
import { get } from "@/src/lib/axiosInterceptor";

type ApiResponse = {
  data: PodcastData[];
};

export const getPodcasts = async (): Promise<PodcastData[]> => {
  const response = await get<ApiResponse>(`/api/podcasts?populate=*&sort=id:desc`);
  return response.data;
};
