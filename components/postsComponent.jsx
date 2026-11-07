import { Link,Navigate } from "react-router-dom";
import { useState,useEffect } from "react";



function Posts({logout ,onChange,onClick,notification,goHome}){
    const [gotoHome,setGoToHome]=useState(false)
    const navigate = useNavigate();

      let element;

    if (notification.errorMsg) {
        element = (
            <h4 className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {notification.errorMsg}
            </h4>
        );
    }

    if (notification.succesMsg) {
        element = (
            <h4 className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {notification.succesMsg}
            </h4>
        );
    }
if(gotoHome){
    return(
        <Navigate to="/" />
    )
}
    

    return (
        <div className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8">
            {element}

            {/* Header */}
            <header className="mx-auto flex max-w-5xl items-center justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
                        Developer Journal
                    </p>

                    <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Publishing Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Create and share your latest articles.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={logout}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                    Log out
                </button>
            </header>

            {/* Form */}
            <main className="mx-auto mt-10 max-w-5xl">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
                        <h2 className="text-xl font-bold text-slate-900">
                            Create a new post
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Add a title, write your article and upload a cover image.
                        </p>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">

                        {/* Notifications */}
                        {element && (
                            <div>
                                {element}
                            </div>
                        )}

                        {/* Title */}
                        <div>
                            <label
                                htmlFor="post-title"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Article title
                            </label>

                            <input
                                type="text"
                                id="post-title"
                                name="title"
                                onChange={onChange}
                                placeholder="Enter your article title..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="post"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Article content
                            </label>

                            <textarea
                                id="post"
                                name="post"
                                onChange={onChange}
                                rows={12}
                                placeholder="Start writing your article..."
                                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label
                                htmlFor="cover"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Cover photo
                            </label>

                            <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-400">
                                <input
                                    type="file"
                                    id="cover"
                                    name="file"
                                    onChange={onChange}
                                    accept="image/*"
                                    className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-cyan-50 file:px-4 file:py-2.5 file:font-semibold file:text-cyan-700 hover:file:bg-cyan-100"
                                />

                                <p className="mt-3 text-xs text-slate-400">
                                    Upload an image to use as your article cover.
                                </p>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end border-t border-slate-100 pt-6">
                            <button
                                type="button"
                                onClick={()=>{onClick}}
                                className="w-full rounded-xl bg-cyan-700 px-7 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-md sm:w-auto"
                            >
                                Publish Article
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default Posts;
