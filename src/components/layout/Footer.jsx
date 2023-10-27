import React from "react";
import { Link } from "react-router-dom";

const footerNavs = [
  {
    label: "Company",
    items: [
      {
        href: "/",
        name: "Partners",
      },
      {
        href: "/",
        name: "Blog",
      },
      {
        href: "/",
        name: "Team",
      },
      {
        href: "/",
        name: "Careers",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        href: "/",
        name: "contact",
      },
      {
        href: "/",
        name: "Support",
      },
      {
        href: "/",
        name: "Docs",
      },
      {
        href: "/",
        name: "Pricing",
      },
    ],
  },
  {
    label: "About",
    items: [
      {
        href: "/",
        name: "Terms",
      },
      {
        href: "/",
        name: "License",
      },
      {
        href: "/",
        name: "Privacy",
      },
      {
        href: "/",
        name: "About US",
      },
    ],
  },
];

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  return (
    <footer className="items-center justify-center">
      <button
        className="flex items-center justify-center w-full py-3 text-white transition duration-300 ease-in-out bg-gray-800 shadow-inner hover:shadow-md hover:bg-slate-500"
        onClick={scrollToTop}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.6em"
          width="1.6em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16 12l-4 -4l-4 4"></path>
          <path d="M12 16v-8"></path>
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
        </svg>
        <span className="ml-2 text-sm">Go To Top</span>
      </button>

      <div className="text-gray-500 bg-gray-800 border-white border-y">
        <div className="justify-between gap-6 px-4 py-12 mx-auto container-fixed md:px-8 md:flex ">
          <div className="flex-1">
            <div className="w-full -mt-4">
              <Link
                to="/"
                className="items-center text-lg font-bold text-gray-800"
              >
                <strong className="text-4xl font-medium text-primary sm:text-5xl baloo ">
                  Fastway.com
                </strong>
              </Link>
              <div className="w-full mt-10">
                <p className="font-semibold text-white">Get the app</p>
                <div className="flex flex-col w-full gap-3 sm:flex-row sm:mt-3 pt-7 sm:pt-2">
                  <Link
                    to="/"
                    className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white hover:text-yellow-600 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="apple"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                    <div className="text-left">
                      <div className="mb-1 text-xs">Download on the</div>
                      <div className="-mt-1 font-sans text-sm font-semibold">
                        Mac App Store
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/"
                    className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white hover:text-yellow-600 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google-play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                      ></path>
                    </svg>
                    <div className="text-left">
                      <div className="mb-1 text-xs">Get in on</div>
                      <div className="-mt-1 font-sans text-sm font-semibold">
                        Google Play
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-3 mb-3 font-semibold text-white">
                Stay up to date
              </label>
              <div className="flex items-center max-w-sm p-1 bg-white border-2 border-gray-400 rounded-full shadow-inner">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none rounded-l-full"
                />
                <button className="px-4 py-2 m-1 text-white rounded-full shadow-inner bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="grid items-center justify-between flex-1 grid-cols-2 gap-6 mt-10 sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-medium text-white">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      to={el.href}
                      className="text-sm text-gray-400 hover:text-blue-400"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 bg-gray-900 shadow-inner">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row container-fixed ">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2023{" "}
            <Link to="/" className="hover:text-blue-400">
              Fastway™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-6 sm:justify-center sm:mt-0">
            <Link to="/" className="text-gray-400 hover:text-yellow-600">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-yellow-600">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-yellow-600">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-yellow-600">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
