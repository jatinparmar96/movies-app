import { ListItem } from '../list-items/ListItem';

export const MovieCard = ({ movie, navigation }) => {
  return (
    <ListItem
      navigation={navigation}
      id={movie.id}
      popularity={movie.popularity}
      title={movie.original_title}
      releaseDate={movie.release_date}
      uri={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    />
  );
};
