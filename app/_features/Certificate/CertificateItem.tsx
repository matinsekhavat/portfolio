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
    <div className="flex items-center gap-2 border border-accent-200 rounded-3xl p-4 overflow-hidden">
      <div className="w-20">
        <Image src={logoSrc} width={60} height={60} alt={logoAlt} />
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className="text-lg font-bold text-white">{title}</h1>
        <p className="text-accent-800 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default CertificateItem;
