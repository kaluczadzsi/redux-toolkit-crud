import { Dispatch, SetStateAction } from 'react';

export type Modal = {
  isModalOpen: boolean;
  selectedUserId: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
