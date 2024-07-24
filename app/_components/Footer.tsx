import Image from "next/image";
import Link from "next/link";
type ImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const socialMedias: ImageProps[] = [
  {
    alt: "Telegram Matin-Sekhavat",
    height: 50,
    width: 50,
    src: "/social-medias/telegram-logo.png",
  },
  {
    alt: "instagaram Matin-Sekhavat",
    height: 50,
    width: 50,
    src: "/social-medias/instagram-logo-2.png",
  },
  {
    alt: "Linkedin Matin-Sekhavat",
    height: 50,
    width: 50,
    src: "/social-medias/linkedin-logo.png",
  },
  {
    alt: "github Matin-Sekhavat",
    height: 70,
    width: 65,
    src: "/social-medias/github-logo-1.png",
  },
];
function Footer() {
  return (
    <div className="my-20">
      {/* Wrapper  */}
      <div className=" grid sm:grid-cols-2 h-[268px]">
        <div
          id="col-1 "
          className="p-8 bg-primary-850 py-4 grid sm:grid-cols-[200px_1.5fr] gap-4"
        >
          <div className="" id="accessLink">
            <p className=" mb-4 text-lg ">صفحات کاربردی</p>
            <ul className="space-y-2 text-accent-800">
              <li>صفحه اصلی</li>
              <li>نمونه کار ها</li>
              <li>رزومه من</li>
              <li>من کی هستم؟</li>
            </ul>
          </div>
          <div>
            {/* Footer desc */}
            <p className="text-sm sm:text-base text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            {/* Social Medias */}
            <div className="flex items-center my-2">
              {socialMedias.map((item) => (
                <Link href="/" key={item.alt}>
                  <Image
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    src={item.src}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div id="col-2" className="bg-accent-900"></div>
      </div>
    </div>
  );
}

export default Footer;
