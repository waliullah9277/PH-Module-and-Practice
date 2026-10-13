'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const UserDetails = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user)

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("Sign Out Failed!");
            return;
        }

        toast.success("Sign Out Successfully!");

        setTimeout(() => {
            redirect("/signin");
        }, 1000);
    };


    return (

        <div className="ml-auto">
            {user ? (
                <div className="flex items-center gap-3">
                    {/* User Profile */}
                    <Link href={"/profile"}>
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-300">
                                    <img
                                        src={user?.image as string}
                                        alt={user?.name || "User"}
                                    />
                                </div>
                            </div>

                            <span className="max-w-32 truncate text-sm font-medium">
                                {user?.name}
                            </span>
                        </div>
                    </Link>

                    {/* Sign Out Button */}
                    <button
                        onClick={handleSignOut}
                        className="btn btn-sm h-8 min-h-0 border-none bg-red-600 px-4 text-white shadow-sm transition-all duration-300 hover:bg-red-800"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link href="/signin">
                        <button className="btn btn-sm h-8 min-h-0 border border-gray-300 bg-white px-4 text-gray-700 shadow-none transition-all duration-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600">
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="btn btn-sm h-8 min-h-0 border-none bg-red-600 px-4 text-white shadow-sm transition-all duration-300 hover:bg-red-800">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>

    );
};

export default UserDetails;