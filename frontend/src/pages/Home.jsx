import Search from "../modules/components/Search/Search";
import FlexCMCItem from "../modules/components/FlexItem/FlexCMCCart";
import ComicsViewRank from "../modules/components/Rank/Rank";
import SlideImageCM from "../modules/components/Slide/Slide";
const Home = () => {
  return (
    <>
      <SlideImageCM/>
      <div className=" w-full p-10 " >
      <div className="flex items-center justify-between w-full p-5  ">
        <div className="flex items-center justify-between w-full ">
          <h1 className="sm:text-1xl md:text-2xl lg:text-3xl text-[20px]   font-bold">Đề cử</h1>
          <div className="ml-auto ">
            <Search  />
          </div>
            </div>
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:flex md:gap-6">
        <FlexCMCItem />
        <ComicsViewRank />
          </div>
      </div>
  </>
  );
};

export default Home;