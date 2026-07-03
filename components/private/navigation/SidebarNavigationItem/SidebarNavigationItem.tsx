"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavigationItem as SidebarNavigationItemType } from "@/types/sidebar-navigation.type";

interface SidebarNavigationItemProps {
  readonly item: SidebarNavigationItemType;
}

export default function SidebarNavigationItem({
  item,
}: SidebarNavigationItemProps) {
  const pathname = usePathname();

  const Icon = item.icon;

  const isActive = pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className={[
        "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
        isActive
          ? "bg-blue-600 text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white",
      ].join(" ")}
    >
      <Icon size={20} />

      <span>{item.label}</span>
    </Link>
  );
}