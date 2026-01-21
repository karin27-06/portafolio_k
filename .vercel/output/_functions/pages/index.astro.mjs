import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, n as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, o as renderComponent } from '../chunks/astro/server_C_apge7d.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Karin Hair Chozo Santamaria | Desarrollador Full Stack",
    description = "Portafolio profesional de Karin Hair Chozo Santamaria, desarrollador web Full Stack especializado en Laravel, Vue, React, Astro y Node.js."
  } = Astro2.props;
  const canonical = Astro2.url.href;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="google-site-verification" content="xuwY9Z93p6gLaweOPjaW6RQfr5B4V9ybV2UVMGh1KOk"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(canonical, "href")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><link rel="icon" href="/images/k.png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">${renderHead()}</head> <body> <!-- NAVBAR --> <header class="navbar"> <div class="nav-container"> <button class="menu-toggle" aria-label="Abrir menú"> <i class="fa-solid fa-bars"></i> </button> <a href="#inicio" class="logo">Karin.dev</a> <nav> <a href="#inicio">Inicio</a> <a href="#sobre-mi">Sobre mí</a> <a href="#habilidades">Habilidades</a> <a href="#tecnologias">Tecnologías</a> <a href="#proyectos">Proyectos</a> <a href="#contacto">Contacto</a> </nav> <button id="theme-toggle" aria-label="Cambiar tema"> <i class="fa-solid fa-moon"></i> </button> </div> </header> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "C:/xampp/htdocs/mi-portafolio/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="hero" aria-label="Presentación principal" data-astro-cid-bbe6dxrz> <div class="hero-grid fade-in" data-astro-cid-bbe6dxrz> <!-- COLUMNA IZQUIERDA --> <div class="hero-text" data-astro-cid-bbe6dxrz> <h1 class="hero-title slide-up" data-astro-cid-bbe6dxrz>
Hola, soy <span data-astro-cid-bbe6dxrz>Karin Santamaria</span> </h1> <p class="hero-description slide-up delay-1" data-astro-cid-bbe6dxrz>
Desarrollador Full Stack en Perú con experiencia en el desarrollo de aplicaciones web modernas.
  Especializado en <strong data-astro-cid-bbe6dxrz>Laravel, Vue, Astro, Node.js y Bootstrap</strong>,
  enfocado en crear soluciones escalables, eficientes y orientadas al negocio
  para empresas y emprendimientos digitales.
</p> <div class="hero-buttons slide-up delay-2" data-astro-cid-bbe6dxrz> <a href="#proyectos" class="btn-primary" data-astro-cid-bbe6dxrz>Ver proyectos</a> <a href="#contacto" class="btn-secondary" data-astro-cid-bbe6dxrz>Contáctame</a> </div> </div> <!-- COLUMNA DERECHA --> <div class="hero-image" data-astro-cid-bbe6dxrz> <div class="profile-container float-animation" data-astro-cid-bbe6dxrz> <div class="profile-image" data-astro-cid-bbe6dxrz> <div class="profile-flip" data-astro-cid-bbe6dxrz> <div class="profile-front" data-astro-cid-bbe6dxrz> <img src="/images/perfil.png" width="260" height="260" alt="Karin Santamaria, desarrollador full stack" data-astro-cid-bbe6dxrz> </div> <div class="profile-back" data-astro-cid-bbe6dxrz> <img src="/images/karin.gif" alt="Karin Santamaria saludando, desarrollador web" data-astro-cid-bbe6dxrz> </div> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SobreMi;
  return renderTemplate`${maybeRenderHead()}<section id="sobre-mi" class="section" data-astro-cid-ufbbhydc> <div class="container about-grid fade-in-scroll" data-astro-cid-ufbbhydc> <!-- TEXTO / CARD --> <div class="about-card" data-astro-cid-ufbbhydc> <h2 class="section-title" data-astro-cid-ufbbhydc>Sobre Mí</h2> <p class="about-text" data-astro-cid-ufbbhydc>
Soy un desarrollador apasionado por crear soluciones web innovadoras.
        Con experiencia en tecnologías modernas como <strong data-astro-cid-ufbbhydc>Laravel, Vue, React, Node.js y Astro</strong>,
        me especializo en construir aplicaciones escalables y con excelente experiencia
        de usuario. Me motiva aprender nuevas tecnologías y enfrentar desafíos técnicos
        complejos que generen impacto real en los negocios.
</p> <p class="about-text" data-astro-cid-ufbbhydc>
Me motiva aprender nuevas tecnologías y enfrentar desafíos técnicos
        complejos que generen impacto real en los negocios.
</p> <a href="/cv/Curriculum Vitae Karin.pdf" download class="btn-cv" data-astro-cid-ufbbhydc>
Descargar CV
</a> </div> <!-- IMAGEN --> <div class="about-image" data-astro-cid-ufbbhydc> <img src="/images/trabajo.jpeg" alt="Karin Santamaria trabajando" loading="lazy" data-astro-cid-ufbbhydc> </div> </div> </section> ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/components/SobreMi.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/SobreMi.astro", void 0);

const $$Astro$3 = createAstro();
const $$Habilidades = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Habilidades;
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { nombre: "JavaScript", nivel: 90, icon: "devicon-javascript-plain" },
        { nombre: "TypeScript", nivel: 85, icon: "devicon-typescript-plain" },
        { nombre: "Vue", nivel: 85, icon: "devicon-vuejs-plain" },
        { nombre: "React", nivel: 85, icon: "devicon-react-original" },
        { nombre: "Angular", nivel: 75, icon: "devicon-angularjs-plain" },
        { nombre: "Astro", nivel: 80, icon: "devicon-astro-plain" },
        { nombre: "CSS / Tailwind", nivel: 85, icon: "devicon-tailwindcss-plain" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { nombre: "PHP", nivel: 85, icon: "devicon-php-plain" },
        { nombre: "Laravel", nivel: 90, icon: "devicon-laravel-plain" },
        { nombre: "Node.js", nivel: 80, icon: "devicon-nodejs-plain" },
        { nombre: "PostgreSQL", nivel: 80, icon: "devicon-postgresql-plain" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { nombre: "Docker", nivel: 75, icon: "devicon-docker-plain" },
        { nombre: "Git", nivel: 85, icon: "devicon-git-plain" },
        { nombre: "Vercel", nivel: 80, icon: "devicon-vercel-original" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="habilidades" class="skills-section" data-astro-cid-3z7yjlti> <div class="container" data-astro-cid-3z7yjlti> <h2 class="section-title fade-in-scroll" data-astro-cid-3z7yjlti>Habilidades</h2> ${skillCategories.map((category, catIndex) => renderTemplate`<div class="skill-category fade-in-scroll"${addAttribute(`--delay:${catIndex}`, "style")} data-astro-cid-3z7yjlti> <h3 class="category-title" data-astro-cid-3z7yjlti>${category.title}</h3> <div class="skills-grid" data-astro-cid-3z7yjlti> ${category.skills.map((skill, skillIndex) => renderTemplate`<div class="skill-card fade-in-scroll"${addAttribute(`--delay:${skillIndex}`, "style")} data-astro-cid-3z7yjlti> <div class="skill-header" data-astro-cid-3z7yjlti> <div class="skill-left" data-astro-cid-3z7yjlti> <i${addAttribute(`skill-icon ${skill.icon}`, "class")} data-astro-cid-3z7yjlti></i> <span class="skill-name" data-astro-cid-3z7yjlti>${skill.nombre}</span> </div> <span class="skill-percent" data-astro-cid-3z7yjlti>${skill.nivel}%</span> </div> <div class="skill-bar" data-astro-cid-3z7yjlti> <div class="skill-progress"${addAttribute(skill.nivel, "data-level")} data-astro-cid-3z7yjlti></div> </div> </div>`)} </div> </div>`)} </div> </section> ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/components/Habilidades.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Habilidades.astro", void 0);

const $$Astro$2 = createAstro();
const $$Tecnologias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tecnologias;
  return renderTemplate`${maybeRenderHead()}<section id="tecnologias" class="section tech-section" data-astro-cid-ofnozrxq> <div class="container fade-in-scroll" data-astro-cid-ofnozrxq> <h2 class="section-title" data-astro-cid-ofnozrxq>Tecnologías</h2> <div class="tech-grid" data-astro-cid-ofnozrxq> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-php-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>PHP</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-laravel-original colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Laravel</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-vuejs-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Vue.js</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-astro-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Astro</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-react-original colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>React</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-angular-plain" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Angular</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-nextjs-plain" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Next.js</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-nodejs-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Node.js</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-postgresql-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>PostgreSQL</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-mysql-original colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>MySql</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-git-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Git</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-tailwindcss-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Tailwind CSS</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-flutter-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>Flutter</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-typescript-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>TypeScript</span> </div> <div class="tech-card" data-astro-cid-ofnozrxq> <i class="devicon-javascript-plain colored" data-astro-cid-ofnozrxq></i> <span data-astro-cid-ofnozrxq>JavaScript</span> </div> </div> </div> </section> `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Tecnologias.astro", void 0);

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const proyectos = [
    {
      titulo: "E-commerce con React",
      descripcion: "Tienda online completa con carrito de compras y pasarela de pagos",
      tecnologias: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/tuusuario/ecommerce-react"
    },
    {
      titulo: "App de Tareas",
      descripcion: "Aplicaci\xF3n de gesti\xF3n de tareas con autenticaci\xF3n",
      tecnologias: ["Vue.js", "Firebase"],
      github: "https://github.com/tuusuario/app-tareas"
    },
    {
      titulo: "Dashboard Anal\xEDtico",
      descripcion: "Panel de control con gr\xE1ficos y estad\xEDsticas en tiempo real",
      tecnologias: ["Next.js", "Chart.js", "PostgreSQL"],
      github: "https://github.com/tuusuario/dashboard-analitico"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="proyectos" class="section" data-astro-cid-dywszb22> <div class="container" data-astro-cid-dywszb22> <h2 class="section-title fade-in-scroll" data-astro-cid-dywszb22>Mis Proyectos</h2> <div class="projects-grid" data-astro-cid-dywszb22> ${proyectos.map((proyecto, index) => renderTemplate`<div class="project-card fade-in-scroll"${addAttribute(`animation-delay: ${index * 0.2}s`, "style")} data-astro-cid-dywszb22> <div class="project-header" data-astro-cid-dywszb22> <h3 data-astro-cid-dywszb22>${proyecto.titulo}</h3> <a${addAttribute(proyecto.github, "href")} target="_blank" rel="noopener" class="github-link" title="Ver repositorio en GitHub" data-astro-cid-dywszb22> <i class="devicon-github-original" data-astro-cid-dywszb22></i> </a> </div> <p data-astro-cid-dywszb22>${proyecto.descripcion}</p> <div class="tech-tags" data-astro-cid-dywszb22> ${proyecto.tecnologias.map((tech) => renderTemplate`<span class="tag" data-astro-cid-dywszb22>${tech}</span>`)} </div> </div>`)} </div> </div> </section> `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Proyectos.astro", void 0);

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const redes = [
    {
      nombre: "Email",
      url: "mailto:karinsntmr@gmail.com",
      icono: `<i class="fa fa-envelope" aria-hidden="true"></i>`,
      detalle: "karinsntmr@gmail.com"
    },
    {
      nombre: "GitHub",
      url: "https://github.com/karin27-06",
      icono: `<i class="devicon-github-original colored"></i>`,
      detalle: "@karin27-06"
    },
    {
      nombre: "LinkedIn",
      url: "https://www.linkedin.com/in/karin-chozo-santamaria-4553a6228",
      icono: `<i class="devicon-linkedin-plain colored"></i>`,
      detalle: "Karin Chozo Santamaria"
    },
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/karin.ch.santamaria/",
      icono: `<i class="devicon-facebook-plain colored"></i>`,
      detalle: "Karin Santamaria"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="section dark" data-astro-cid-xjughlio> <div class="container" data-astro-cid-xjughlio> <h2 class="section-title fade-in-scroll" data-astro-cid-xjughlio>Contacto</h2> <p class="contact-intro fade-in-scroll" data-astro-cid-xjughlio>
¿Tienes un proyecto en mente? ¡Hablemos!
</p> <div class="contact-layout" data-astro-cid-xjughlio> <!-- IZQUIERDA: FORMULARIO --> <form id="contact-form" class="contact-form fade-in-scroll" data-astro-cid-xjughlio> <fieldset class="form-group" data-astro-cid-xjughlio> <legend data-astro-cid-xjughlio>Nombre</legend> <input type="text" name="nombre" placeholder="Tu nombre completo" required data-astro-cid-xjughlio> </fieldset> <fieldset class="form-group" data-astro-cid-xjughlio> <legend data-astro-cid-xjughlio>Email</legend> <input type="email" name="email" placeholder="tuemail@ejemplo.com" required data-astro-cid-xjughlio> </fieldset> <fieldset class="form-group" data-astro-cid-xjughlio> <legend data-astro-cid-xjughlio>Asunto</legend> <input type="text" name="asunto" placeholder="Motivo del mensaje" required data-astro-cid-xjughlio> </fieldset> <fieldset class="form-group" data-astro-cid-xjughlio> <legend data-astro-cid-xjughlio>Mensaje</legend> <textarea name="mensaje" rows="5" placeholder="Cuéntame sobre tu proyecto..." required data-astro-cid-xjughlio></textarea> </fieldset> <button type="submit" class="submit-button" data-astro-cid-xjughlio> <span class="button-text" data-astro-cid-xjughlio>Enviar Mensaje</span> <span class="button-loader" style="display:none" data-astro-cid-xjughlio>Enviando...</span> </button> <div id="form-message" class="form-message" data-astro-cid-xjughlio></div> </form> <!-- DERECHA: TEXTO + REDES --> <div class="contact-info fade-in-scroll" data-astro-cid-xjughlio> <div class="connect-text" data-astro-cid-xjughlio> <h3 data-astro-cid-xjughlio>Conectemos</h3> <p data-astro-cid-xjughlio>
Estoy disponible para proyectos freelance, colaboraciones o simplemente
            para conversar sobre desarrollo web y tecnología.
</p> </div> <div class="social-links" data-astro-cid-xjughlio> ${redes.map((red) => renderTemplate`<a${addAttribute(red.url, "href")} class="social-link" target="_blank" rel="noopener" data-astro-cid-xjughlio> <span class="icon" data-astro-cid-xjughlio>${unescapeHTML(red.icono)}</span> <div class="social-text" data-astro-cid-xjughlio> <span class="social-name" data-astro-cid-xjughlio>${red.nombre}</span> <span class="social-detail" data-astro-cid-xjughlio>${red.detalle}</span> </div> </a>`)} </div> </div> </div> </div> </section> ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/components/Contacto.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Contacto.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <!-- IZQUIERDA --> <div class="footer-left" data-astro-cid-sz7xmlte> <h3 class="footer-name" data-astro-cid-sz7xmlte>Karin Santamaria</h3> <p class="footer-description" data-astro-cid-sz7xmlte>
Desarrollador Full Stack creando experiencias web excepcionales
</p> </div> <!-- CENTRO --> <div class="footer-center" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Enlaces rápidos</h4> <nav class="footer-links" data-astro-cid-sz7xmlte> <a href="#inicio" data-astro-cid-sz7xmlte>Inicio</a> <a href="#sobre-mi" data-astro-cid-sz7xmlte>Sobre mí</a> <a href="#habilidades" data-astro-cid-sz7xmlte>Habilidades</a> <a href="#tecnologias" data-astro-cid-sz7xmlte>Tecnologías</a> <a href="#proyectos" data-astro-cid-sz7xmlte>Proyectos</a> <a href="#contacto" data-astro-cid-sz7xmlte>Contacto</a> </nav> </div> <!-- DERECHA --> <div class="footer-right" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Redes sociales</h4> <div class="footer-social" data-astro-cid-sz7xmlte> <a href="https://github.com/karin27-06" target="_blank" aria-label="GitHub" data-astro-cid-sz7xmlte> <i class="fa-brands fa-github" data-astro-cid-sz7xmlte></i> </a> <a href="https://www.linkedin.com/in/karin-chozo-santamaria-4553a6228" target="_blank" aria-label="LinkedIn" data-astro-cid-sz7xmlte> <i class="fa-brands fa-linkedin" data-astro-cid-sz7xmlte></i> </a> <a href="https://www.facebook.com/karin.ch.santamaria/" target="_blank" aria-label="Facebook" data-astro-cid-sz7xmlte> <i class="fa-brands fa-facebook" data-astro-cid-sz7xmlte></i> </a> </div> </div> </div> <!-- BOTTOM --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${year} Karin Chozo. Todos los derechos reservados.</p> <p class="footer-tech" data-astro-cid-sz7xmlte>Hecho con Astro, CSS y Tailwind CSS</p> </div> </footer> `;
}, "C:/xampp/htdocs/mi-portafolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Karin Santamaria | Desarrollador Full Stack Web", "description": "Desarrollador Full Stack con experiencia en Laravel, Vue, React, Astro y Node.js. Portafolio profesional con proyectos reales.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SobreMi", $$SobreMi, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Habilidades", $$Habilidades, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Tecnologias", $$Tecnologias, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Proyectos", $$Proyectos, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contacto", $$Contacto, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </main> ` })} ${renderScript($$result, "C:/xampp/htdocs/mi-portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/mi-portafolio/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/mi-portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
