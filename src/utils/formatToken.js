const formatToken = (token) => {
  return {
    headers: {
      Authorization: token,
    },
  };
};
export default formatToken;
