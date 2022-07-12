const expiredToken = (err) => {
  if (err.response.status === 401) return window.location.replace("/");
};

export default expiredToken;
