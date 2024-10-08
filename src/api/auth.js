import apiClient from './client';

export const testEndpoint = async () => {
  try {
    return (await apiClient.get(
      'helper?ajax=1&action=verify_user&my-test=1024',
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'multipart/form-data',
        },
      },
    )).data;
  } catch (error) {
    return error.response && error.response.data;
  }
};
