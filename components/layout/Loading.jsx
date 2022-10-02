import { Heading, HStack, Spinner } from 'native-base';

export const Loading = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="teal.600" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
