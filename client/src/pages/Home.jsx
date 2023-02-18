import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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

  // 3).Access states in store and parse to variables
  const { images, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.images
  );

  // 4).Events handlers
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [images, isLoading, isError, isSuccess, message, dispatch]);

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
              <button type="submit" id="">
                Generate
              </button>
            </form>
            <button id="">
              <Link to={images.data} target="_blank">
                Download
              </Link>
            </button>
          </div>
        </section>

        {/* <section className="">
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
        </section> */}
      </div>
    </>
  );
}

export default Home;
