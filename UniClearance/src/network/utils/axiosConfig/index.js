export const axiosConfig = (token = null) => {
  if (token === null) {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } else {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  }
};
