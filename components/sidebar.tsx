"use client";

import { FolderGit2, GraduationCap, HandPlatter, House, Key, UserRoundCog, Users, UserSearch } from "lucide-react";
import SidebarItems from "./sidebar-items";

const webRoutes = [
    {
        icon: House,
        label: "Home",
        href: "/"
    },
    {
        icon: UserSearch,
        label: "About me",
        href: "/about-me"
    },
    {
        icon: FolderGit2,
        label: "Projects",
        href: "/projects"
    },
    {
        icon: UserRoundCog,
        label: "Experience",
        href: "/experience"
    },
    {
        icon: GraduationCap,
        label: "Education",
        href: "/education"
    },
    {
        icon: Users,
        label: "Testimonials",
        href: "/testimonials"
    },
    {
        icon: HandPlatter,
        label: "Services",
        href: "/services"
    },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col w-full pt-4">
            {webRoutes.map((webRoute) => (
                <SidebarItems
                    key={webRoute.href}
                    icon={webRoute.icon}
                    label={webRoute.label}
                    href={webRoute.href}
                />
            ))}
        </div>
    );
};

export default Sidebar;
