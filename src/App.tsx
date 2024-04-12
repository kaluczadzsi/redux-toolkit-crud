import { useEffect, useState } from 'react';
import { fetchUsers } from './utils/fetchUsers';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-7xl h-screen m-auto w-full p-2">
      <h1 className="font-semibold text-3xl md:text-4xl text-left pt-4">
        React <span className="font-bold text-teal-600">CRUD</span> app with
        Redux
      </h1>

      <button
        type="button"
        className="btn btn-success flex items-center justify-center my-6"
      >
        Create +
      </button>

      <UsersList users={users} />
    </div>
  );
};

export default App;
