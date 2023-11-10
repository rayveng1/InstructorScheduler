import Link from "next/link";

export default function AddClassPage() {
    return (
        <>
        <form className="bg-white w-2/3 mx-auto mt-8 p-8 rounded shadow-md h-2/3">
            <h1 className="w-full text-center text-utdorange font-bold text-2xl mb-6">
                Add Courses
            </h1>
            <div className="tabs">
                <div className="tab active-tab text-black font-semibold">
                    Search by Subject
                </div>
                <div className="tab text-black font-semibold">
                    Search by Attribute
                </div>
            </div>
            <div className="content">
                <div className="content active-content text-black">
                    <h1>Subject</h1>
                    <p>Enter subject</p>
                </div>
                <div className="content text-black">
                    <h1>Attribute</h1>
                    <p>Enter attribute</p>
                </div>
                <Link
                    href="/dashboard/schedules"
                    className="block w-1/6 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-4">
                    <span className="w-max flex mx-auto items-center justify-center gap-x-2">
                        Back
                    </span>
                </Link>
            </div>
        </form>
        </>
    );
}