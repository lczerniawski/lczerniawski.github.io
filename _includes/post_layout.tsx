export const layout = "main_layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl text-center mt-10 border-b border-gray-600 dark:border-slate-100 pb-10">
        {data.title}
      </h1>
      <article class="prose dark:prose-invert mt-10">
        {data.children}
      </article>
    </>
  );
};
