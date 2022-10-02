import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';

export const ListItem = ({
  id,
  uri,
  title,
  popularity,
  releaseDate,
  onDetailPress,
}) => {
  return (
    <Box
      marginY={2}
      marginX={4}
      borderBottomColor="gray.300"
      borderBottomWidth="1"
      paddingBottom={4}
    >
      <HStack space={2}>
        <AspectRatio w="30%" ratio={1}>
          <Image
            source={{
              uri,
            }}
            alt={`${title} poster`}
          />
        </AspectRatio>
        <VStack flex={1}>
          <Text fontWeight="bold">{title}</Text>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releaseDate}</Text>
          <Button
            bg="teal.300"
            width="100%"
            onPress={onDetailPress}
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};
