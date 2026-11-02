import Image from "next/image";

/** Distintivo discreto de autoridade, sobreposto ao canto da fotografia do Bruno. */
export function AuthorityBadge() {
  return (
    <div
      role="note"
      className="absolute left-1/2 -translate-x-1/2 md:left-[-14px] md:translate-x-0 -bottom-5 flex flex-col gap-0.5 w-max max-w-[190px] rounded-[14px] bg-white px-3.5 py-2 text-left shadow-[0_8px_22px_-8px_rgba(0,0,0,0.45)]"
    >
      <Image
        src="/images/icone-distintivo.svg"
        alt=""
        width={22}
        height={22}
        unoptimized
        className="absolute -top-[11px] right-2.5 rounded-[7px] bg-white p-0.5"
      />
      <span className="pr-5 text-[11.5px] font-extrabold uppercase tracking-[0.04em] leading-tight text-[#0F1F3D]">
        Ex-colaborador do Airbnb
      </span>
      <span className="text-[12px] leading-snug text-[#4A566E]">
        Hoje, ao lado dos anfitriões
      </span>
    </div>
  );
}
