import { useState } from 'react';

const useSelectedUser = () => {
  const [selectedUserId, setSelectedUserId] = useState(0);

  return {
    selectedUserId,
  };
};

export default useSelectedUser;
