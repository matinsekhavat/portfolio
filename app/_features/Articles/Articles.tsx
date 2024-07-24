import HeadTitle from "@/app/_components/HeadTitle";
import ArticleItem from "./ArticleItem";
import { articlesData } from "@/app/_lib/data";

interface Article {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

function Articles() {
  return (
    <div id="articles">
      <HeadTitle
        title="مقالات"
        description="تلاش برای داشتن اطلاعات کاربردی، به روز و جامع"
      />
      {/* Articles List Wrapper */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* item */}
        {articlesData.map((article: Article) => {
          const [year, month, day] = article.date.split("/");
          return (
            <ArticleItem
              key={article.href}
              imageSrc={article.imageSrc}
              imageAlt={article.imageAlt}
              category={article.category}
              title={article.title}
              description={article.description}
              year={year}
              month={month}
              day={parseInt(day)}
              href={article.href}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
