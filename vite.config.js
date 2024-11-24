import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig, loadEnv } from 'vite';
import { imagetools } from 'vite-imagetools';
import biomePlugin from 'vite-plugin-biome';
import hashedFaviconsPlugin from 'vite-plugin-hashed-favicons';
import injectHtml from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ogPlugin from 'vite-plugin-open-graph';
// import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import { webfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    cacheDir: 'node_modules/.cache/.vite',
    server: {
      port: 3000,
      strictPort: false,
    },
    build: {
      outDir: 'dist',
      cssMinify: 'lightningcss',
      sourcemap: true,
      manifest: true,
    },
    html: {
      cspNonce: 'VITE_NONCE',
    },
    css: {
      transformer: 'lightningcss',
      devSourcemaps: true,
    },
    appType: 'spa',
    plugins: [
      ViteMinifyPlugin({}),
      TurboConsole({}),
      biomePlugin({
        mode: 'check',
        files: '.',
        applyFixes: true,
        failOnError: false,
      }),
      webfontDownload(
        [
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
        ],
        {
          injectAsStyleTag: true,
          minifyCss: true,
          embedFonts: false,
          async: true,
          cache: true,
          proxy: false,
        },
      ),
      imagetools({
        defaultDirectives: () => {
          return new URLSearchParams({
            format: 'avif;webp;jpg',
            quality: '75',
          });
        },
        cache: {
          enabled: true,
          dir: './node_modules/.cache/imagetools',
        },
      }),
      // svgSpritemap({
      //   pattern: 'src/icons/*.svg',
      //   prefix: '',
      //   filename: 'spritemap.svg',
      //   currentColor: false,
      //   svgo: true,
      //   emit: false,
      // }),
      hashedFaviconsPlugin('src/icon/favicons.svg', {
        version: '1.0',
        lang: 'en-US',
        appName: 'resume-new',
        appShortName: 'resume-new',
        appDescription: 'Resume Oleksandr Pishta',
        developerName: 'Oleksandr Pishta',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        developerURL: 'https://livegp.github.io',
        scope: '/',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        start_url: '/?homescreen=1',
        loadManifestWithCredentials: false,
        manifestMaskable: true,
        manifestRelativePaths: true,
        background: '#fff',
        // biome-ignore lint/style/useNamingConvention: <explanation>
        theme_color: '#fff',
        appleStatusBarStyle: 'black-translucent',
        cacheBustingQueryParam: null,
        dir: 'auto',
        display: 'standalone',
        orientation: 'any',
        preferRelatedApplications: false,
        relatedApplications: undefined,
        // biome-ignore lint/style/useNamingConvention: <explanation>
        pixel_art: false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: true,
        },
      }),
      ogPlugin({
        basic: {
          url: 'https://livegp.github.io/resume-new/',
          siteName: 'resume-new',
          title: 'resume-new',
          description: 'Oleksandr Pishta, Full Stack Developer',
          type: 'image.png',
          determiner: 'auto',
          locale: 'en_US',
          image: {
            url: 'https://livegp.github.io/resume-new/og.jpg',
            type: 'image/png',
            width: 900,
            height: 440,
            alt: 'Resume image',
          },
        },
        twitter: {
          card: 'summary_large_image',
          site: '@live_gp',
          siteId: '118488504',
          creator: '@live_gp',
          creatorId: '118488504',
          description: 'Oleksandr Pishta, Full Stack Developer',
          title: 'resume-new',
          image: 'https://livegp.github.io/resume-new/og.jpg',
          imageAlt: 'Resume image',
        },
        facebook: {
          appId: 100000506117116,
        },
      }),
      injectHtml({
        tagName: 'load',
        sourceAttr: 'src',
        debug: {
          logPath: false,
        },
      }),
    ],
  };
});
