const useAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
export default useAuthHeader;
