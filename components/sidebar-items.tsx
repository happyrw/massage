import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ItemsProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItems = ({
    icon: Icon,
    label,
    href
}: ItemsProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);
    const onClick = () => {
        router.push(href);
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 dark:text-white text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-orange-600",
                isActive && "text-sky-700 bg-sky-700/20 dark:bg-stone-500 hover:bg-sky-400/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500 dark:text-white",
                        isActive && "text-sky-700"
                    )}
                />
                {label}
            </div>
            <div className={cn(
                "ml-auto opacity-0 border-sky-700 h-full transition-all",
                isActive && "opacity-100"
            )} />
        </button>
    );
};

export default SidebarItems;
