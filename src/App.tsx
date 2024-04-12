import { useState } from 'react';
import UsersTable from './components/UsersTable';
import InputField from './components/InputField';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDeleteModal = false;
  const handleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="max-w-7xl h-screen m-auto w-full p-2 font-[montserrat] bg-[#FCFCFC]">
      <h1 className="font-semibold text-3xl md:text-4xl text-left py-4 text-[#23272F]">
        React <span className="font-bold text-pink-600">CRUD</span> app with
        Redux
      </h1>

      <button
        onClick={handleModalOpen}
        type="button"
        className="btn btn-success flex items-center justify-center my-6"
      >
        Create +
      </button>

      <UsersTable />

      <div className={`fixed z-10 inset-0 ${isModalOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-75 transition-all">
          <div className="bg-white w-1/2 p-4 rounded">
            <form>
              <h1 className="text-center font-semibold text-2xl mb-4 text-[23272F]">
                {isDeleteModal ? 'Delete User' : 'Update User'}
              </h1>
              {isDeleteModal ? (
                <p className="text-[#404756] text-center mb-4 font-semibold">
                  Are you sure you want to delete this user?
                </p>
              ) : (
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="w-1/2 flex flex-col gap-4">
                    <InputField label="Name" id="name" />
                    <InputField label="Email" id="email" />
                  </div>
                </div>
              )}
              <div className="flex pt-6 gap-2 justify-center m-auto w-1/2">
                <button
                  className={`w-full btn ${
                    isDeleteModal ? 'btn-danger' : 'btn-primary'
                  }`}
                  type="submit"
                >
                  {isDeleteModal ? 'Delete' : 'Update'}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`w-full btn ${
                    isDeleteModal ? 'btn-primary' : 'btn-danger'
                  }`}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
