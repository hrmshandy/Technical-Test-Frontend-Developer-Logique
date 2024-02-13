import useSWR from 'swr'

const fetcher = async (...args: any[]): Promise<any> => {
    const response = await fetch(...args);
    return response.json();
  };

  export const useFetcher = (url) {

  }
