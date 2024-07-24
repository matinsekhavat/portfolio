import Image from "next/image";

interface CertificateItemProps {
  logoSrc: string;

  logoAlt: string;
  title: string;
  description: string;
}

function CertificateItem({
  logoSrc,

  logoAlt,
  title,
  description,
}: CertificateItemProps) {
  return (
    <div className="flex flex-col xs:flex-row items-center gap-3 border border-stone-700 rounded-xl  p-4 hover:border-accent-800 transition-all cursor-help ">
      <div>
        <Image src={logoSrc} width={50} height={50} alt={logoAlt} />
      </div>
      <div className="flex-1 flex flex-col gap-4 text-center xs:text-start">
        <h1 className="text-base xs:text-lg font-bold text-white">{title}</h1>
        <p className="text-sm xs:text-base text-stone-500 font-semibold ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CertificateItem;
