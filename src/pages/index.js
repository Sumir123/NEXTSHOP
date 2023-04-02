import useStore from "@/store/useStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [tempEmail, setTempEmail] = useState();
  const {
    username,
    setUsername,
    userInfo,
    password,
    setPassword,
    error,
    checkInfo,
  } = useStore();

  useEffect(() => {
    userInfo ? setTempEmail(userInfo.email) : setTempEmail("");
    if (userInfo) router.push("/dashboard");
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInfo(username, password);
  };
  return (
    <>
      <div className="px-5 pt-10  sm:px-10 md:px-15 lg:px-20">
        <h3 className="text-3xl bg-center text-center font-bold text-slate-800">
          Login
        </h3>
        <form className="mt-10 h-screen" onSubmit={handleSubmit}>
          {error && (
            <p className="text-center font-medium text-xl text-red-500">
              {error}
            </p>
          )}

          <div className="pb-6">
            <label className="font-medium text-gray-900" htmlFor="username">
              Username:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none focus:border-blue-500"
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="font-medium text-gray-900" htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none focus:border-blue-500 "
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
