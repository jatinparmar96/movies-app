import { AntDesign } from '@expo/vector-icons';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FlatList,
  FormControl,
  HStack,
  Icon,
  Input,
  SearchIcon,
  Select,
  Stack,
} from 'native-base';
import { useState } from 'react';
import { tmdbService } from '../../services/api';
import { MovieCard } from '../cards/MovieCard';
import { TvCard } from '../cards/TvCard';

export const SearchContainer = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchType, setSearchType] = useState('multi');
  const [items, setItems] = useState([]);
  const search = async () => {
    if (searchTerm) {
      const response = await tmdbService(
        'search',
        searchType,
        encodeURI(searchTerm)
      );
      setItems(response.data.results);
      setSearchTerm('');
    }
  };
  return (
    <Box flex={1} padding={4}>
      <FormControl isRequired>
        <Stack>
          <FormControl.Label>
            Search Movie/TV Show Name
          </FormControl.Label>
          <Input
            type="text"
            placeholder="ie. James Bond, CSI etc"
            leftElement={
              <Icon
                as={
                  <AntDesign
                    style={{ paddingLeft: 10 }}
                    name="search1"
                    color="black"
                  />
                }
              />
            }
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </Stack>
      </FormControl>
      <HStack alignItems="flex-end" space={2}>
        <FormControl w="50%" isRequired>
          <FormControl.Label>
            Choose Search Type
          </FormControl.Label>
          <Select
            backgroundColor={'white'}
            alignItems="center"
            justifyContent={'center'}
            accessibilityLabel="Choose Category"
            placeholder="Choose Category"
            _selectedItem={{
              bg: 'teal.800',
              _text: {
                color: 'white',
              },
              endIcon: <CheckIcon size="5" color="white" />,
            }}
            onValueChange={(text) => {
              setSearchType(text);
              setSearchTerm('');
            }}
            selectedValue={searchType}
          >
            <Select.Item label="multi" value="multi" />
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="TV Series" value="tv" />
          </Select>
        </FormControl>
        <Button
          onPress={() => search()}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
          }}
          flex={1}
          leftIcon={<SearchIcon />}
        >
          Search
        </Button>
      </HStack>
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
            renderItem={({ item }) => {
              if (
                item.media_type === 'movie' ||
                searchType === 'movie'
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
