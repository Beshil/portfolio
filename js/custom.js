(() => {
  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  const languageButton = document.querySelector("[data-language-toggle]");
  const themeButton = document.querySelector("[data-theme-toggle]");
  const nav = document.querySelector("#nav");
  const preferences = document.querySelector(".preferences");
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];

  const english = {
    "Перейти к содержимому": "Skip to content",
    "Проекты": "Projects",
    "Подход": "Approach",
    "Стек": "Stack",
    "Обо мне": "About",
    "Связаться": "Contact",
    "Frontend-разработчик · Москва": "Frontend Developer · Moscow",
    "Каталог": "Catalog",
    "Корзина · 0": "Cart · 0",
    "Москва": "Moscow",
    "Создаю интерфейсы,": "I build interfaces",
    "которыми удобно пользоваться.": "that feel effortless to use.",
    "Я Beshil — JavaScript / React Developer. Разрабатываю адаптивные веб-приложения на React и TypeScript, продумываю состояния интерфейса и поддерживаю понятную структуру кода.": "I'm Beshil, a JavaScript / React Developer. I build responsive React and TypeScript applications, design clear interface states, and keep the codebase maintainable.",
    "Посмотреть проекты": "View projects",
    "Доступен в Telegram": "Available on Telegram",
    "Избранные работы": "Selected work",
    "Проекты как": "Projects presented as",
    "кейсы,": "case studies,",
    "а не список технологий": "not technology lists",
    "Три работы, которые показывают развитие: от архитектуры React-приложения до современной продуктовой витрины.": "Three projects that show progression: from React application architecture to a modern product storefront.",
    "Главный кейс · 2026": "Featured case · 2026",
    "Адаптивная e-commerce витрина с поиском, категориями и локальной корзиной. Проект построен как ясный продуктовый MVP, который можно развивать до полноценного магазина.": "A responsive e-commerce storefront with search, categories, and a local cart. Built as a focused product MVP that can grow into a full online store.",
    "Задача": "Challenge",
    "Собрать каталог, где товар легко найти и добавить в корзину.": "Build a catalog where products are easy to find and add to the cart.",
    "Мой вклад": "My contribution",
    "Композиция интерфейса, адаптив, фильтры, поиск и клиентское состояние.": "Interface composition, responsive behavior, filters, search, and client state.",
    "Результат": "Outcome",
    "Рабочий React MVP со сборкой для Cloudflare Workers.": "A working React MVP with a Cloudflare Workers-compatible build.",
    "Исходный код ↗": "Source code ↗",
    "Лендинг · 2026": "Landing page · 2026",
    "Многоэкранный лендинг онлайн-школы: программа, преподаватели, тарифы, отзывы, FAQ и мобильная навигация.": "A multi-section online school landing page covering curriculum, teachers, pricing, testimonials, FAQ, and mobile navigation.",
    "Фокус": "Focus",
    "Иерархия контента и адаптивная сетка.": "Content hierarchy and a responsive grid.",
    "Решение": "Solution",
    "Нативные интерактивные блоки без тяжёлого фреймворка.": "Native interactive elements without a heavy framework.",
    "Лаборатория архитектуры React-приложения с собственной Webpack-сборкой, темами, ленивыми маршрутами и разделением по слоям.": "A React architecture lab with a custom Webpack build, themes, lazy routes, and layered separation.",
    "Масштабируемая структура и строгая типизация.": "Scalable structure and strict typing.",
    "Изолированные providers, pages, widgets и shared UI.": "Isolated providers, pages, widgets, and shared UI.",
    "Ранние проекты": "Earlier projects",
    "3 работы · 2020–2022": "3 projects · 2020–2022",
    "React-приложение с авторизацией, профилями, комментариями, формами и Redux Toolkit.": "A React application with authentication, profiles, comments, forms, and Redux Toolkit.",
    "Каталог персонажей и комиксов с загрузкой данных, состояниями интерфейса и React Hooks.": "A character and comics catalog with data fetching, interface states, and React Hooks.",
    "Адаптивный промосайт с формами, анимациями и компонентной организацией стилей.": "A responsive promotional website with forms, animation, and component-oriented styles.",
    "Как я работаю": "How I work",
    "От задачи — к ясному": "From a problem to a clear",
    "интерфейсу": "interface",
    "Смотрю на фронтенд как на связку продукта, визуальной системы и инженерных решений.": "I see frontend as a combination of product thinking, visual systems, and engineering decisions.",
    "Сначала сценарий": "Start with the user flow",
    "Определяю главное действие, состояния и приоритет контента до деталей оформления.": "I define the primary action, states, and content priority before polishing the visuals.",
    "Компоненты с границами": "Components with boundaries",
    "Разделяю данные, UI и поведение так, чтобы код было проще менять и проверять.": "I separate data, UI, and behavior so the code is easier to change and verify.",
    "Адаптив — часть решения": "Responsive by design",
    "Прорабатываю клавиатуру, touch-зоны и читаемость на разных экранах.": "I account for keyboard access, touch targets, and readability across screen sizes.",
    "Инструменты": "Tools",
    "Стек без": "A stack without",
    "процентов": "percentages",
    "Технологии сгруппированы по роли в работе. Их применение видно в проектах.": "Technologies are grouped by their role in my work. The projects above show how I use them.",
    "Основной стек": "Core stack",
    "Приложения": "Application development",
    "Практики": "Tools & practices",
    "Развиваюсь через": "I grow through",
    "практику": "practice",
    "и разбор реальных интерфейсов.": "and close study of real interfaces.",
    "Я JavaScript / React Developer из Москвы. Начал с адаптивной вёрстки, затем перешёл к React-приложениям, управлению состоянием и TypeScript.": "I'm a JavaScript / React Developer based in Moscow. I started with responsive layouts, then moved into React applications, state management, and TypeScript.",
    "Сейчас фокусируюсь на продуктовой подаче, доступности и архитектуре, которая не мешает развивать интерфейс после первого релиза.": "My current focus is product presentation, accessibility, and architecture that supports continued development after the first release.",
    "начало пути": "frontend journey began",
    "текущий фокус": "current focus",
    "локация": "location",
    "Контакты": "Contact",
    "Есть задача или вакансия?": "Have a project or a role?",
    "Давайте обсудим.": "Let's talk.",
    "Быстрее всего отвечаю в Telegram. Резюме и дополнительные материалы отправлю по запросу.": "Telegram is the fastest way to reach me. I can share my resume and additional materials on request.",
    "Написать": "Message",
    "Профиль": "Profile",
    "Код": "Code",
    "Наверх ↑": "Back to top ↑"
  };

  const ui = {
    ru: {
      title: "Beshil — JavaScript / React Developer",
      description: "Портфолио Beshil — JavaScript и React-разработчика из Москвы. Адаптивные интерфейсы, TypeScript и понятная архитектура приложений.",
      nav: "Основная навигация", preferences: "Настройки сайта", home: "На главную",
      openMenu: "Открыть меню", closeMenu: "Закрыть меню",
      switchLanguage: "Switch to English", dark: "Включить тёмную тему", light: "Включить светлую тему"
    },
    en: {
      title: "Beshil — JavaScript / React Developer",
      description: "Portfolio of Beshil, a JavaScript and React Developer based in Moscow. Responsive interfaces, TypeScript, and maintainable application architecture.",
      nav: "Primary navigation", preferences: "Site preferences", home: "Home",
      openMenu: "Open menu", closeMenu: "Close menu",
      switchLanguage: "Переключить на русский", dark: "Enable dark theme", light: "Enable light theme"
    }
  };

  const originalText = new WeakMap();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest("script,style,pre") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) originalText.set(walker.currentNode, walker.currentNode.nodeValue);

  const readPreference = (key, fallback) => {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  };
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Storage may be disabled. */ }
  };

  let language = readPreference("portfolio-language", "ru") === "en" ? "en" : "ru";

  const translateText = () => {
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest("script,style,pre") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    while (textWalker.nextNode()) {
      const node = textWalker.currentNode;
      const source = originalText.get(node) ?? node.nodeValue;
      const trimmed = source.trim();
      if (language === "en" && english[trimmed]) node.nodeValue = source.replace(trimmed, english[trimmed]);
      else node.nodeValue = source;
    }
  };

  const updateThemeControl = () => {
    const dark = root.dataset.theme === "dark";
    if (!themeButton) return;
    themeButton.querySelector("span").textContent = dark ? "☀" : "☾";
    themeButton.setAttribute("aria-label", dark ? ui[language].light : ui[language].dark);
    themeButton.setAttribute("title", dark ? ui[language].light : ui[language].dark);
  };

  const updateLanguage = () => {
    root.lang = language;
    translateText();
    document.title = ui[language].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", ui[language].description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", ui[language].description);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", ui[language].description);
    nav?.setAttribute("aria-label", ui[language].nav);
    preferences?.setAttribute("aria-label", ui[language].preferences);
    document.querySelector(".brand")?.setAttribute("aria-label", ui[language].home);
    languageButton.textContent = language === "ru" ? "EN" : "RU";
    languageButton.setAttribute("aria-label", ui[language].switchLanguage);
    languageButton.setAttribute("title", ui[language].switchLanguage);
    const menuOpen = menuButton?.getAttribute("aria-expanded") === "true";
    menuButton?.setAttribute("aria-label", menuOpen ? ui[language].closeMenu : ui[language].openMenu);
    updateThemeControl();
  };

  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", ui[language].openMenu);
    menu?.classList.remove("open");
    document.body.classList.remove("lock");
  };

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? ui[language].closeMenu : ui[language].openMenu);
    menu?.classList.toggle("open", open);
    document.body.classList.toggle("lock", open);
  });

  languageButton?.addEventListener("click", () => {
    language = language === "ru" ? "en" : "ru";
    savePreference("portfolio-language", language);
    updateLanguage();
  });

  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    savePreference("portfolio-theme", root.dataset.theme);
    updateThemeControl();
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => window.innerWidth > 760 && closeMenu());
  const updateHeader = () => header?.classList.toggle("scrolled", scrollY > 16);
  updateHeader();
  addEventListener("scroll", updateHeader, { passive: true });

  if ("IntersectionObserver" in window) {
    const reveal = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -25px" });
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));

    const current = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${visible.target.id}`) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -60%", threshold: [0.01, 0.2] });
    document.querySelectorAll("main section[id]").forEach((section) => current.observe(section));
  } else document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));

  document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = String(new Date().getFullYear()); });
  updateLanguage();
})();
