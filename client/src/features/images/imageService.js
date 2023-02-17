import axios from 'axios';

// Deal with API endpoint
const API_URL = 'openai';

const generateImage = async (data) => {
  const response = await axios.post(API_URL + '/img-gen', data);

  if (response) {
    const imgUrl = JSON.stringify(response.data);
    localStorage.setItem('images', imgUrl);
    console.log(imgUrl);
  }

  return response.data;
};

// Services
const imageService = {
  generateImage,
};

export default imageService;
