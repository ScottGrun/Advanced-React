import gql from 'graphql-tag';
import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // Tells apollo we will handle cache ourselves
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length && items.length !== first && page === pages) {
        //   If there are items and aren't enough items on the per page field
        return items;
      }
      if (items.length !== first) {
        //   Check for existing items in cache
        return false;
      }

      if (items.length) {
        return items;
      }

      return false;
    },
    merge(existingCache, incomming, { args }) {
      // Merge items returned from the network
      const { skip } = args;

      const merged = existingCache ? existingCache.slice(0) : [];

      for (let i = skip; i < skip + incomming.length; ++i) {
        merged[i] = incomming[i - skip];
      }
      return merged;
    },
  };
}
