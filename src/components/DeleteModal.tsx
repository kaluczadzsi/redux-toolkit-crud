import { Modal as ModalProps } from '../../types/modal';
import { useAppDispatch } from '../../hook';
import { deleteUser } from '../features/usersSlice';

const DeleteModal = ({
  isModalOpen,
  setIsModalOpen,
  selectedUserId,
}: ModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`fixed z-10 inset-0 ${isModalOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-75 transition-all">
        <div className="bg-white w-1/2 p-4 rounded">
          <form onSubmit={(e) => e.preventDefault}>
            <h1 className="text-center font-semibold text-2xl mb-4 text-[23272F]">
              Delete User
            </h1>
            <p className="text-[#404756] text-center mb-4 font-semibold">
              Are you sure you want to delete this user?
            </p>

            <div className="flex pt-6 gap-2 justify-center m-auto w-1/2">
              <button
                onClick={() => {
                  dispatch(deleteUser(selectedUserId));
                  setIsModalOpen(false);
                }}
                className="w-full btn btn-danger"
                type="button"
              >
                Delete
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full btn btn-primary"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
