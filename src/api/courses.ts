import axios from 'axios';

const URL: string = 'https://api.wisey.app/api/v1';

export const getCourse = async (courseId: string) => {
  try {
    const token = await readToken();

    const response = await axios.get(
      `${URL}/core/preview-courses/${courseId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesList = async () => {
  readToken();

  try {
    const token = await readToken();

    const response = await axios.get(`${URL}/core/preview-courses`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.courses;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  try {
    const response = await axios.get(
      `${URL}/auth/anonymous?platform=subscriptions`
    );

    return await response.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const readToken = async () => {
  let token = sessionStorage.getItem('auth-token');

  if (token) return token;

  token = await getToken();

  sessionStorage.setItem('auth-token', token as string);

  return token;
};
