import { useQuery } from '@tanstack/react-query';
import {
  fetchTopAiring,
    fetchMostPopular,
    fetchTopUpcoming,
    fetchMostFavorite,
    fetchLatestEpisode,

  searchAnime,
  fetchAnimeInfo,
  fetchEpisodes
} from '@/lib/api';

export const useTrendingAnime = (perPage = 10) => {
  return useQuery({
    queryKey: ['trending-anime'],
    queryFn: () => fetchTopAiring(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const usePopularAnime = (perPage = 20) => {
  return useQuery({
    queryKey: ['popular-anime'],
    queryFn: () => fetchMostPopular(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const useUpcomingAnime = (perPage = 20) => {
  return useQuery({
    queryKey: ['upcoming-anime'],
    queryFn: () => fetchTopUpcoming(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const useLatestEpisodeAnime = () => {
  return useQuery({
    queryKey: ['latest-episode-anime'],
    queryFn: () => fetchLatestEpisode(),
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 10,
  });
};

export const useFavoriteAnime = (perPage = 15) => {
  return useQuery({
    queryKey: ['favorite-anime'],
    queryFn: () => fetchMostFavorite(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const useAiringAnime = (perPage = 10) => {
  return useQuery({
    queryKey: ['airing-anime'],
    queryFn: () => fetchTopAiring(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};

export const useSearchAnime = (search: string, enabled = true) => {
  return useQuery({
    queryKey: ['search-anime', search],
    queryFn: () => searchAnime(search),
    enabled: enabled && search.length > 2,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useAnimeDetails = (id: string) => {
  return useQuery({
    queryKey: ['anime-details', id],
    queryFn: () => fetchAnimeInfo(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 30,
  });
};

export const useAnimeEpisodes = (id: string) => {
  return useQuery({
    queryKey: ['anime-episodes', id],
    queryFn: () => fetchEpisodes(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
  });
};
