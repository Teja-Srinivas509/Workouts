
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IRYMGFPW.js",
      "chunk-I5QRB5NG.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBGYGHDO.js",
      "chunk-I5QRB5NG.js"
    ],
    "route": "/display"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-37BUI3VX.js"
    ],
    "route": "/analysis"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 657, hash: '6e8480afe260cfacbdb5aae2d67786579c92f8733ebb0d4a96ffca179ed6fe23', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1170, hash: 'b6413d8f83b70238704af0f1fdbb44e20e50a75b8537b9fd2c347ee142951bea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'display/index.html': {size: 20085, hash: '3a88d1b022e25b679efb5b5c9ba986966101e11811fad1f574f3e9ed3e7e65c9', text: () => import('./assets-chunks/display_index_html.mjs').then(m => m.default)},
    'analysis/index.html': {size: 16388, hash: '034f3c59994b997082acedd0c4d4adc8ea16648580ebe0bb0720918d39a935c0', text: () => import('./assets-chunks/analysis_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19483, hash: '5fc94f58aa5e55bcca4f3e0a401484ffd2e416187bbe91dbc50a86b2b703f1ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
