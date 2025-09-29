"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect } from "react";

const Navbar = ({ locale }: { locale: string }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/"); // keep rest of route
        router.push(`/${newLocale}/${path}`);
    };

    // ✅ Update document direction on mount & locale change
    useEffect(() => {
        if (locale === "ar") {
            document.documentElement.dir = "rtl";
        } else {
            document.documentElement.dir = "ltr";
        }
    }, [locale]);

    return (
        <div className="fixed z-[200] inset-y-0 right-0 flex items-center justify-center pr-6">
            <select
                value={locale}
                onChange={handleLanguageChange}
                className="rounded-md bg-white px-4 py-2 bg-transparent border border-gray-300 hover:outline-none focus:outline-none"
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
            </select>
        </div>
    );
};

export default Navbar;
