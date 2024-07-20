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
    <div className="flex items-center gap-3 border border-stone-700 rounded-xl p-4 overflow-hidden">
      <div>
        <Image src={logoSrc} width={50} height={50} alt={logoAlt} />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-lg font-bold text-white">{title}</h1>
        <p className="text-stone-500 font-semibold text-sm">{description}</p>
      </div>
    </div>
  );
}

export default CertificateItem;
