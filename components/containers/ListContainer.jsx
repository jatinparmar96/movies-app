import {
  Center,
  CheckIcon,
  FlatList,
  Select,
  VStack,
} from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { tmdbService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';
import { TvCard } from '../cards/TvCard';
import { Loading } from '../layout/Loading';
import { Pagination } from '../layout/Pagination';
export const ListContainer = ({
  type,
  navigation,
  categories,
}) => {
  const [category, setCategory] = useState(
    categories[0].value
  );
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const maxPages = useRef(1);
  const loadItems = async () => {
    setLoading(true);
    const response = await tmdbService(
      type,
      category,
      '',
      page
    );
    setList(response.data.results);
    maxPages.current = response.data.total_pages;
    setLoading(false);
  };
  useEffect(() => {
    loadItems();
  }, [category, page]);

  return (
    <VStack space={4} flex={1}>
      <Center mt={8}>
        <Select
          backgroundColor={'white'}
          alignItems="center"
          justifyContent={'center'}
          selectedValue={category}
          minWidth="200"
          accessibilityLabel="Choose Category"
          placeholder="Choose Category"
          _selectedItem={{
            bg: 'teal.800',
            _text: {
              color: 'white',
            },
            endIcon: <CheckIcon size="5" color="white" />,
          }}
          onValueChange={(itemValue) =>
            setCategory(itemValue)
          }
        >
          {categories.map((category, index) => {
            return (
              <Select.Item
                key={index}
                label={category.title}
                value={category.value}
              />
            );
          })}
        </Select>
      </Center>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          ListFooterComponent={
            <Pagination
              currentPage={page}
              setPage={setPage}
              maxPages={maxPages.current}
            />
          }
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          data={list}
          renderItem={({ item }) => (
            <>
              {type === 'movie' ? (
                <MovieCard
                  movie={item}
                  navigation={navigation}
                />
              ) : (
                <TvCard tv={item} navigation={navigation} />
              )}
            </>
          )}
        ></FlatList>
      )}
    </VStack>
  );
};
