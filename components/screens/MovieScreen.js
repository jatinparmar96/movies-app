import {
  Box,
  Center,
  CheckIcon,
  FlatList,
  ScrollView,
  Select,
} from 'native-base';
import { useEffect, useState } from 'react';
import { movieService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';

export const MovieScreen = (props) => {
  const [category, setCategory] = useState('now_playing');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await movieService(category);
      setMovies(response.data.results);
    })();
  }, [category]);
  console.log(movies[0]);
  return (
    <ScrollView>
      <Center>
        <Select
          backgroundColor={'white'}
          alignItems="center"
          justifyContent={'center'}
          selectedValue={category}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            color: 'white',
            endIcon: <CheckIcon size="5" color="white" />,
          }}
          mt={8}
          onValueChange={(itemValue) =>
            setCategory(itemValue)
          }
        >
          <Select.Item
            label="Now Playing"
            value="now_playing"
          />
          <Select.Item label="Popular" value="popular" />
          <Select.Item
            label="Top Rated"
            value="top_rated"
          />
          <Select.Item label="upcoming" value="upcoming" />
          <Select.Item
            label="Backend Development"
            value="backend"
          />
        </Select>
      </Center>
      <Box height="100%" safeAreaBottom>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieCard movie={item} />
          )}
        ></FlatList>
      </Box>
    </ScrollView>
  );
};
