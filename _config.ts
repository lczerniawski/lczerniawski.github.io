import lume from "lume/mod.ts";
import expires from "lume/middlewares/expires.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    server: {
        middlewares: [
            expires()
        ]
    }
});

site.use(jsx())
site.use(tailwindcss({
    extensions: [".html", ".tsx"],
    options: {
        theme: {
            fontFamily: {
                sans: ["Inter var", "sans-serif"],
            }
        }
    }
}))
site.use(postcss())

export default site;
