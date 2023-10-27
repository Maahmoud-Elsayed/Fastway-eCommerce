
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineHeart, HiOutlineLocationMarker } from 'react-icons/hi';
import { CiShoppingTag } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const SecNav = () => {
  const dispatch = useDispatch();

  const wishTotalQuantity = useSelector(
    (state) => state.wishList.totalQuantity
  );

  const togglewishListHandler = () => {
    dispatch(uiActions.wishListToggle());
  };
  return (
    <nav className={`bg-gray-800 shadow-inner`}>
      <div className="container-fixed">
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center pb-3 pt-2 sm:py-2">
          <div
            className={`w-full sm:w-auto flex items-center justify-between  flex-shrink-0 gap-2  text-center`}
          >
            <div className="flex gap-2 items-center justify-center ">
              <span>
                <CiShoppingTag className="text-white w-6 h-6 " />
              </span>
              <span className="text-white">Available 24/7 at</span>
            </div>
            <span className="text-gray-400 hover:text-primary cursor-pointer">
              (00) 12 345 6789
            </span>
          </div>
          <div className="flex gap-4 justify-between items-center w-full sm:w-auto ">
            <div>
              <button
                className=" flex gap-2 justify-center items-center text-gray-400 hover:text-primary"
                onClick={togglewishListHandler}
              >
                <div className="h-7 w-7 p-1 bg-yellow-600 rounded-full ">
                  <HiOutlineHeart className="h-full w-full  text-white" />
                </div>
                Wishlist ({" "}
                <span className="text-secondary">{wishTotalQuantity}</span> )
              </button>
            </div>
            <div>
              <Link
                className="flex gap-2 justify-center items-center text-gray-400 hover:text-primary cursor-pointer"
                to="/checkout"
              >
                <div className="h-7 w-7 p-1 bg-yellow-600 rounded-full">
                  <HiOutlineLocationMarker className="h-full w-full  text-white" />
                </div>
                Order tracking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecNav