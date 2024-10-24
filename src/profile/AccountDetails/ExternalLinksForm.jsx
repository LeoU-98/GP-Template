export default function ExternalLinksForm() {
  return (
    <div>
      <p className="mb-5 rounded-br-xl rounded-tl-xl bg-lima-500 py-1 text-center text-3xl text-white">
        External Links
      </p>
      <div className="flex flex-col gap-2">
        <label>
          Facebook
          <input
            type="text"
            name="facebook"
            placeholder="Enter Your Link Here"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-lima-500"
          />
        </label>

        <label>
          Instagram
          <input
            type="text"
            name="instagram"
            placeholder="Enter Your Link Here"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-lima-500"
          />
        </label>

        <label>
          X
          <input
            type="text"
            name="x"
            placeholder="Enter Your Link Here"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-lima-500"
          />
        </label>

        <label>
          LinkedIn
          <input
            type="text"
            name="linkedIn"
            placeholder="Enter Your Link Here"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-lima-500"
          />
        </label>

        <label>
          Google+
          <input
            type="text"
            name="googlePlus"
            placeholder="Enter Your Link Here"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-lima-500"
          />
        </label>
      </div>{" "}
    </div>
  );
}
