import { logoutAction } from "../logout/logout-action";

export default function LogoutPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded shadow-md sm:w-md">

        <h2 className="text-2xl font-bold text-center">Logout</h2>

        <p className="text-gray-700 text-center">
          Are you sure you want to log out?
          <br />
          You will need to log in again to access admin features.
        </p>

        {/* Buttons container */}
        <div className="flex flex-col gap-4">

          {/* YES → Runs server action */}
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-40 text-white py-2 rounded bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer"
            >
              Yes, log me out
            </button>
          </form>

          {/* NO → Go back to home */}
          <a
            href="/"
            className="w-40 text-center py-2 rounded bg-gray-300 hover:bg-gray-400 transition duration-300"
          >
            No, go back
          </a>
        </div>
      </div>
    </div>
  );
}
