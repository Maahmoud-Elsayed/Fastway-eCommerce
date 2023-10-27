
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const BreadCrumb = () => {



  const params = useParams();
  const { pathname } = useLocation();
  const productsPath = `/products`;
  const categoryPath = `/products/${params.category}`;

  return (
    <div
      className={`container-fixed mt-8 sm:mt-11 `}
    >
      <div
        className=" flex  px-5 py-3 text-gray-700 border border-gray-200 shadow-md  rounded-lg  "
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
            >
              <AiFillHome />
              Home
            </Link>
          </li>
          <li>
            <div className="flex gap-2 items-center">
              <MdOutlineArrowForwardIos />
              {pathname === productsPath ? (
                <span className=" text-sm font-medium text-gray-500  ">
                  Products
                </span>
              ) : (
                <NavLink
                  to={productsPath}
                  className=" text-sm font-medium text-gray-700 hover:text-blue-600 "
                >
                  Products
                </NavLink>
              )}
            </div>
          </li>
          {params && params.category && (
            <li>
              <div className="flex gap-2 items-center">
                <MdOutlineArrowForwardIos />
                {pathname.replace(/%20/g, " ") === categoryPath ? (
                  <span className=" text-sm font-medium text-gray-500 ">
                    {params.category.toLowerCase().includes("women's")
                      ? "Women"
                      : params.category.toLowerCase().includes("men's")
                      ? "Men"
                      : params.category.charAt(0).toUpperCase() +
                        params.category.slice(1)}
                  </span>
                ) : (
                  <NavLink
                    to={categoryPath}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600  "
                  >
                    {params.category.toLowerCase().includes("women's")
                      ? "Women"
                      : params.category.toLowerCase().includes("men's")
                      ? "Men"
                      : params.category.charAt(0).toUpperCase() +
                        params.category.slice(1)}
                  </NavLink>
                )}
              </div>
            </li>
          )}
          {params && params.productId && (
            <li>
              <div className="flex gap-2 items-center">
                <MdOutlineArrowForwardIos />
                <span className=" text-sm font-medium text-gray-500 ">
                  {params.productId.charAt(0).toUpperCase() +
                    params.productId.slice(1)}
                </span>
              </div>
            </li>
          )}
          {pathname === "/products/search" && (
            <li>
              <div className="flex gap-2 items-center">
                <MdOutlineArrowForwardIos />
                <span className="text-sm font-medium text-gray-500 ">
                  Search
                </span>{" "}
              </div>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default BreadCrumb;
