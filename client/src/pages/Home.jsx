import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import { reset, generateImages } from '../features/images/imageSlice';

function Home() {
  // 1).Define initial blank form
  const initialState = {
    prompt: '',
    size: 'Small',
  };

  // 2).Configure form fields
  const [formFields, setFormFields] = useState(initialState);
  const { prompt, size } = formFields;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 3).Access states in store and parse to variables
  const { images, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.images
  );

  // 4).Events handlers
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (isSuccess) {
    //   const imgUrl = images;
    //   document.querySelector('#image').src = imgUrl;
    //   navigate('/');
    // }

    dispatch(reset());
  }, [images, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (prompt === '') {
      toast.error('Please enter some text to generate image');
    } else {
      const data = {
        prompt: prompt,
        size: size.toLowerCase(),
      };
      console.log(data);
      dispatch(generateImages(data));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="content">
        <section>
          <div className="form-container">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                className=""
                placeholder="  Image Description..."
                id="prompt"
                name="prompt"
                value={prompt}
                onChange={onChange}
              ></input>
              <select name="size" id="size" value={size} onChange={onChange}>
                <option value="Small" selected>
                  256 x 256
                </option>
                <option value="Medium"> 512 x 512</option>
                <option value="Large"> 1024 x 1024</option>
              </select>
              <label className="text-3"> Image Size</label>
              <button type="submit" id="btn-1">
                Generate
              </button>
            </form>
          </div>
        </section>

        {/* <section className="showcase">
          <p className="text-1">I tried and failed. I tried again and again.</p>

          <form onSubmit={onSubmit}>
            <div className="user-box">
              <input
                type="text"
                className=""
                placeholder="  Image Description..."
                id="prompt"
                name="prompt"
                value={prompt}
                onChange={onChange}
              ></input>
            </div>

            <div>
              <select name="size" id="size" value={size} onChange={onChange}>
                <option value="Small" selected>
                  256 x 256
                </option>
                <option value="Medium"> 512 x 512</option>
                <option value="Large"> 1024 x 1024</option>
              </select>
              <label className="text-3"> Image Size</label>
            </div>

            <button type="submit" id="btn-1">
              Generate
            </button>
          </form>
        </section> */}
        <section className="">
          {images != null ? (
            <img src={images.data} alt="" id="image" className="bg" />
          ) : (
            <img
              src="../../public/test_img.png"
              alt=""
              id="image"
              className="bg"
            />
          )}
        </section>
      </div>
    </>
  );
}

export default Home;

// Chinese elder is talking to his cat in abstract Chinese art
