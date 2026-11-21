import Posts from "./postsComponent"
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiseLoader } from "react-spinners";

import FullArticle from "./fullArticle";

function HomePage({ posts = [], onClick, options, deleteReq, notification, updatepost, logout, backendUrl, token, setErrorOrSucces, }) {
    const navigate = useNavigate();
    const [editingPost, setEditingPost] = useState(null);
      const [getComments,setGetComments]=useState([])
      const [loading,setLoading]=useState(false)

    const [editForm, setEditForm] = useState({
        title: "",
        content: "",
        file: null
    });

   let element

if (notification.errorMsg) {
    element = (
        <h4 className="fixed top-0 left-0 z-[100] w-full border-b border-red-200 bg-red-50 px-6 py-4 text-center text-sm font-semibold text-red-700 shadow-lg">
            {notification.errorMsg}
        </h4>
    )
}

if (notification.succesMsg) {
    element = (
        <h4 className="fixed top-0 left-0 z-[100] w-full border-b border-emerald-200 bg-emerald-50 px-6 py-4 text-center text-sm font-semibold text-emerald-700 shadow-lg">
            {notification.succesMsg}
        </h4>
    )
}
const loadingStyle = 
    <RiseLoader
        color="#22d3ee"
        loading={loading}
        size={8}
        aria-label="Loading Spinner"
    />
    async function getFullArticle(title, post, image,postId) {
        setLoading(true)
         try {
            const response = await fetch(
                `${backendUrl}/post/comments/${postId}`,
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
             
                }
            );

            const data = await response.json();

            if (!response.ok || data.error) {
                setErrorOrSucces({
                    errorMsg: data.error || "Failed to fetch comments. Please try again.",
                    succesMsg: ""
                });
                return;
            }

            // Store the retrieved posts in state
            setGetComments(data.comments)
            console.log('hereare the comments fetched',data.comments)
              navigate("/full-article", {
    state: {
        article: {
            id: postId,
            title,
            post,
            image,
            getComments: data.comments
        }
    }
});

        } catch (e) {
            console.error("failed to load page comments. check.....",e);

            setErrorOrSucces({
                errorMsg: "Unable to connect to the server",
                succesMsg: ""
            });
        }finally {
        setLoading(false);
    }
    }

    function startEditing(post) {
        setEditingPost(post);
        setEditForm({
            title: post.title || "",
            content: post.content || "",
            file: null
        });
    }

    function handleEditChange(e) {
        const { name, value, files } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: name === "file" ? files[0] : value
        }));
    }

    async function handleEditSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", editForm.title);
        formData.append("post", editForm.content);
        if (editForm.file) formData.append("file", editForm.file);
        const success = await updatepost(editingPost.id, formData);
        if (success) setEditingPost(null);
    }

    return (
        <div className="min-h-screen w-full bg-slate-50 text-slate-800">
            {element}

            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950 text-white shadow-lg">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                        The Full-Stack <span className="text-cyan-400">Journal</span>
                    </h1>

                    <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-300">
                        <a href="/" className="transition hover:text-cyan-400">Home</a>
                        <a href="#articles" className="transition hover:text-cyan-400">Articles</a>
                        <a href="#about" className="transition hover:text-cyan-400">About</a>

                        <Link
                            to="/addPost"
                            className="rounded-lg bg-cyan-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                            {loading?loadingStyle:"Add Post"}
                        </Link>

                        <button
                            type="button"
                            onClick={logout}
                            className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-red-400 hover:text-red-400"
                        >
                            Log out
                        </button>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

                    <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
                        <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            Frontend · Backend · Databases
                        </p>

                        <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                            Ideas, Code, and Everything In Between.
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            Exploring web development, sharing knowledge,
                            and documenting the journey of building modern
                            applications.
                        </p>

                        <a
                            href="#articles"
                            className="mt-9 inline-flex items-center rounded-lg bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-cyan-300"
                        >
                            Explore Articles <span className="ml-2">→</span>
                        </a>
                    </div>
                </section>

                {/* Articles */}
                <section
                    id="articles"
                    className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24"
                >
                    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-700">
                                From the developer's desk
                            </p>

                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Latest Articles
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500">
                            Tutorials, development insights, and lessons from
                            building real-world applications.
                        </p>
                    </div>

                    {posts.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800">
                                No articles yet
                            </h3>

                            <p className="mt-3 text-slate-500">
                                New articles will appear here when they are published.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((item) => (
                                <article
                                    key={item.id}
                                    className="relative flex h-full flex-col overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Three-dot options */}
                                    <div className="absolute right-4 top-4 z-20">
                                        <button
                                            type="button"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-2xl font-bold text-slate-700 shadow-md transition hover:bg-slate-100 hover:text-cyan-700"
                                            onClick={() => onClick(item.id)}
                                            aria-label={`Options for ${item.title}`}
                                            aria-expanded={options === item.id}
                                        >
                                            ⋮
                                        </button>

                                        {options === item.id && (
                                            <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                                                <button
                                                    onClick={() => startEditing(item)}
                                                    type="button"
                                                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => deleteReq(item.id)}
                                                    className="block w-full px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Article image */}
                                    <div className="h-64 w-full overflow-hidden rounded-t-2xl bg-slate-200">
                                        {item.imagePath && (
                                            <img
                                                src={item.imagePath}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                            />
                                        )}
                                    </div>

                                    {/* Article content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700">
                                            Developer Journal
                                        </p>

                                        <h3 className="text-xl font-bold leading-snug text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">
                                            {item.content}
                                        </p>

                                        <div className="mt-auto pt-6">
                                            <button
                                                onClick={() => getFullArticle(item.title, item.content, item.imagePath,item.id)}
                                                type="button"
                                                className="inline-flex items-center gap-2 font-bold text-cyan-700 transition hover:gap-3 hover:text-cyan-900"
                                            >
                                               {loading?loadingStyle:`Read More`}
                                            </button>
                                        </div>
                                    </div>

                                    
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Edit Post Modal */}
                    {editingPost && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm">
                            <form
                                onSubmit={handleEditSubmit}
                                className="my-8 w-full max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
                            >
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                                        Manage Article
                                    </p>

                                    <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                                        Edit Post
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-500">
                                        Update your article details below.
                                    </p>
                                </div>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                        Title
                                    </span>

                                    <input
                                        name="title"
                                        value={editForm.title}
                                        onChange={handleEditChange}
                                        required
                                        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                        Content
                                    </span>

                                    <textarea
                                        name="content"
                                        value={editForm.content}
                                        onChange={handleEditChange}
                                        required
                                        rows={6}
                                        className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 p-3 text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                        Replace image (optional)
                                    </span>

                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        onChange={handleEditChange}
                                        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-cyan-100 file:px-4 file:py-2 file:font-semibold file:text-cyan-800 hover:file:bg-cyan-200"
                                    />
                                </label>

                                <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                                    <button
                                        type="button"
                                        onClick={() => setEditingPost(null)}
                                        className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-cyan-700"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </section>

                {/* About */}
                <section
                    id="about"
                    className="border-y border-slate-200 bg-white"
                >
                    <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-700">
                            About the Journal
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Learning by building.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
                            A place to share ideas, development experiences,
                            tutorials, and lessons learned while building
                            modern web applications across the frontend,
                            backend, and database layers.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
                <p>
                    © {new Date().getFullYear()} The Full-Stack Journal.
                    Built with curiosity and code.
                </p>
            </footer>
        </div>
    );
}

export default HomePage;
