import { useState } from 'react';
import DeleteModal from './components/DeleteModal';
import UsersTable from './components/UsersTable';
import useSelectedUser from './components/useSelectedUser';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);

  const handleSetUserId = (id: number) => {
    setSelectedUserId(id);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl h-screen m-auto w-full p-2 font-[montserrat]">
      <h1 className="font-semibold text-3xl md:text-4xl text-left py-4 text-[#23272F]">
        React <span className="font-bold text-pink-600">CRUD</span> app with
        Redux
      </h1>

      <button
        onClick={handleOpenModal}
        type="button"
        className="btn btn-success flex items-center justify-center my-6"
      >
        Create +
      </button>

      <UsersTable
        openModal={handleOpenModal}
        handleSetUserId={handleSetUserId}
      />

      <DeleteModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedUserId={selectedUserId}
      />
    </div>
  );
};

export default App;
