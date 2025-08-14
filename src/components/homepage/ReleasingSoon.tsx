import { PodcastData } from "@/src/types/podcast";
import { get } from "@/src/lib/axiosInterceptor";
import ReleasingSoonSection from "./ReleasingSoonSection";
type ApiResponse = {
  data: PodcastData[];
};

const ReleasingSoon = async () => {
  const response = await get<ApiResponse>(`/api/podcasts?populate=*&sort=id:desc`);
  const podcasts = response.data;

  const firstPodcast = podcasts[0].attributes;
  return <ReleasingSoonSection firstPodcast={firstPodcast} />;
};

export default ReleasingSoon;
