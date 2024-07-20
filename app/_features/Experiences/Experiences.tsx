import HeadTitle from "@/app/_components/HeadTitle";
import Image from "next/image";
import ExperienceContent from "./ExperienceContent";
import { e2p } from "@/app/_utils/replaceNumber";

function Experiences() {
  return (
    <div id="#experiences">
      <HeadTitle
        title="سوابق شغلی من"
        description="تا الان چه کارهایی انجام داده ام..."
      />
      {/* Experinces Hero Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] my-16">
        {/* Image */}
        <div className="relative">
          <Image
            src="/lines-1.webp"
            alt="line svg"
            className="absolute top-0 right-0"
            width={100}
            height={100}
          />

          <Image
            alt="matin sekhavat experiences"
            src="/experiences-image.webp"
            // fill
            width={500}
            height={500}
            className="object-cover mx-auto"
          />
          {/* Line */}
          <Image
            src="/lines-1.webp"
            alt="line svg"
            className="absolute bottom-0 left-0"
            width={100}
            height={100}
          />
        </div>
        {/* Experiences Content  List*/}
        <div className="flex flex-col my-8 md:my-0">
          <ExperienceContent
            year={` از سال ${e2p("1399")} تا الان`}
            title="طراح گرافیک"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
            activity="فعالیت شخصی"
          />{" "}
          <ExperienceContent
            year={` از سال ${e2p("1401")} تا الان`}
            title="مدیر مارکتینگ"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
            activity="آژانس تبلیغات"
          />{" "}
          <ExperienceContent
            year={` از سال ${e2p("1399")} تا الان`}
            title="طراح گرافیک"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
            activity="فعالیت شخصی"
          />{" "}
          <ExperienceContent
            year={` از سال ${e2p("1399")} تا الان`}
            title="طراح گرافیک"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
            activity="فعالیت شخصی"
          />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
