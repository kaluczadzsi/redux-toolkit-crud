import { useState } from 'react';
import UsersTable from './components/UsersTable';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <form className="bg-white w-1/2 p-4 rounded">
            <h1 className="text-center font-semibold text-2xl mb-4 text-[23272F]">
              Update User
            </h1>

            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    className="text-[#404756] mb-2 font-semibold"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="bg-slate-100 p-2 rounded outline-none"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-[#404756] mb-2 font-semibold"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="bg-slate-100 p-2 rounded outline-none"
                    type="text"
                    id="email"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-around w-1/2 m-auto pt-6 gap-2">
              <button className=" w-full btn btn-primary" type="submit">
                Update
              </button>
              <button className="w-full btn btn-danger" type="submit">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
