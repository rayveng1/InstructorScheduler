import Link from "next/link";

export default function AddTimePage() {
    return (
        <>
        <form className="bg-white w-5/12 mx-auto mt-8 p-8 rounded shadow-md h-2/3">
            <h1 className="w-full text-center text-utdorange font-bold text-2xl mb-6">
                Add Time Preference
            </h1>
            <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2">
                <div className="col-span-1">
                    <div className="w-full mx-auto flex">
                        <p className="font-semibold text-black">Time Preference Name</p>
                        <input
                            type="text"
                            className="rounded w-5/6 h-8 bg-gray-50 border-2 border-gray-300 m-4">
                        </input>
                    </div>
                    <div className="w-full mx-auto flex">
                        <p className="font-semibold text-black">Start Time</p>
                        <input
                            type="text"
                            className="rounded w-5/6 h-8 bg-gray-50 border-2 border-gray-300 m-4">
                        </input>
                    </div>
                    <div className="w-full mx-auto flex">
                        <p className="font-semibold text-black">End Time</p>
                        <input
                            type="text"
                            className="rounded w-5/6 h-8 bg-gray-50 border-2 border-gray-300 m-4">
                        </input>
                    </div>
                    <div className="w-full mx-auto flex">
                        <p className="font-semibold text-black">Days</p>
                        <input
                            type="checkbox"
                            className="ml-5">
                        </input>
                    </div>
                <Link
                    href="/dashboard/schedules"
                    className="block w-1/3 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-4">
                    <span className="w-max flex mx-auto items-center justify-center gap-x-2">
                        Back
                    </span>
                </Link>
                </div>  
            </div>
        </form>
        </>
    );
}