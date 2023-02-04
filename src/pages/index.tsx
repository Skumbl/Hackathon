import { type NextPage } from "next";

const Home: NextPage = () => {
  const uploadFiles = () => {
    console.log("Clicked");
  };

  const decryptFiles = () => {
    console.log("Decrypt");
  };

  return (
    <div className="grid grid-cols-4 p-16 bg-slate-600 text-white font-LibreBask">
      <div className="flex flex-col items-center">
        <h2>Developers</h2>
        <ul>
          <li>
            Jan Arvik -{" "}
            <a href="#" className="text-blue-600 underline">
              Link
            </a>
          </li>
          <li>
            Jack Savage -{" "}
            <a href="#" className="text-blue-600 underline">
              Link
            </a>
          </li>
          <li>
            Michael Peters -{" "}
            <a href="#" className="text-blue-600 underline">
              Link
            </a>
          </li>
          <li>
            Truman DeWalch -{" "}
            <a href="#" className="text-blue-600 underline">
              Link
            </a>
          </li>
        </ul>
      </div>


      <div className="col-span-2 flex h-screen flex-col items-center">
        <label htmlFor="text-input">Type to encrypt:</label>
        <textarea
          id="text-input"
          cols={30}
          rows={3}
          className="rounded border border-black p-1 text-black"
        />
        <label htmlFor="image-input" className="mt-4">
          Upload an image:
        </label>
        <input type="file" id="image-input" className="mb-4" />

        <button
          onClick={uploadFiles}
          className="rounded-full border border-black bg-white px-4 text-black hover:bg-black hover:text-white"
        >
          Encrypt
        </button>
        <div className="h-1/5" />
        <label htmlFor="decrypt-input">Upload a file to decrypt</label>
        <input type="file" id="decrypt-input" />
        <button
          onClick={decryptFiles}
          className="rounded-full border border-black bg-white px-4 text-black hover:bg-black hover:text-white"
        >
          Decrypt
        </button>
      </div>


      <div className="flex flex-col items-center">
        <h2>Explanation of encryption:</h2>
        {/* TODO: Jan you got this one */}
        <p>TODO</p>
      </div>
    </div>
  );
};

export default Home;
