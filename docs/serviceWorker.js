const frogFiles = "frog-docs-files-cache";
const assets = [
    "/",
    "/index.html",
    "/_static/app.js",
    "/_images/accounts.png",
    "/_images/admin.png",
    "/_images/analytics.png",
    "/_images/anergy_fav_icon.png",
    "/_images/consolidation.png",
    "/_images/contacts.png",
    "/_images/crm.png",
    "/_images/design_guide.png",
    "/_images/house-overview.png",
    "/_images/hr.png",
    "/_images/payroll.png",
    "/_images/plm.png",
    "/_images/Q53-targets.png",
    "/_images/recruitment.png",
    "/_images/scorecard.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(frogFiles).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});
