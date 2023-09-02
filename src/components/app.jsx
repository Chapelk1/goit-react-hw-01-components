import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import userInfo from 'user.json'
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
    return (
      <div className="wrap">
        <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          stats={userInfo.stats}
        />
        <Statistics stats={data} />
        <Statistics stats={data} title="Upload stats" />
        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    );
}
