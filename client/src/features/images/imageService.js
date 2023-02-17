import axios from 'axios';

// Deal with API endpoint
const API_URL = 'openai';

const generateImage = async (data) => {
  const respons = await axios.post(API_URL + '/img-gen', data);

  if (respons) localStorage.setItem('image');
  return respons;
};

// Services
const imageService = {
  generateImage,
};

export default imageService;
