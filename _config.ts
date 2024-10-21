import lume from "lume/mod.ts";
import expires from "lume/middlewares/expires.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume({
    server: {
        middlewares: [
            expires()
        ]
    }
});

site.use(jsx());
site.use(tailwindcss({
    extensions: [".html", ".tsx"],
    options: {
        theme: {
            fontFamily: {
                sans: ["Inter var", "sans-serif"],
            }
        },
        darkMode: "selector",
        plugins: [typography],
    },
}));
site.use(postcss());
site.use(codeHighlight({
    extensions: [".html", ".tsx", ".md"],
    theme: {
        name: "atom-one-dark",
        path: "code_theme.css",
      },
}));
site.copy("static", ".");

export default site;
