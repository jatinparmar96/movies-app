import {
  Center,
  CheckIcon,
  FlatList,
  Select,
  VStack,
} from 'native-base';
import { useEffect, useState } from 'react';
import { tmdbService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';
import { TvCard } from '../cards/TvCard';
export const ListContainer = ({
  type,
  navigation,
  categories,
}) => {
  const [category, setCategory] = useState(
    categories[0].value
  );
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await tmdbService(type, category);
      setList(response.data.results);
    })();
  }, [category]);

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
            color: 'white',
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

      <FlatList
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
    </VStack>
  );
};
