"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  label: string;
};

export const ActiveLink = ({ href, label }: ActiveLinkProps) => {
  const pathname: string = usePathname();
  const isActive: boolean = pathname === href;

  return (
    <Link
      href={{ pathname: href }}
      className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700 ${
        isActive ? "border-blue-500" : "border-transparent"
      }`}
    >
      {label}
    </Link>
  );
};
