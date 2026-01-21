import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CcUb1a0F.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Br1UUfrn.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/xampp/htdocs/mi-portafolio/","cacheDir":"file:///C:/xampp/htdocs/mi-portafolio/node_modules/.astro/","outDir":"file:///C:/xampp/htdocs/mi-portafolio/dist/","srcDir":"file:///C:/xampp/htdocs/mi-portafolio/src/","publicDir":"file:///C:/xampp/htdocs/mi-portafolio/public/","buildClientDir":"file:///C:/xampp/htdocs/mi-portafolio/dist/client/","buildServerDir":"file:///C:/xampp/htdocs/mi-portafolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.js","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://karin-santamaria.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/xampp/htdocs/mi-portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@js":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DbDD9Stk.mjs","C:/xampp/htdocs/mi-portafolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DGRHVPAi.mjs","@astrojs/vue/client.js":"_astro/client.D25EESN-.js","C:/xampp/htdocs/mi-portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B-QnPIgh.js","C:/xampp/htdocs/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.IG0JgU9m.js","C:/xampp/htdocs/mi-portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.Bi5tJNgW.js","C:/xampp/htdocs/mi-portafolio/src/components/SobreMi.astro?astro&type=script&index=0&lang.ts":"_astro/SobreMi.astro_astro_type_script_index_0_lang.EjNwZiVY.js","C:/xampp/htdocs/mi-portafolio/src/components/Habilidades.astro?astro&type=script&index=0&lang.ts":"_astro/Habilidades.astro_astro_type_script_index_0_lang.CEsY_nh3.js","C:/xampp/htdocs/mi-portafolio/src/components/Contacto.astro?astro&type=script&index=0&lang.ts":"_astro/Contacto.astro_astro_type_script_index_0_lang.C-8mpu1G.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/xampp/htdocs/mi-portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","const s={threshold:.1,rootMargin:\"0px 0px -100px 0px\"},c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add(\"visible\")})},s);document.querySelectorAll(\".fade-in-scroll\").forEach(e=>{c.observe(e)});document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",t=>{const r=e.getAttribute(\"href\");if(!r)return;const o=document.querySelector(r);o&&(t.preventDefault(),o.scrollIntoView({behavior:\"smooth\",block:\"start\"}),history.pushState(null,\"\",r))})});"],["C:/xampp/htdocs/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.querySelector(\".menu-toggle\"),n=document.querySelector(\"nav\");s?.addEventListener(\"click\",()=>{n?.classList.toggle(\"open\")});const o=document.getElementById(\"theme-toggle\"),e=o?.querySelector(\"i\");localStorage.getItem(\"theme\")===\"dark\"&&(document.body.classList.add(\"dark-mode\"),e?.classList.replace(\"fa-moon\",\"fa-sun\")),o?.addEventListener(\"click\",()=>{document.body.classList.toggle(\"dark-mode\");const t=document.body.classList.contains(\"dark-mode\");e?.classList.toggle(\"fa-sun\",t),e?.classList.toggle(\"fa-moon\",!t),localStorage.setItem(\"theme\",t?\"dark\":\"light\")})});"],["C:/xampp/htdocs/mi-portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".profile-flip\");e?.addEventListener(\"click\",()=>{e.classList.toggle(\"flipped\")})});"],["C:/xampp/htdocs/mi-portafolio/src/components/SobreMi.astro?astro&type=script&index=0&lang.ts","const s=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add(\"visible\"),s.unobserve(r.target))})},{threshold:.15});document.querySelectorAll(\".fade-in-scroll\").forEach(e=>{s.observe(e)});"],["C:/xampp/htdocs/mi-portafolio/src/components/Habilidades.astro?astro&type=script&index=0&lang.ts","const r=new IntersectionObserver(s=>{s.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add(\"visible\");const t=e.target.querySelector(\".skill-progress\");t instanceof HTMLElement&&t.dataset.level&&(t.style.width=`${t.dataset.level}%`),r.unobserve(e.target)})},{threshold:.2});document.querySelectorAll(\".fade-in-scroll\").forEach(s=>r.observe(s));"],["C:/xampp/htdocs/mi-portafolio/src/components/Contacto.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"contact-form\"),e=document.getElementById(\"form-message\"),r=document.querySelector(\".button-text\"),i=document.querySelector(\".button-loader\");s?.addEventListener(\"submit\",async c=>{if(c.preventDefault(),!s||!e||!r||!i)return;const n=new FormData(s),t={nombre:n.get(\"nombre\"),email:n.get(\"email\"),asunto:n.get(\"asunto\"),mensaje:n.get(\"mensaje\")};if(r.style.display=\"none\",i.style.display=\"inline\",e.textContent=\"\",e.className=\"form-message\",!t.nombre||!t.email||!t.asunto||!t.mensaje){e.textContent=\"Por favor completa todos los campos.\",e.classList.add(\"error\"),o();return}if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(t.email))){e.textContent=\"Por favor ingresa un correo válido.\",e.classList.add(\"error\"),o();return}try{const a=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(t)}),l=await a.json();a.ok?(e.textContent=\"¡Mensaje enviado con éxito! Te contactaré pronto.\",e.classList.add(\"success\"),o(),s.reset()):(e.textContent=l.message||\"Hubo un error al enviar el mensaje.\",e.classList.add(\"error\"),o())}catch{e.textContent=\"Error de conexión. Por favor, intenta de nuevo.\",e.classList.add(\"error\"),o()}finally{r.style.display=\"inline\",i.style.display=\"none\"}});function o(){setTimeout(()=>{e&&(e.textContent=\"\",e.className=\"form-message\")},4e3)}"]],"assets":["/_astro/index.DI_KFWbq.css","/favicon.svg","/robots.txt","/cv/Curriculum Vitae Karin.pdf","/_astro/client.D25EESN-.js","/images/k.png","/images/karin.gif","/images/perfil.png","/images/trabajo.jpeg","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"wEMnvfHf6GO37grfFF6yEBxWd3rgCXDUXaUB35OPJGU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
