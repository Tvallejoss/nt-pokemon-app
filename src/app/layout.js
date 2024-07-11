import { Ruda } from "next/font/google";
import "./globals.css";

const ruda = Ruda({ subsets: ["latin"] });

export const metadata = {
    title: "Pokemon",
    description: "Pokemon App | Novatech ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>

            <body className={ruda.className}>{children}</body>
        </html>
    );
}
