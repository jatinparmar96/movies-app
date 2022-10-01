import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Image,
  Text,
} from 'native-base';
import { useEffect, useState } from 'react';
import { movieService } from '../../services/api';

export const MovieDetailScreen = ({
  route,
  navigation,
}) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const response = await movieService(movieId);
      setMovie(response.data);
    })();
  }, [movieId]);

  return (
    <>
      {!movie ? (
        <Text>Loading..</Text>
      ) : (
        <Box flex={1} paddingX={10}>
          <Center mt={8}>
            <Text fontSize={24} fontWeight="bold">
              {movie.original_title}
            </Text>
            <AspectRatio w="80%" mt={3} ratio={1}>
              <Image
                resizeMode="cover"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
                alt={`${movie.original_title} poster`}
              />
            </AspectRatio>
          </Center>
          <Text
            mt={3}
            color="gray.800"
            alignContent="center"
          >
            {movie.overview}
          </Text>
          <HStack mt={6}>
            <Text>Popularity: {movie.popularity}</Text>
            <Text mx={1}>|</Text>
            <Text>Release Date: {movie.release_date}</Text>
          </HStack>
        </Box>
      )}
    </>
  );
};
