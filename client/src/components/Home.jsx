function Home() {
  return (
    <>
      <hr></hr>
      <section className="showcase">
        <p className="text-1">I tried and failed. I tried again and again.</p>

        <form>
          <div class="user-box">
            <input
              type="text"
              className=""
              placeholder="  Image Description..."
            ></input>
          </div>

          <div>
            <select name="size" id="size">
              <option value="Small"> 256 x 256</option>
              <option value="Medium"> 512 x 512</option>
              <option value="Large"> 1024 x 1024</option>
            </select>
            <label className="text-3"> Image Size</label>
          </div>

          <button type="submit" id="btn-1">
            Generate
          </button>
          <div class="image-container">
            <h2 class="msg"></h2>
            <img src="" alt="" id="image" />
          </div>
        </form>
      </section>
    </>
  );
}

export default Home;
