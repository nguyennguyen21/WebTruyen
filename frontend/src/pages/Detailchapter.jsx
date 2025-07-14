import DetailComic from "../modules/components/Detail/Detailcomic";
import DetailChapter from "../modules/components/Detail/Detailchapter";
import ComicsViewRank from "../modules/components/Rank/Rank";

const DetailCM = () => {
  return (
    
    <div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row justify-between gap-8">
    
    {/* Bên trái: DetailComic + DetailChapter */}
    <div className="w-full md:w-3/5">
      <DetailComic />
      <DetailChapter />
    </div>

    {/* Bên phải: ComicsViewRank */}
    <div className="w-full md:w-2/5">
      <ComicsViewRank />
    </div>

  </div>
</div>
   
  );
};

export default DetailCM;