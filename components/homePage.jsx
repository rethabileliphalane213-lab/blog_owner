
function HomePage({ posts,onClick,options}) {
    return (
        <div className="homepage">

            {/* Header */}
            <header className="home-header">
                <h1>The Full-Stack Journal</h1>

                <nav>
                    <a href="/">Home</a>
                    <a href="#articles">Articles</a>
                    <a href="#about">About</a>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="home-hero">
                    <h2>Ideas, Code, and Everything In Between</h2>
                    <p>
                        Exploring web development, sharing knowledge,
                        and documenting the journey.
                    </p>
                </section>

                {/* Articles Section */}
                <section id="articles" className="articles-section">
                    <h2>Latest Articles</h2>

                    <div className="articles-grid">
                        {posts.map((item) => (
                            <article key={item.id} className="article-card">
                                <div className="article-options">
                                    <button className="options-btn" onClick={onClick(item.id)}>:</button>
                                </div>
                                {options ===item.id &&(
                                    <div className="options-menu">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                )}
                                <div className="article-image">
                          <img
  src={item.imagePath
}
  alt={item.title}
/>
                                </div>

                                <div className="article-content">
                                    <h3>{item.title}!</h3>
                                    <p>{item.content}</p>

                                    <button>Read More</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="home-about">
                    <h2>About the Journal</h2>
                    <p>
                        A place to share ideas, development experiences,
                        tutorials, and lessons learned while building
                        modern web applications.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="home-footer">
                <p>
                    &copy; {new Date().getFullYear()} The Full-Stack Journal
                </p>
            </footer>

        </div>
    );
}

export default HomePage;