import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Box,
  Button,
  HStack,
  Text,
  View,
} from 'native-base';

export const Pagination = ({
  currentPage,
  setPage,
  maxPages,
}) => {
  return (
    <Box flex={1} mx={4}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        space={4}
      >
        {currentPage !== 1 ? (
          <Button
            alignSelf="flex-start"
            leftIcon={<ArrowBackIcon />}
            onPress={() => setPage(currentPage - 1)}
          >
            Previous Page
          </Button>
        ) : (
          <EmptyComponent />
        )}
        <Text alignSelf="center">
          Page {currentPage}/{maxPages}
        </Text>
        {currentPage < maxPages ? (
          <Button
            alignSelf="flex-end"
            rightIcon={<ArrowForwardIcon />}
            onPress={() => setPage(currentPage + 1)}
          >
            Next Page
          </Button>
        ) : (
          <EmptyComponent />
        )}
      </HStack>
    </Box>
  );
};

const EmptyComponent = () => <View flex={1}></View>;
