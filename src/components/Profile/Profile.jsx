import PropTypes from 'prop-types'
import {
  Card,
  Description,
  Avatar,
  Paragraph,
  StatsList,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';


export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  const {followers,views, likes } = stats
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Paragraph>{username}</Paragraph>
        <Paragraph>{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </Description>

      <StatsList>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};