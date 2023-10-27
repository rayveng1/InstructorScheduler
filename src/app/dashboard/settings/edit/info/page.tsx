import Link from "next/link";

export default function EditSettingsInfoPage() {
  return (
    <>
      <form className="bg-white w-5/12 mx-auto mt-8 p-8 rounded shadow-md">
        <h1 className="w-full text-center text-utdorange font-bold text-2xl mb-6">
          Update Account Information
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2">
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <p className="font-semibold">First Name</p>
              <input
                type="text"
                className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
              ></input>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <p className="font-semibold">Last Name</p>
              <input
                type="text"
                className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
              ></input>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full mx-auto">
              <p className="font-semibold">Email Address</p>
              <input
                type="email"
                className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
              ></input>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <p className="font-semibold">Phone</p>
              <input
                type="tel"
                className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
              ></input>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <p className="font-semibold">Gender</p>
              <select className="bg-gray-50 h-8 w-2/3 px-2 rounded text-black border-2 border-gray-300">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-x-3 mt-4">
          <Link
            className="bg-gray-300 text-black py-2 px-4 rounded hover:opacity-50"
            href="/dashboard/settings"
          >
            Cancel
          </Link>
          <button className="bg-utdgreen text-white py-2 px-4 rounded hover:opacity-50">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
