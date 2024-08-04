export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  return (
    <html class="h-full">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>{data.title}</title>
      </head>
      <body class="h-full flex flex-col items-center font-sans">
        <header class="bg-white shadow-md p-4 w-2/6 rounded-md">
          <nav class="flex justify-center items-center">
            <ul class="flex justify-around items-center space-x-4 w-full">
              {['/', '/blog/', '/about-me/', '/contact/'].map(href => (
                <li>
                  <a
                    key={href}
                    href={href}
                    className={`text-gray-600 hover:text-orange-600 ${data.url === href ? 'font-bold text-orange-600' : ''}`}
                  >
                    {href === '/' ? 'Home' : href === '/about-me/' ? 'About Me' : href === '/blog/' ? 'Blog' : 'Contact'}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div class="h-full">
          {data.children}
        </div>
      </body>
    </html>
  );
};
