import HeadTitle from "@/app/_components/HeadTitle";
import { e2p } from "@/app/_utils/replaceNumber";
import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";

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
        <div className="p-3 rounded-xl bg-primary-850 ">
          {/* Upperside */}
          <div className="relative w-full h-72">
            <Image
              alt=""
              fill
              src="/article-1.jpeg"
              className=" object-cover rounded-xl overflow-hidden"
            />
            {/* absolute div */}
            <div className="p-2 backdrop-blur-sm absolute top-2 right-2 rounded-full">
              رزومه نویسی
            </div>
          </div>
          {/* downer side */}
          <div className="flex flex-col gap-4  mt-4">
            <h3 className="text-base sm:text-xl font-bold">
              زمان نوشتن رزومه چه قوانینی را رعایت کنیم؟
            </h3>
            <p className="line-clamp-2 text-sm sm:text-base sm:line-clamp-3 font-light text-accent-200 my-2 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm sm:text-base">
                <Calendar />
                <p>
                  فروردین {e2p(14)}, {e2p(1403)}{" "}
                </p>
              </div>
              <span>
                <ArrowLeft size={25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
