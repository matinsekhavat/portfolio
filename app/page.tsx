import { BadgeCheck, Cat, Command } from "lucide-react";
import ButtonBadge from "./_components/ButtonBadge";
import HeroBadge from "./_components/Hero/HeroBadge";
import Image from "next/image";

function page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid">
        <div className="grid my-10 md:grid-cols-[1.2fr_1fr]">
          {/* intro section */}
          <div className="relative">
            <div className="text-center space-y-8 hero-linear md:text-right">
              <h3 className="text-4xl font-semibold">من متین هستم</h3>
              <p className="text-3xl text-accent-200 font-semibold relative">
                برنامه نویس + <br />
                طراح رابط کاربری و تجربه کاربری
              </p>
              <p className="text-lg text-justify sm:text-center md:text-right">
                فردی پرشور و مشتاق به تعامل با افراد مختلف هستم. بیش از ۸ سال
                سابقه فعالیت در زمینه دیجیتال مارکتینگ و همچنین بخش خدمات
                مشتریان در صنعت خرده‌فروشی آنلاین و زیرساخت‌های اینترنتی را
                دارم.
              </p>
            </div>
            <div className="flex items-center gap-2 my-8 flex-wrap justify-center md:justify-start ">
              <ButtonBadge>
                <span className="text-lg">دانلود پورتفولیو</span>
              </ButtonBadge>
              <div
                className="flex items-center gap-2
              
              "
              >
                <HeroBadge>
                  <BadgeCheck size={30} />
                </HeroBadge>
                <HeroBadge>
                  <Cat size={30} />
                </HeroBadge>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="relative">
            <Image
              src="/hero-image.webp"
              fill
              alt="header-image"
              className="object-cover size-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
