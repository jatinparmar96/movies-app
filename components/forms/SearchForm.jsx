import { AntDesign } from '@expo/vector-icons';
import {
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  Input,
  SearchIcon,
  Select,
  Stack,
} from 'native-base';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchType, setSearchType] = useState('multi');
  const [showError, setShowError] = useState(false);

  const submit = () => {
    if (searchTerm) {
      onSubmit(searchTerm, searchType);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <>
      <FormControl isRequired isInvalid={showError}>
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
          <FormControl.ErrorMessage>
            TV or Movie Name is required
          </FormControl.ErrorMessage>
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
          onPress={() => submit()}
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
    </>
  );
};
