import FlipCountdown from "@rumess/react-flip-countdown";

const targetDate = new Date(
  new Date().getTime() + 2 * 24 * 60 * 60 * 1000
).toISOString();

const Sale = () => {
  return (
    <div className="flex items-center justify-center w-full my-5 h-[18rem] md:h-[20.7rem] container-fixed">
      <div className="h-[80%] mt-auto gradient-sec w-full relative rounded-2xl flex justify-center items-center">
        <div className="absolute flex items-center justify-between w-[80%] sm:w-[75%] md:w-1/2 h-[50px] -translate-x-1/2 left-1/2 -top-[25px]">
          <div className="absolute h-[105%] full w-[75%] sm:w-[83%] md:w-[83%] lg:w-[88%] -top-4 left-1/2  -translate-x-1/2 gradient-sec cp-both z-20 flex justify-center items-center ">
            <div className="flex items-center justify-center gap-2 cp-child gradient-main cp-both">
              <h2 className="text-2xl text-white f">Sale !</h2>
              <span className="text-green-400 ">20% OFF</span>
            </div>
          </div>
          <div className="w-[75px] h-[50px] gradient-sec cp-l overflow-hidden flex justify-center items-center">
            <div className="w-[75px] h-[46px] gradient-main cp-l ml-[4px]"></div>
          </div>
          <div className="w-[75px] h-[50px] gradient-sec cp-r overflow-hidden flex justify-center items-center">
            <div className="w-[75px] h-[46px] gradient-main cp-r mr-[4px]"></div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 rounded-2xl gradient-third sale-p1">
          <div className="flex flex-col justify-between p-2 bg-gray-100 rounded-2xl sale-p2">
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-full gradient-main">
                <div className=" w-full h-[2px] bg-white transform skew-y-[45deg] "></div>
              </div>
              <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-full gradient-main">
                <div className=" w-full h-[2px] bg-white transform skew-y-[45deg] "></div>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold text-center text-gray-600 md:pb-3">
                End in ⏳
              </h3>
              <FlipCountdown
                size="medium"
                hideYear
                hideMonth
                endAt={targetDate}
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-full gradient-main">
                <div className=" w-full h-[2px] bg-white transform skew-y-[45deg] "></div>
              </div>
              <div className="flex items-center justify-center w-4 h-4 overflow-hidden rounded-full gradient-main">
                <div className=" w-full h-[2px] bg-white transform skew-y-[45deg] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
