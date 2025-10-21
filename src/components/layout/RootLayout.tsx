import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
            {/* footer */}
        </div>
    )
}
