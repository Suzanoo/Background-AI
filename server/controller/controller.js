// CONFIGURATION
// https://github.com/openai/openai-node
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// EXECUTION
// https://platform.openai.com/docs/guides/images/usage
const imgGenerate = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: 'all alone in the moon light in chinese art',
      n: 1,
      size: '256x256',
    });

    const image_url = response.data.data[0].url;

    res.status(200).json({
      status: 'success',
      data: image_url,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      status: 'fail',
      error: 'Try again later',
    });
  }
};

module.exports = { imgGenerate };
