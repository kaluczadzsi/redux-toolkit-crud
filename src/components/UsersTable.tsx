import { useAppSelector } from '../../hook';

const UsersTable = () => {
  const users = useAppSelector((state) => state.users);

  return (
    <table className="table text-secondary text-lg">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>
              <input
                className="bg-white"
                disabled
                type="text"
                value={user.name}
              />
            </td>
            <td>
              <input
                className="bg-white"
                type="text"
                value={user.email}
                disabled
              />
            </td>
            <td className="flex gap-2">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
