"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string };

        // console.log(user);

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })

        if (data) {
            // console.log("Sign Up Successfully", data);
            toast.success("Sign Up Successfully!")
            redirect('/');

        } else {
            // console.log("Sign Up Failed, please try again", error)
            toast.error(error?.message ?? 'Sign in failed. Please try again.')
        }

    }

    const handleGoogleAccount = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGithubAccount = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-10">
            <fieldset className="fieldset w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">
                <div className="mb-5 text-center">
                    <h1 className="text-2xl font-bold">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </h1>
                    <p className="mt-2 text-sm text-base-content/60">
                        ইমেইল ও পাসওয়ার্ড দিয়ে সাইন ইন করুন
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="label mb-1">
                            <span className="label-text font-medium">
                                ইমেইল ঠিকানা
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="আপনার ইমেইল লিখুন"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label mb-1">
                            <span className="label-text font-medium">
                                পাসওয়ার্ড
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="আপনার পাসওয়ার্ড লিখুন"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <a
                            href="/forgot-password"
                            className="link link-primary text-sm"
                        >
                            পাসওয়ার্ড ভুলে গেছেন?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="btn mt-2 w-full bg-red-600 text-white hover:bg-red-700"
                    >
                        সাইন ইন করুন
                    </button>
                </form>


                {/* Social Login Divider */}
                <div className="relative my-5 flex items-center">
                    <div className="flex-grow border-t border-base-300"></div>
                    <span className="px-4 text-xs font-medium uppercase tracking-widest text-base-content/50">
                        Or continue with
                    </span>
                    <div className="flex-grow border-t border-base-300"></div>
                </div>

                {/* Google Sign In */}
                <button
                    type="button"
                    onClick={handleGoogleAccount}
                    className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-base-300 bg-base-100 px-4 text-sm font-semibold text-base-content shadow-sm transition-all cursor-pointer duration-300 hover:border-gray-400 hover:bg-base-200 active:scale-[0.98]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5 shrink-0"
                        aria-hidden="true"
                    >
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.05 13.22l7.98 6.19C12.93 13.72 18.01 9.5 24 9.5Z"
                            transform="translate(0 4)"
                        />
                        <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 37.98 46.98 31.91 46.98 24.55Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
                            transform="translate(1 0)"
                        />
                        <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.43-4.89 2.27-8.18 2.27-5.99 0-11.07-4.22-12.89-9.91l-7.98 6.19C6.58 42.62 14.62 48 24 48Z"
                        />
                    </svg>

                    <span>Continue with Google</span>
                </button>

                {/* GitHub Sign In - UI Only */}
                <button
                    onClick={handleGithubAccount}
                    type="button"
                    className="mt-3 flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-base-300 bg-base-100 px-4 text-sm font-semibold text-base-content shadow-sm transition-all cursor-pointer duration-300 hover:border-gray-400 hover:bg-base-200 active:scale-[0.98]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 shrink-0"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.75 2.02 3.02 1.53.1-.73.4-1.23.72-1.55-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.15 5.55.41.36.77 1.04.77 2.1v3.14c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
                        />
                    </svg>

                    <span>Continue with GitHub</span>
                </button>


                <p className="mt-5 text-center text-sm text-base-content/70">
                    আপনার কি অ্যাকাউন্ট নেই?
                    <a
                        href="/signup"
                        className="link link-primary ml-1 font-semibold"
                    >
                        সাইন আপ করুন
                    </a>
                </p>
            </fieldset>
        </div>

    );
};

export default SignInPage;