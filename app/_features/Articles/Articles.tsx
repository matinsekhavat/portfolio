import HeadTitle from "@/app/_components/HeadTitle";
import ArticleCard from "./ArticleItem";

function Articles() {
  return (
    <div id="#articles">
      <HeadTitle
        title="مقالات"
        description="تلاش برای داشتن اطلاعات کاربردی، به روز و جامع"
      />
      {/* Articles List Wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* item */}
        <ArticleCard
          imageSrc="/article-1.jpeg"
          imageAlt="Article Image"
          category="رزومه نویسی"
          title="زمان نوشتن رزومه چه قوانینی را رعایت کنیم؟"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و..."
          year="1403"
          month="فروردین"
          day={14}
          href="/article"
        />
      </div>
    </div>
  );
}

export default Articles;
