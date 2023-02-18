import axios from 'axios';

// Deal with API endpoint
const API_URL = 'openai';

const generateImage = async (data) => {
  const response = await axios.post(API_URL + '/img-gen', data);

  if (response) {
    const item = JSON.stringify(response.data);
    localStorage.setItem('images', item);
    console.log(item);

    // set background image
    document.body.style.backgroundImage = `url(${response.data.data})`;
  }

  return response.data;
};

// Services
const imageService = {
  generateImage,
};

export default imageService;
