const URL = './data/users.json';

export const fetchUsers = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Failed to fetch');
    const users = await response.json();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
