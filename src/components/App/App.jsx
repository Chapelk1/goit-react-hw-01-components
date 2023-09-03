import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import {Wraper} from './App.styled'
import userInfo from 'data/user.json'
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
    return (
      <Wraper>
        <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          stats={userInfo.stats}
        />
        <Statistics stats={data} title="Upload stats" />
        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} />
      </Wraper>
    );
}
