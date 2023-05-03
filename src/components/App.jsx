// import '../index.css'
// Task 1
import user from '../data/user';
import { Profile } from './Profile/Profile';
// // Task 2
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
// // Task 3
import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';
// Task 4
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '15px',
        width: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
