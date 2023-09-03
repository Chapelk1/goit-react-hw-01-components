import PropTypes from 'prop-types';
import { Item, Status, Avatar, Paragraph } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <Item>
      <Status statusOnline={isOnline}></Status>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Paragraph>{name}</Paragraph>
    </Item>
  );
};



FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}


 