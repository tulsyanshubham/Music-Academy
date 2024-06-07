"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem item="Home" active={active} setActive={setActive}>
                    </MenuItem>
                </Link>
                <Link href={"/"}>
                    <MenuItem item="Our Courses" active={active} setActive={setActive}>
                        <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Songwriting</HoveredLink>
                        <HoveredLink href="/courses">music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href={"/contactus"}>
                    <MenuItem item="Contact Us" active={active} setActive={setActive}>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}
