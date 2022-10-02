import { ListItem } from '../list-items/ListItem';

export const TvCard = ({ tv, navigation }) => {
  return (
    <ListItem
      navigation={navigation}
      id={tv.id}
      popularity={tv.popularity}
      title={tv.name}
      releaseDate={tv.first_air_date}
      uri={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
    />
  );
};
