import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';

export const MovieCard = ({ movie }) => {
  return (
    <Box
      marginY={2}
      marginX={4}
      borderBottomColor="gray.300"
      borderBottomWidth="1"
      paddingBottom={4}
    >
      <HStack>
        <AspectRatio w="30%" ratio={1}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            alt={`${movie.original_title} poster`}
          />
        </AspectRatio>
        <VStack ml={2}>
          <Text fontWeight="bold">
            {movie.original_title}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>Release Date: {movie.release_date}</Text>
          <Button bg="teal.300" width="100%">
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};
