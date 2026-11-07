import { useLocation, Link } from "react-router-dom";

function FullArticle() {
    const location = useLocation();

    const article = location.state?.article;

    if (!article) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-slate-900">
                        Article not found
                    </h1>

                    <Link
                        to="/"
                        className="mt-6 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

            {/* Header */}
            <header className="bg-slate-950 px-6 py-5 text-white shadow-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <h1 className="text-xl font-bold">
                        The Full-Stack <span className="text-cyan-400">Journal</span>
                    </h1>

                    <Link
                        to="/"
                        className="font-medium text-slate-300 transition hover:text-cyan-400"
                    >
                        ← Back to Journal
                    </Link>
                </div>
            </header>

            {/* Article */}
            <main className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-12">

                {/* Article Header */}
                <div className="mb-10">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-700">
                        Developer Journal
                    </p>

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        {article.title}
                    </h1>
                </div>

                {/* Image */}
                {article.image && (
                    <div className="mb-12 overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="h-auto max-h-[600px] w-full object-cover"
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:p-12">
                    <p className="whitespace-pre-wrap text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
                        {article.post}
                    </p>
                </article>

                {/* Bottom Back Button */}
                <div className="mt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
                    >
                        ← Back to Articles
                    </Link>
                </div>

            </main>
        </div>
    );
}

export default FullArticle;