import Navbar from "@/components/Navbar";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

export default async function RootLayout({
                                             children,
                                             params: {locale},
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>

            <Navbar locale={locale}/>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
