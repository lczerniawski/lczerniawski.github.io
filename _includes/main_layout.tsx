export default (data: Lume.Data, _helpers: Lume.Helpers) => {
  console.log(data.url);
  return (
    <html class="h-full">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>{data.title}</title>
      </head>
      <body class="h-full font-sans">
        <header class="bg-white shadow-md p-4">
          <nav class="flex justify-between items-center">
            <ul class="flex items-center space-x-4">
              {['/', '/cv', '/blog/'].map(href => (
                <li>
                  <a
                    key={href}
                    href={href}
                    className={`text-gray-600 hover:text-gray-900 ${data.url.includes(href) ? 'font-bold' : ''}`}
                  >
                    {href === '/' ? 'Home' : href === '/cv' ? 'CV' : 'Blog'}
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
