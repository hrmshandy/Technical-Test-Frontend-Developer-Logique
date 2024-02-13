import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useFetcher = (url: string) => {
  return useSWR(url, fetcher);
};
