export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  return (
    <html class="h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script src="/scripts.js"></script>
        <title>{data.title}</title>
      </head>
      <body class="h-full flex flex-col items-center font-sans dark:bg-gray-900">
        <header class="bg-white dark:bg-gray-800 shadow-md p-4 lg:w-2/6 rounded-md">
          <nav class="flex justify-center items-center">
            <ul class="flex justify-around items-center space-x-4 w-full">
              {["/", "/blog/", "/about-me/", "/contact/"].map((href) => (
                <li>
                  <a
                    key={href}
                    href={href}
                    className={`text-gray-600 dark:text-slate-100 hover:text-orange-600 ${
                      data.url === href ? "font-bold !text-orange-600" : ""
                    }`}
                  >
                    {href === "/"
                      ? "Home"
                      : href === "/about-me/"
                      ? "About Me"
                      : href === "/blog/"
                      ? "Blog"
                      : "Contact"}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div class="flex-grow">
          {data.children}
        </div>
        <footer class="flex flex-col md:w-4/6 w-full">
          <hr class="border-gray-600 dark:border-slate-100" />
          <p class="w-full text-center my-6 text-gray-900 dark:text-slate-100">
            © 2024 Łukasz Czerniawski. Powered by{" "}
            <a href="https://lume.land/">🔥Lume</a>
          </p>
        </footer>
        <button
          onClick="toggleTheme()"
          class="fixed bottom-4 right-4 px-2 py-2 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 focus:outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:hidden"
          >
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z">
            </path>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="hidden dark:block"
          >
            <path
              d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
              fill="white"
            >
            </path>
          </svg>
        </button>
      </body>
    </html>
  );
};
