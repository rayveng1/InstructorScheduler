"use client";
import Link from "next/link";
import useProfData from "../../_hooks/useProfData";
import { useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent } from "react";

export default function EditSettingsInfoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data, isLoading } = useProfData(searchParams.get("id"));

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    let body = {
      ...data,
    };

    // @ts-ignore
    body.name = `${e.currentTarget.first} ${e.currentTarget.last}`;

    //@ts-ignore
    body.email = e.currentTarget.email;

    // @ts-ignore
    body.phone = e.currentTarget.phone;

    fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      mode: "cors",
    })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          router.back();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {data && (
        <form
          className="bg-white w-5/12 mx-auto mt-8 p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
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
                  name="first"
                  defaultValue={data.name.split("")[0]}
                ></input>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full mx-auto">
                <p className="font-semibold">Last Name</p>
                <input
                  type="text"
                  className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
                  name="last"
                  defaultValue={data.name.split("")[1]}
                ></input>
              </div>
            </div>
            <div className="col-span-2">
              <div className="w-full mx-auto">
                <p className="font-semibold">Email Address</p>
                <input
                  type="email"
                  className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
                  name="email"
                  defaultValue={data.email ?? ""}
                ></input>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full mx-auto">
                <p className="font-semibold">Phone</p>
                <input
                  type="tel"
                  className="rounded w-full h-8 bg-gray-50 border-2 border-gray-300"
                  name="phone"
                  defaultValue={data.phone ?? ""}
                ></input>
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
      )}
    </>
  );
}
