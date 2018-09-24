# Andrey's Portfolio

See it live at [andrey.ninja](https://andrey.ninja)

[andreybutenko.com](https://andreybutenko.com) redirects to it if you want something more professional :)

## Development

This project uses [Hexo](https://hexo.io) as a static site generator running on Node.js

To run the Hexo server while developing, run `hexo server`.

To compile the custom Hexo theme while developing, run `gulp sass:watch` in the `themes/ninja4/` directory.

Tested with `npm@6.1.0` and `node@10.4.0`.

## Building

To build:

1. Run `gulp sass` in the `themes/ninja4/` directory.
2. Run `hexo generate` in the root directory.
3. Upload the contents of `public/` to your web server.
4. Also upload `.htaccess` and the contents of `favicons/`, but you only need to do this once.

## License

This project is licensed under the Apache License 2.0