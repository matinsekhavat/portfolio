import Link from "next/link";

type accessLinkProps = {
  href: string;
  title: string;
}[];
const accessLinkList: accessLinkProps = [
  { href: "#home", title: "صفحه اصلی" },
  { href: "#worksamples", title: "نمونه کارها" },
  { href: "#services", title: "خدمات" },
  { href: "#skills", title: "مهارت ها" },
  { href: "#contact-us", title: "تماس با ما" },
];
type NavListProps = {
  direction: "row" | "col";
};
function NavList({ direction }: NavListProps) {
  return (
    <ul
      className={`${
        direction === "row"
          ? "px-8 py-4 text-primary-900"
          : "flex items-center gap-4"
      }`}
    >
      {accessLinkList.map((item) => {
        return (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavList;
