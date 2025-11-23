
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dashboard-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard-ui/overview",
    "route": "/dashboard-ui"
  },
  {
    "renderMode": 2,
    "route": "/dashboard-ui/overview"
  },
  {
    "renderMode": 2,
    "route": "/dashboard-ui/all"
  },
  {
    "renderMode": 2,
    "route": "/dashboard-ui/add-coin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XSVXRC36.js"
    ],
    "route": "/dashboard-ui/upload"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 551, hash: '432262241363c4c5667ebb596e44563825b27ad337b5c1dd43ff06c3e30f67b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1064, hash: 'f566780e7c10c66db0d7ea80797249a0bfa92b5e6e42e0fbf465592d19768abc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'all/index.html': {size: 12676, hash: 'db972038eb5b0e80b78005592dfb3bc8604a1a86a5c37485fdf82301e6a463c4', text: () => import('./assets-chunks/all_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 7322, hash: '61c52c55121e105d9fddc2222b516d874cc3f726e87195f7dbc7232a478a59b5', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 12762, hash: '7d53112e6782a3341cadb84e2269dae76e55fc7adf8240926dc1ad21cb07e267', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'add-coin/index.html': {size: 8066, hash: '68a2c593c39b6d3eadd4e8c9a5929627ab60949523c42fab2b48d0842f02320d', text: () => import('./assets-chunks/add-coin_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
