import { Link } from "react-router-dom";

const UserAuthForm = ({ isRegister = false }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8 my-5">
      <div className="w-full max-w-md mx-auto flex flex-col justify-center">
        <a className="mt-10 w-fit text-zinc-950" href="/">
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="mr-3 h-[13px] w-[8px] text-zinc-950"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
            <p className="text-sm text-zinc-950">Go Back</p>
          </div>
        </a>

        <div className="mt-5 flex flex-col w-full max-w-xs sm:max-w-sm mx-auto">
          <p className="text-2xl font-bold text-zinc-950 text-center mb-3">
            {isRegister ? "Register Account" : "Sign In"}
          </p>
          <p className="mb-4 mt-2 text-center text-zinc-950">
            {isRegister ? "Create an account to get started!" : "Enter your email and password to sign in!"}
          </p>

          <div className="mt-4">
            <form className="pb-2">
              <input type="hidden" name="provider" value="google" />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 w-full text-zinc-950 py-6 border bg-background hover:bg-accent border-black"
                type="submit"
              >
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 48 48"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                </span>
                <span>Google</span>
              </button>
            </form>
          </div>

          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-400"></div>
              <div className="grow border-t border-zinc-400"></div>
            </div>
          </div>

          <form noValidate className="mb-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label className="text-zinc-950" htmlFor="email">
                  Email
                </label>
                <input
                  className="mb-2 h-full w-full rounded-lg border border-zinc-800 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                />
                <label className="text-zinc-950 mt-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  className="mb-2 h-full w-full rounded-lg border border-zinc-800 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none"
                  name="password"
                />
                {isRegister && (
                  <>
                    <label className="text-zinc-950 mt-2" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      placeholder="Confirm Password"
                      type="password"
                      className="mb-2 h-full w-full rounded-lg border border-zinc-800 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none"
                      name="confirm-password"
                    />
                  </>
                )}
              </div>
              <button
                className="mt-10 inline-flex justify-center rounded-lg text-sm font-semibold py-3.5 px-4 bg-slate-900 border border-slate-900 text-white hover:bg-slate-800 transition"
                type="submit"
              >
                {isRegister ? "Register" : "Sign in"}
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            {!isRegister ? (
              <>
                <p className="mb-2">
                  <Link
                    to="/signin" // "/signin/forgetpassword"
                    className="font-medium text-zinc-600 text-sm hover:text-zinc-950 transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <p>
                  <Link
                    to="/register"
                    className="font-medium text-zinc-600 text-sm hover:text-zinc-950 transition-colors"
                  >
                    Not a member? Create an Account
                  </Link>
                </p>
              </>
            ) : (
              <p>
                <Link
                  to="/signin"
                  className="font-medium text-zinc-600 text-sm hover:text-zinc-950 transition-colors"
                >
                  Already have an account? Sign in
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;
