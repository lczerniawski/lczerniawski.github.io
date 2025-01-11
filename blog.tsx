export const title = "Łukasz's Corner - Blog";
export const layout = "main_layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
    const posts = data.search.pages("type=post", "date=desc");
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl text-center mt-10">
                Blog
            </h1>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 dark:border-slate-100 pt-10 p-3 mt-3 sm:mt-10 sm:pt-10 lg:pr-10 lg:pl-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <img
                            class="mx-auto rounded-md w-80 h-80 mb-8 dark:hidden"
                            src={post.imageLightSrc}
                        >
                        </img>
                        <img
                            class="mx-auto rounded-md w-80 h-80 mb-8 hidden dark:block"
                            src={post.imageDarkSrc}
                        >
                        </img>
                        <div class="flex items-center gap-x-4 text-xs">
                            <time class="text-gray-500 dark:text-slate-200">
                                {post.date.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                            {post.tags.map((tag) => (
                                <span class="relative z-10 rounded-full bg-gray-50 dark:bg-slate-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-slate-100 group-hover:text-gray-600 dark:group-hover:text-slate-400">
                                <a href={post.url}>
                                    <span class="absolute inset-0"></span>
                                    {post.title}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-100">
                                {post.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};
