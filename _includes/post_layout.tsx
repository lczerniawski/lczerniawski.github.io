export const layout = "main_layout.tsx";

export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  return (
    <>
      <time class="text-gray-500 dark:text-slate-200 mt-5 block text-right w-screen sm:w-full pr-3 lg:pr-0">
          {data.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
          })}
      </time>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100 mt-5 text-center border-b border-gray-600 dark:border-slate-100 pb-10 mr-5 ml-5 lg:mr-0 lg:ml-0">
        {data.articleTitle}
      </h1>
      <article class="prose dark:prose-invert md:mx-auto mt-10 ml-10 mr-10">
        {data.children}
      </article>
      <div class="flex flex-col items-end justify-end w-screen sm:w-full pr-6 lg:pr-0">
        <span id="visits" class="font-bold text-gray-900 dark:text-slate-100 mr-1">0</span>
        <div class="text-sm text-gray-600 dark:text-slate-400">Visits</div>
      </div>
      <p className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100 border-t border-gray-600 dark:border-slate-100 pt-2 pb-5 mr-6 ml-6 lg:mr-0 lg:ml-0">
        If you enjoyed this post, please share it with your friends!
      </p>
      <div class="flex items-center justify-center gap-6 mb-5">
        <a
          id="linkedin-share"
          class="text-gray-900 dark:text-slate-100 hover:text-orange-600"
          aria-label="Share on LinkedIn"
          href='#'
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-8"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            >
            </path>
          </svg>
        </a>
        <a
          id="twitter-share"
          class="text-gray-900 dark:text-slate-100 hover:text-orange-600"
          aria-label="Share on Twitter"
          href="#"
          target="_blank"
        >
          <svg
            class="h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            >
            </path>
          </svg>
        </a>
      </div>
      <div id="utterances-container"></div>
      <script>
        {`
          function loadUtterances(theme) {
            const script = document.createElement('script');
            script.src = 'https://utteranc.es/client.js';
            script.setAttribute('repo', 'lczerniawski/lczerniawski.github.io');
            script.setAttribute('issue-term', 'pathname');
            script.setAttribute('theme', theme);
            script.crossOrigin = 'anonymous';
            script.async = true;
            const container = document.getElementById('utterances-container');
            container.innerHTML = ''; // Clear previous utterances
            container.appendChild(script);
          }

          document.addEventListener('DOMContentLoaded', function() {
            const currentUrl = window.location.href;
          
            fetch(\`https://api.counterapi.dev/v1/${data.basename}lczerniawski/visits/up\`)
              .then(response => response.json())
              .then(data => {
                document.getElementById('visits').innerText = data.count;
              })
              .catch(error => console.error('Error fetching visit count:', error));

            const linkedinShareLink = document.getElementById('linkedin-share');
            linkedinShareLink.href = \`https://www.linkedin.com/sharing/share-offsite/?url=\${currentUrl}\`;

            const twitterShareLink = document.getElementById('twitter-share');
            twitterShareLink.href = \`https://twitter.com/intent/tweet?url=\${currentUrl}\`;

            const theme = localStorage.getItem('theme') === 'dark' ? 'github-dark' : 'github-light';
            loadUtterances(theme);

            window.addEventListener('changeTheme', function(event) {
              const theme = localStorage.getItem('theme') === 'dark' ? 'github-dark' : 'github-light';
              loadUtterances(theme);
            });
          });
        `}
      </script>
    </>
  );
};
