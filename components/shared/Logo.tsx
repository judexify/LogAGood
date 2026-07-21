import Image from "next/image";

function Logo() {
  return (
    <div className="flex gap-2 items-center justify-center mb-8">
      <Image
        src="/logo.png"
        width={48}
        height={48}
        alt="LogAGood's Brand Logo"
        className="rounded-sm"
      />
      <div className="flex flex-col">
        <span className="text-brand-neutral font-semibold">LogAGood</span>
        <span className="text-brand-lighter-primary text-[10px] font-medium tracking-widest uppercase">
          Good Deliveries, Delivered
        </span>
      </div>
    </div>
  );
}

export default Logo;
