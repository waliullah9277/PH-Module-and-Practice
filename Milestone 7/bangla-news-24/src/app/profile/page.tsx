"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [show, setShow] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const handleShowForm = () => {
        setName(user?.name ?? "");
        setImage(user?.image ?? "");
        setShow(!show);
    };

    const handleUpdateProfile = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setIsUpdating(true);

        try {
            const { error } = await authClient.updateUser({
                name: name.trim(),
                image: image.trim() || undefined,
            });

            if (error) {
                toast.error("প্রোফাইল আপডেট করা যায়নি!");
                return;
            }

            toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
            setShow(false);
        } catch {
            toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setIsUpdating(false);
        }
    };

    if (isPending) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary" />
            </div>
        );
    }

    const avatarLetter =
        user?.name?.trim().charAt(0).toUpperCase() || "U";

    return (
        <main className="min-h-screen bg-base-200 px-4 py-10 sm:py-14">
            <div className="mx-auto max-w-3xl">

                {/* পেজের শিরোনাম */}
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                        অ্যাকাউন্ট সেটিংস
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-2 text-sm text-base-content/60 sm:text-base">
                        আপনার ব্যক্তিগত তথ্য ও প্রোফাইল পরিচালনা করুন।
                    </p>
                </div>

                {/* প্রোফাইল কার্ড */}
                <section className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">

                    {/* Gradient background */}
                    <div className="h-32 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 sm:h-40" />

                    <div className="px-5 pb-7 sm:px-8">

                        {/* প্রোফাইল ছবি, নাম ও বাটন */}
                        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

                            <div className="flex items-end gap-4">
                                <div className="avatar">
                                    <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-base-100 bg-base-300 text-3xl font-bold shadow-md sm:h-28 sm:w-28">
                                        {user?.image ? (
                                            <img
                                                src={user.image}
                                                alt={user.name || "ব্যবহারকারী"}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span>{avatarLetter}</span>
                                        )}
                                    </div>
                                </div>

                                {/* শুধু নামের অংশ নিচে থাকবে */}
                                <div className="min-w-0 pb-1 translate-y-5">
                                    <h2 className="max-w-full truncate text-2xl font-bold sm:text-3xl">
                                        {user?.name || "ব্যবহারকারী"}
                                    </h2>

                                    <p className="mt-2 text-sm text-base-content/60">
                                        প্রোফাইলের তথ্য
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleShowForm}
                                className="btn w-full border-base-300 bg-base-100 hover:bg-base-200 sm:w-auto"
                            >
                                {show ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="h-4 w-4"
                                        >
                                            <path d="m18 6-12 12M6 6l12 12" />
                                        </svg>
                                        বাতিল করুন
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="h-4 w-4"
                                        >
                                            <path d="M12 20h9" />
                                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
                                        </svg>
                                        প্রোফাইল সম্পাদনা
                                    </>
                                )}
                            </button>
                        </div>

                        {/* ব্যবহারকারীর তথ্য */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            {/* নাম */}
                            <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4">
                                <div className="flex items-center gap-2 text-sm text-base-content/60">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-5 w-5"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                                    </svg>
                                    পূর্ণ নাম
                                </div>

                                <p className="mt-2 break-words font-semibold">
                                    {user?.name || "নাম দেওয়া হয়নি"}
                                </p>
                            </div>

                            {/* ইমেইল */}
                            <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4">
                                <div className="flex items-center gap-2 text-sm text-base-content/60">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-5 w-5"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>
                                    ইমেইল ঠিকানা
                                </div>

                                <p className="mt-2 break-all font-semibold">
                                    {user?.email}
                                </p>

                                <p className="mt-2 text-xs text-base-content/50">
                                    আপনার নিবন্ধিত ইমেইল ঠিকানা
                                </p>
                            </div>
                        </div>

                        {/* Edit Profile Form */}
                        {show && (
                            <form
                                onSubmit={handleUpdateProfile}
                                className="mt-8 space-y-5 rounded-2xl border border-base-300 p-5 sm:p-6"
                            >
                                <div>
                                    <h3 className="text-lg font-bold">
                                        প্রোফাইল সম্পাদনা করুন
                                    </h3>

                                    <p className="mt-1 text-sm text-base-content/60">
                                        আপনার নাম ও প্রোফাইল ছবির লিংক পরিবর্তন করুন।
                                    </p>
                                </div>

                                {/* নাম */}
                                <div>
                                    <label
                                        htmlFor="profile-name"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        পূর্ণ নাম
                                    </label>

                                    <input
                                        id="profile-name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="আপনার পূর্ণ নাম লিখুন"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Image URL — proxy পরে implement করা হবে */}
                                <div>
                                    <label
                                        htmlFor="profile-image"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        প্রোফাইল ছবির লিংক
                                    </label>

                                    <input
                                        id="profile-image"
                                        type="url"
                                        name="image"
                                        value={image}
                                        onChange={(e) =>
                                            setImage(e.target.value)
                                        }
                                        placeholder="https://example.com/image.jpg"
                                        className="input input-bordered w-full"
                                    />

                                    <p className="mt-2 text-xs text-base-content/50">
                                        ছবির লিংক এখানে দিন।
                                    </p>
                                </div>

                                {/* Image Preview */}
                                {image.trim() && (
                                    <div className="flex items-center gap-3 rounded-xl bg-base-200 p-3">
                                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-base-300">
                                            <img
                                                src={image}
                                                alt="প্রোফাইল ছবির নমুনা"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold">
                                                ছবির নমুনা
                                            </p>

                                            <p className="break-all text-xs text-base-content/50">
                                                প্রোফাইল ছবির প্রিভিউ
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={handleShowForm}
                                        disabled={isUpdating}
                                        className="btn btn-ghost"
                                    >
                                        বাতিল করুন
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className="btn border-0 bg-red-600 text-white hover:bg-red-700"
                                    >
                                        {isUpdating ? (
                                            <>
                                                <span className="loading loading-spinner loading-sm" />
                                                আপডেট হচ্ছে...
                                            </>
                                        ) : (
                                            "পরিবর্তন সংরক্ষণ করুন"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </section>

                <p className="mt-5 text-center text-xs text-base-content/50">
                    আপনার অ্যাকাউন্টের তথ্য হালনাগাদ রাখুন।
                </p>
            </div>
        </main>
    );
};

export default ProfilePage;
