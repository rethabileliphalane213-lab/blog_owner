

function HomePage({ posts = [], onClick, options }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

          
            <header className="bg-slate-950 text-white shadow-lg">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                        The Full-Stack <span className="text-cyan-400">Journal</span>
                    </h1>

                    <nav className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                        <a href="/" className="transition hover:text-cyan-400">Home</a>
                        <a href="#articles" className="transition hover:text-cyan-400">Articles</a>
                        <a href="#about" className="transition hover:text-cyan-400">About</a>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            Frontend · Backend · Databases
                        </p>

                        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Ideas, Code, and Everything In Between.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            Exploring web development, sharing knowledge,
                            and documenting the journey of building modern
                            applications.
                        </p>

                        <a
                            href="#articles"
                            className="mt-8 inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                            Explore Articles ?
                        </a>
                    </div>
                </section>

                {/* Articles Section */}
                <section id="articles" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
                    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-700">
                                From the developer's desk
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Latest Articles
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-6 text-slate-500">
                            Tutorials, development insights, and lessons from
                            building real-world applications.
                        </p>
                    </div>

                    {posts.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                            <h3 className="text-xl font-bold text-slate-800">
                                No articles yet
                            </h3>
                            <p className="mt-2 text-slate-500">
                                New articles will appear here when they are published.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((item) => (
                                <article
                                    key={item.id}
                                    className="relative overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {/* Three-dot options */}
                                    <div className="absolute right-3 top-3 z-20">
                                        <button
                                            type="button"
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl font-bold text-slate-700 shadow transition hover:bg-slate-100"
                                            onClick={() => onClick(item.id)}
                                            aria-label={`Options for ${item.title}`}
                                            aria-expanded={options === item.id}
                                        >
                                            ?
                                        </button>

                                        {options === item.id && (
                                            <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                                                <button
                                                    type="button"
                                                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="block w-full px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Article Image */}
                                    <div className="h-52 overflow-hidden rounded-t-2xl bg-slate-200">
                                        {item.imagePath && (
                                            <img
                                                src={`http://localhost:4000${item.imagePath}`}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                            />
                                        )}
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-6">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700">
                                            Developer Journal
                                        </p>

                                        <h3 className="text-xl font-bold leading-snug text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
                                            {item.content}
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-700 transition hover:text-cyan-900"
                                        >
                                            Read More <span>?</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                {/* About Section */}
                <section id="about" className="border-y border-slate-200 bg-white">
                    <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-700">
                            About the Journal
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Learning by building.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
                            A place to share ideas, development experiences,
                            tutorials, and lessons learned while building
                            modern web applications across the frontend,
                            backend, and database layers.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
                <p>
                    © {new Date().getFullYear()} The Full-Stack Journal.
                    Built with curiosity and code.
                </p>
            </footer>

        </div>
    );
}

export default HomePage;