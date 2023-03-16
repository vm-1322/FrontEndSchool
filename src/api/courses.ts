import axios from 'axios';

const URL: string = 'https://api.wisey.app/api/v1';

export const getCoursesList = async () => {
  try {
    const token = await getToken();
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
