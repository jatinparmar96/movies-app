import { Box, Center, FlatList } from 'native-base';
import { useRef, useState } from 'react';
import { tmdbService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';
import { TvCard } from '../cards/TvCard';
import { SearchForm } from '../forms/SearchForm';
import { Pagination } from '../layout/Pagination';

export const SearchContainer = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [itemType, setItemType] = useState();
  const [page, setPage] = useState(1);
  const maxPages = useRef(1);

  const search = async (searchTerm, searchType) => {
    const response = await tmdbService(
      'search',
      searchType,
      encodeURI(searchTerm),
      page
    );
    setItemType(searchType);
    setItems(response.data.results);
    maxPages.current = response.data.total_pages;
  };

  return (
    <Box flex={1} padding={4}>
      <SearchForm onSubmit={search} page={page} />
      <Box flex={1}>
        {!items.length ? (
          <Center
            flex={1}
            _text={{
              fontWeight: 'bold',
              fontSize: '28',
            }}
          >
            Please Initiate a Search
          </Center>
        ) : (
          <FlatList
            mt={4}
            data={items}
            ListFooterComponent={
              <Pagination
                currentPage={page}
                setPage={setPage}
                maxPages={maxPages.current}
              />
            }
            renderItem={({ item }) => {
              if (
                item.media_type === 'movie' ||
                itemType === 'movie'
              ) {
                return (
                  <MovieCard
                    movie={item}
                    navigation={navigation}
                  />
                );
              } else {
                return (
                  <TvCard
                    tv={item}
                    navigation={navigation}
                  />
                );
              }
            }}
          />
        )}
      </Box>
    </Box>
  );
};
