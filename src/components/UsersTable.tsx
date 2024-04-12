import { useAppSelector } from '../../hook';
import { UserTable as UserTableProps } from '../../types/usertable';

const UsersTable = ({ openModal, handleSetUserId }: UserTableProps) => {
  const users = useAppSelector((state) => state.users);

  return users.length ? (
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
              <p> {user.name}</p>
            </td>
            <td>
              <p> {user.email}</p>
            </td>
            <td className="flex gap-2">
              <button
                onClick={() => {
                  handleSetUserId(user.id);
                  openModal();
                }}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleSetUserId(user.id);
                  openModal();
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="font-bold text-lg">There are no users.</div>
  );
};

export default UsersTable;
