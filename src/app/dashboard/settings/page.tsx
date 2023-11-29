"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import useProfData from "./_hooks/useProfData";

export default function SettingsPage() {
  const searchParams = useSearchParams();

  const { data, isLoading } = useProfData(searchParams.get("id"));

  const [allowEmailNotifs, setAllowEmailNotifs] = useState<boolean>();
  const [allowTextNotifs, setAllowTextNotifs] = useState<boolean>();

  const handleUpdateNotif = (isEmail: boolean, isText: boolean, value: any) => {
    console.log("YOHO", value);
    const body = {
      ...data,
    };
    if (isEmail) body.email_notification = value;
    if (isText) body.phone_notification = value;

    console.log(body);

    fetch("http://localhost:8080/Instructor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container mx-auto my-5 px-5 pb-[200px]">
      {isLoading ? (
        <p className="w-max mx-auto">Loading...</p>
      ) : (
        data && (
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="bg-white dark:bg-slate-800 p-3 border-t-4 border-utdorange">
                <div className="image overflow-hidden">
                  <img
                    className="h-[200px] w-[200px] mx-auto rounded-full"
                    src="https://placekitten.com/200/200"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 dark:text-white font-bold text-xl leading-8 my-1">
                  {data.name}
                </h1>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2 h-64">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="bg-white dark:bg-slate-800 p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8">
                  <span className="text-utdorange">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Profile</span>
                </div>
                <div className="text-gray-700 dark:text-white">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{data.name.split(" ")[0]}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">{data.name.split(" ")[1]}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Phone</div>
                      <div className="px-4 py-2">{data.phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href={`mailto:${data.email}`}
                        >
                          {data.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/dashboard/settings/edit/info?id=${searchParams.get(
                    "id"
                  )}`}
                  className="block w-full text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                >
                  <span className="w-max flex mx-auto items-center justify-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Edit Information
                  </span>
                </Link>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              <div className="bg-white dark:bg-slate-800 p-3 pb-8 shadow-sm rounded-sm mt-4">
                <div className="flex items-center justify-between w-2/3 space-x-2 font-semibold dark:text-white text-gray-900 leading-8 mb-3">
                  <div className="flex items-center gap-x-2">
                    <span className="text-utdorange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">
                      Notification Preferences
                    </span>
                  </div>
                </div>
                <form className="mt-4 w-2/3 flex flex-col gap-y-4">
                  <div className="flex justify-between items-center">
                    <p>Email Notifications</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={
                          allowEmailNotifs ?? data.email_notification
                            ? true
                            : false
                        }
                        onChange={(event) => {
                          setAllowEmailNotifs(event.currentTarget.checked);
                          handleUpdateNotif(
                            true,
                            false,
                            event.currentTarget.checked
                          );
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-slate-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-slate-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-200"></div>
                    </label>
                  </div>

                  <div className="flex justify-between items-center">
                    <p>Text Notifications</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={
                          allowTextNotifs ?? data.phone_notification
                            ? true
                            : false
                        }
                        onChange={(event) => {
                          setAllowTextNotifs(event.currentTarget.checked);
                          handleUpdateNotif(
                            false,
                            true,
                            event.currentTarget.checked
                          );
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-slate-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-slate-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-200"></div>
                    </label>
                  </div>
                </form>
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        )
      )}
    </div>
  );
}
