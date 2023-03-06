import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../AppRoutes';

const NotFoundRoute = () => {
  return (
    <section>
      <h1 className="mb-6 pb-2 text-3xl font-bold">404 Not Found</h1>
      <p className="mb-6 pb-2 text-black">
        You've written a wrong url or navigated here by mistake.
      </p>
      <p className="mb-6 pb-2 text-black">
        Anyway, click the button below to return to the website!
      </p>
      <Link
        className="inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
        to={appRoutes.home}
      >
        Back to home
      </Link>
    </section>
  );
};

export default NotFoundRoute;
