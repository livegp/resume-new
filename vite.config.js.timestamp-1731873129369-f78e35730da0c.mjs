// vite.config.js
import TurboConsole from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/unplugin-turbo-console/dist/vite.mjs';
import { imagetools } from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-imagetools/dist/index.js';
import biomePlugin from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-biome/dist/index.mjs';
import hashedFaviconsPlugin from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-hashed-favicons/dist/index.js';
import injectHtml from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-html-inject/dist/index.mjs';
import { ViteMinifyPlugin } from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-minify/dist/index.cjs';
import ogPlugin from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-open-graph/dist/index.js';
import { webfontDownload } from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite-plugin-webfont-dl/dist/index.mjs';
import {
  defineConfig,
  loadEnv,
} from 'file:///H:/Fullstack/My/Bun/resume-new/node_modules/vite/dist/node/index.js';
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    cacheDir: 'node_modules/.cache/.vite',
    server: {
      port: mode === 'development' ? 3e3 : 8080,
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
        relatedApplications: void 0,
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxGdWxsc3RhY2tcXFxcTXlcXFxcQnVuXFxcXHJlc3VtZS1uZXdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkg6XFxcXEZ1bGxzdGFja1xcXFxNeVxcXFxCdW5cXFxccmVzdW1lLW5ld1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vSDovRnVsbHN0YWNrL015L0J1bi9yZXN1bWUtbmV3L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IFR1cmJvQ29uc29sZSBmcm9tICd1bnBsdWdpbi10dXJiby1jb25zb2xlL3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJztcbmltcG9ydCBiaW9tZVBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1iaW9tZSc7XG5pbXBvcnQgaGFzaGVkRmF2aWNvbnNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4taGFzaGVkLWZhdmljb25zJztcbmltcG9ydCBpbmplY3RIdG1sIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcbmltcG9ydCB7IFZpdGVNaW5pZnlQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1taW5pZnknO1xuaW1wb3J0IG9nUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW9wZW4tZ3JhcGgnO1xuLy8gaW1wb3J0IHsgc3ZnU3ByaXRlbWFwIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLXNwcml0ZW1hcCc7XG5pbXBvcnQgeyB3ZWJmb250RG93bmxvYWQgfSBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcblxuICByZXR1cm4ge1xuICAgIGRlZmluZToge1xuICAgICAgJ3Byb2Nlc3MuZW52JzogZW52LFxuICAgIH0sXG4gICAgYmFzZTogZW52LlZJVEVfQkFTRV9VUkwgfHwgJy8nLFxuICAgIGNhY2hlRGlyOiAnbm9kZV9tb2R1bGVzLy5jYWNoZS8udml0ZScsXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnID8gMzAwMCA6IDgwODAsXG4gICAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6ICdkaXN0JyxcbiAgICAgIGNzc01pbmlmeTogJ2xpZ2h0bmluZ2NzcycsXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICB9LFxuICAgIGh0bWw6IHtcbiAgICAgIGNzcE5vbmNlOiAnVklURV9OT05DRScsXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHRyYW5zZm9ybWVyOiAnbGlnaHRuaW5nY3NzJyxcbiAgICAgIGRldlNvdXJjZW1hcHM6IHRydWUsXG4gICAgfSxcbiAgICBhcHBUeXBlOiAnc3BhJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWaXRlTWluaWZ5UGx1Z2luKHt9KSxcbiAgICAgIFR1cmJvQ29uc29sZSh7fSksXG4gICAgICBiaW9tZVBsdWdpbih7XG4gICAgICAgIG1vZGU6ICdjaGVjaycsXG4gICAgICAgIGZpbGVzOiAnLicsXG4gICAgICAgIGFwcGx5Rml4ZXM6IHRydWUsXG4gICAgICAgIGZhaWxPbkVycm9yOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgd2ViZm9udERvd25sb2FkKFxuICAgICAgICBbXG4gICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcsXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbmplY3RBc1N0eWxlVGFnOiB0cnVlLFxuICAgICAgICAgIG1pbmlmeUNzczogdHJ1ZSxcbiAgICAgICAgICBlbWJlZEZvbnRzOiBmYWxzZSxcbiAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICBwcm94eTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICApLFxuICAgICAgaW1hZ2V0b29scyh7XG4gICAgICAgIGRlZmF1bHREaXJlY3RpdmVzOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgZm9ybWF0OiAnYXZpZjt3ZWJwO2pwZycsXG4gICAgICAgICAgICBxdWFsaXR5OiAnNzUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjYWNoZToge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZGlyOiAnLi9ub2RlX21vZHVsZXMvLmNhY2hlL2ltYWdldG9vbHMnLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICAvLyBzdmdTcHJpdGVtYXAoe1xuICAgICAgLy8gICBwYXR0ZXJuOiAnc3JjL2ljb25zLyouc3ZnJyxcbiAgICAgIC8vICAgcHJlZml4OiAnJyxcbiAgICAgIC8vICAgZmlsZW5hbWU6ICdzcHJpdGVtYXAuc3ZnJyxcbiAgICAgIC8vICAgY3VycmVudENvbG9yOiBmYWxzZSxcbiAgICAgIC8vICAgc3ZnbzogdHJ1ZSxcbiAgICAgIC8vICAgZW1pdDogZmFsc2UsXG4gICAgICAvLyB9KSxcbiAgICAgIGhhc2hlZEZhdmljb25zUGx1Z2luKCdzcmMvaWNvbi9mYXZpY29ucy5zdmcnLCB7XG4gICAgICAgIHZlcnNpb246ICcxLjAnLFxuICAgICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgICBhcHBOYW1lOiAncmVzdW1lLW5ldycsXG4gICAgICAgIGFwcFNob3J0TmFtZTogJ3Jlc3VtZS1uZXcnLFxuICAgICAgICBhcHBEZXNjcmlwdGlvbjogJ1Jlc3VtZSBPbGVrc2FuZHIgUGlzaHRhJyxcbiAgICAgICAgZGV2ZWxvcGVyTmFtZTogJ09sZWtzYW5kciBQaXNodGEnLFxuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdHlsZS91c2VOYW1pbmdDb252ZW50aW9uOiA8ZXhwbGFuYXRpb24+XG4gICAgICAgIGRldmVsb3BlclVSTDogJ2h0dHBzOi8vbGl2ZWdwLmdpdGh1Yi5pbycsXG4gICAgICAgIHNjb3BlOiAnLycsXG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N0eWxlL3VzZU5hbWluZ0NvbnZlbnRpb246IDxleHBsYW5hdGlvbj5cbiAgICAgICAgc3RhcnRfdXJsOiAnLz9ob21lc2NyZWVuPTEnLFxuICAgICAgICBsb2FkTWFuaWZlc3RXaXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICBtYW5pZmVzdE1hc2thYmxlOiB0cnVlLFxuICAgICAgICBtYW5pZmVzdFJlbGF0aXZlUGF0aHM6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3R5bGUvdXNlTmFtaW5nQ29udmVudGlvbjogPGV4cGxhbmF0aW9uPlxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmYnLFxuICAgICAgICBhcHBsZVN0YXR1c0JhclN0eWxlOiAnYmxhY2stdHJhbnNsdWNlbnQnLFxuICAgICAgICBjYWNoZUJ1c3RpbmdRdWVyeVBhcmFtOiBudWxsLFxuICAgICAgICBkaXI6ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICBvcmllbnRhdGlvbjogJ2FueScsXG4gICAgICAgIHByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnM6IGZhbHNlLFxuICAgICAgICByZWxhdGVkQXBwbGljYXRpb25zOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N0eWxlL3VzZU5hbWluZ0NvbnZlbnRpb246IDxleHBsYW5hdGlvbj5cbiAgICAgICAgcGl4ZWxfYXJ0OiBmYWxzZSxcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICBhbmRyb2lkOiB0cnVlLFxuICAgICAgICAgIGFwcGxlSWNvbjogdHJ1ZSxcbiAgICAgICAgICBhcHBsZVN0YXJ0dXA6IHRydWUsXG4gICAgICAgICAgZmF2aWNvbnM6IHRydWUsXG4gICAgICAgICAgd2luZG93czogdHJ1ZSxcbiAgICAgICAgICB5YW5kZXg6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIG9nUGx1Z2luKHtcbiAgICAgICAgYmFzaWM6IHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2xpdmVncC5naXRodWIuaW8vcmVzdW1lLW5ldy8nLFxuICAgICAgICAgIHNpdGVOYW1lOiAncmVzdW1lLW5ldycsXG4gICAgICAgICAgdGl0bGU6ICdyZXN1bWUtbmV3JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ09sZWtzYW5kciBQaXNodGEsIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UucG5nJyxcbiAgICAgICAgICBkZXRlcm1pbmVyOiAnYXV0bycsXG4gICAgICAgICAgbG9jYWxlOiAnZW5fVVMnLFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2xpdmVncC5naXRodWIuaW8vcmVzdW1lLW5ldy9vZy5qcGcnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICB3aWR0aDogOTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NDAsXG4gICAgICAgICAgICBhbHQ6ICdSZXN1bWUgaW1hZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR3aXR0ZXI6IHtcbiAgICAgICAgICBjYXJkOiAnc3VtbWFyeV9sYXJnZV9pbWFnZScsXG4gICAgICAgICAgc2l0ZTogJ0BsaXZlX2dwJyxcbiAgICAgICAgICBzaXRlSWQ6ICcxMTg0ODg1MDQnLFxuICAgICAgICAgIGNyZWF0b3I6ICdAbGl2ZV9ncCcsXG4gICAgICAgICAgY3JlYXRvcklkOiAnMTE4NDg4NTA0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ09sZWtzYW5kciBQaXNodGEsIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgICAgICB0aXRsZTogJ3Jlc3VtZS1uZXcnLFxuICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9saXZlZ3AuZ2l0aHViLmlvL3Jlc3VtZS1uZXcvb2cuanBnJyxcbiAgICAgICAgICBpbWFnZUFsdDogJ1Jlc3VtZSBpbWFnZScsXG4gICAgICAgIH0sXG4gICAgICAgIGZhY2Vib29rOiB7XG4gICAgICAgICAgYXBwSWQ6IDEwMDAwMDUwNjExNzExNixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgaW5qZWN0SHRtbCh7XG4gICAgICAgIHRhZ05hbWU6ICdsb2FkJyxcbiAgICAgICAgc291cmNlQXR0cjogJ3NyYycsXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgbG9nUGF0aDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNSLE9BQU8sa0JBQWtCO0FBQy9TLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8sY0FBYztBQUVyQixTQUFTLHVCQUF1QjtBQUdoQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFB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
