import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Image,
  Text,
} from 'native-base';

export const ItemPageContainer = ({
  title,
  photo,
  description,
  popularity,
  releaseDate,
}) => {
  return (
    <Box flex={1} paddingX={10}>
      <Center mt={8}>
        <Text fontSize={24} fontWeight="bold">
          {title}
        </Text>
        <AspectRatio w="80%" mt={3} ratio={1}>
          <Image
            resizeMode="cover"
            source={{
              uri: photo,
            }}
            alt={`${title} poster`}
          />
        </AspectRatio>
      </Center>
      <Text mt={3} color="gray.800" alignContent="center">
        {description}
      </Text>
      <HStack mt={6} space={2}>
        <Text>Popularity: {popularity}</Text>
        <Text>|</Text>
        <Text>Release Date: {releaseDate}</Text>
      </HStack>
    </Box>
  );
};
