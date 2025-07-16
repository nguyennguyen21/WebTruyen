import Search from "../modules/components/Search/Search";
import FlexCMCItem from "../modules/components/FlexItem/FlexCMCCart";
import ComicsViewRank from "../modules/components/Rank/Rank";
import SlideImageCM from "../modules/components/Slide/Slide";
const Home = () => {
  return (
    <div className="mt-5 ">
    <>
      <SlideImageCM/>
      <div className=" w-full p-10 lg:px-8 " >
      <div className="flex items-center justify-between w-full p-5 2xl:ml-35  ">
        <div className="flex items-center justify-between w-full 2xl:mr-70 ">
          <h1 className="sm:text-1xl md:text-2xl lg:text-3xl text-[20px] font-bold">Đề cử</h1>
          <div className="ml-auto ">
            <Search  />
          </div>
            </div>
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:flex md:gap-6 2xl:mx-25 ">
          <div className=""><FlexCMCItem /></div>
          <div><ComicsViewRank /></div>
        
          </div>
      </div>
  </>
  </div>
  );
};

export default Home;