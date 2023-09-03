import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </FriendList>
  );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object,),
}
