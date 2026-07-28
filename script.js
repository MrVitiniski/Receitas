(() => {
  "use strict";

  const bookInner = document.getElementById("bookInner");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageIndicator = document.getElementById("pageIndicator");

  const menuBtn = document.getElementById("menuBtn");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarLinksList = document.getElementById("sidebarLinksList");
  const recipeSearch = document.getElementById("recipeSearch");

  const searchBtn = document.getElementById("searchButton");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const recipes = Array.isArray(window.receitasPizzaria) ? window.receitasPizzaria : [];
  let currentSheet = 0;
  let currentLang = localStorage.getItem("lp_lang") || "en"; // en | pt

  function isDesktop() {
    return window.innerWidth >= 850;
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function t(obj) {
    if (typeof obj === "string") return obj;
    if (!obj) return "";
    return obj[currentLang] || obj.en || obj.pt || "";
  }

  function totalSheets() {
    if (!recipes.length) return 1;
    return isDesktop() ? Math.ceil(recipes.length / 2) : recipes.length;
  }

  function setLang(lang) {
    currentLang = lang === "pt" ? "pt" : "en";
    localStorage.setItem("lp_lang", currentLang);
    renderSidebarList();
    renderBook();
    renderSearchResults(recipes);
    updateLangButton();
  }

  function updateLangButton() {
    const btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.textContent = currentLang.toUpperCase();
    btn.setAttribute("aria-label", currentLang === "en" ? "Switch to Portuguese" : "Mudar para inglês");
    btn.title = currentLang === "en" ? "Switch to Portuguese" : "Mudar para inglês";
  }

  function ensureLangButton() {
    if (document.getElementById("langToggle")) return;
    const topbar = document.querySelector(".topbar");
    if (!topbar) return;

    const btn = document.createElement("button");
    btn.id = "langToggle";
    btn.className = "search-btn";
    btn.type = "button";
    btn.style.fontWeight = "700";
    btn.style.fontSize = "0.8rem";
    btn.addEventListener("click", () => setLang(currentLang === "en" ? "pt" : "en"));

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      topbar.insertBefore(btn, searchButton);
    } else {
      topbar.appendChild(btn);
    }
    updateLangButton();
  }

  function recipeTemplate(recipe, sideClass = "") {
    const ingredientes = recipe.ingredientes?.[currentLang] || recipe.ingredientes?.en || [];
    const passos = recipe.passos?.[currentLang] || recipe.passos?.en || [];

    return `
      <article class="recipe-page ${sideClass}" data-recipe-id="${recipe.id}">
        <header class="recipe-header">
          <h2 class="recipe-title">${escapeHtml(t(recipe.titulo))}</h2>
          <p class="recipe-meta">${escapeHtml(t(recipe.meta))}</p>
        </header>

        <h3 class="sub-title">${currentLang === "en" ? "Ingredients" : "Ingredientes"}</h3>
        <ul class="list-ingredients">
          ${ingredientes.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}
        </ul>

        <h3 class="sub-title">${currentLang === "en" ? "Method" : "Modo de preparo"}</h3>
        <ol class="list-steps">
          ${passos.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
        </ol>
      </article>
    `;
  }

  function updateNavigation() {
    const sheets = totalSheets();
    if (prevBtn) prevBtn.disabled = currentSheet <= 0;
    if (nextBtn) nextBtn.disabled = currentSheet >= sheets - 1;

    if (pageIndicator) {
      if (isDesktop()) {
        const start = currentSheet * 2 + 1;
        const end = Math.min(start + 1, recipes.length);
        pageIndicator.textContent = `${start}-${end} / ${recipes.length}`;
      } else {
        pageIndicator.textContent = `${currentSheet + 1} / ${recipes.length}`;
      }
    }

    if (prevBtn) prevBtn.textContent = currentLang === "en" ? "◀ Previous" : "◀ Anterior";
    if (nextBtn) nextBtn.textContent = currentLang === "en" ? "Next ▶" : "Próxima ▶";
  }

  function renderBook() {
    if (!bookInner) return;

    if (!recipes.length) {
      bookInner.innerHTML = `
        <article class="recipe-page mobile-active active-page">
          <header class="recipe-header">
            <h2 class="recipe-title">${currentLang === "en" ? "No recipes found" : "Nenhuma receita encontrada"}</h2>
            <p class="recipe-meta">${currentLang === "en" ? "Check receitas.js file" : "Verifique o arquivo receitas.js"}</p>
          </header>
        </article>
      `;
      if (pageIndicator) pageIndicator.textContent = "0";
      return;
    }

    if (isDesktop()) {
      const leftIndex = currentSheet * 2;
      const rightIndex = leftIndex + 1;
      const left = recipes[leftIndex];
      const right = recipes[rightIndex];

      bookInner.innerHTML = `
        ${left ? recipeTemplate(left, "page-left active-page") : ""}
        ${right ? recipeTemplate(right, "page-right active-page") : ""}
      `;
    } else {
      const one = recipes[currentSheet];
      bookInner.innerHTML = one ? recipeTemplate(one, "mobile-active") : "";
    }

    updateNavigation();
  }

  function changeSheet(direction) {
    const sheets = totalSheets();
    const next = currentSheet + direction;
    if (next < 0 || next > sheets - 1) return;
    currentSheet = next;
    renderBook();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleMenu(forceState) {
    if (!sidebarMenu || !sidebarOverlay || !menuBtn) return;
    const willOpen = typeof forceState === "boolean" ? forceState : !sidebarMenu.classList.contains("open");

    sidebarMenu.classList.toggle("open", willOpen);
    sidebarOverlay.classList.toggle("open", willOpen);
    menuBtn.classList.toggle("active", willOpen);
    menuBtn.setAttribute("aria-expanded", String(willOpen));
    document.body.style.overflow = willOpen ? "hidden" : "";
  }

  function closeMenu() {
    toggleMenu(false);
  }

  function renderSidebarList(list = recipes) {
    if (!sidebarLinksList) return;
    if (!list.length) {
      sidebarLinksList.innerHTML = `<li>${currentLang === "en" ? "No recipes found" : "Nenhuma receita encontrada"}</li>`;
      return;
    }

    sidebarLinksList.innerHTML = list
      .map((r) => `<li data-id="${r.id}" title="${escapeHtml(t(r.titulo))}">${escapeHtml(t(r.titulo))}</li>`)
      .join("");
  }

  function goToRecipeById(id) {
    const recipeIndex = recipes.findIndex((r) => r.id === id);
    if (recipeIndex < 0) return;
    currentSheet = isDesktop() ? Math.floor(recipeIndex / 2) : recipeIndex;
    renderBook();
    closeMenu();
    closeSearch();
  }

  function openSearch() {
    if (!searchModal) return;
    searchModal.removeAttribute("hidden");
    if (searchBtn) searchBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    renderSearchResults(recipes);
    setTimeout(() => searchInput?.focus(), 50);
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.setAttribute("hidden", "");
    if (searchBtn) searchBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = sidebarMenu?.classList.contains("open") ? "hidden" : "";

    if (searchInput) searchInput.value = "";
    if (searchResults) searchResults.innerHTML = "";
  }

  function renderSearchResults(list) {
    if (!searchResults) return;
    if (!list.length) {
      searchResults.innerHTML = `<p style="opacity:.8;">${currentLang === "en" ? "No recipes found." : "Nenhuma receita encontrada."}</p>`;
      return;
    }

    searchResults.innerHTML = list
      .map(
        (r) => `
          <button class="search-item" data-id="${r.id}" type="button">
            <strong>${escapeHtml(t(r.titulo))}</strong>
            <small style="display:block;opacity:.75;margin-top:3px;">${escapeHtml(t(r.meta))}</small>
          </button>
        `
      )
      .join("");
  }

  function bindEvents() {
    sidebarLinksList?.addEventListener("click", (e) => {
      const li = e.target.closest("li[data-id]");
      if (!li) return;
      goToRecipeById(Number(li.dataset.id));
    });

    recipeSearch?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      const filtered = recipes.filter((r) => {
        const title = t(r.titulo).toLowerCase();
        const meta = t(r.meta).toLowerCase();
        const ing = (r.ingredientes?.[currentLang] || []).some((i) => i.toLowerCase().includes(q));
        return title.includes(q) || meta.includes(q) || ing;
      });
      renderSidebarList(filtered);
    });

    searchBtn?.addEventListener("click", openSearch);

    searchInput?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      const filtered = recipes.filter((r) => {
        const title = t(r.titulo).toLowerCase();
        const meta = t(r.meta).toLowerCase();
        const ing = (r.ingredientes?.[currentLang] || []).some((i) => i.toLowerCase().includes(q));
        const pas = (r.passos?.[currentLang] || []).some((p) => p.toLowerCase().includes(q));
        return title.includes(q) || meta.includes(q) || ing || pas;
      });
      renderSearchResults(filtered);
    });

    searchResults?.addEventListener("click", (e) => {
      const btn = e.target.closest(".search-item[data-id]");
      if (!btn) return;
      goToRecipeById(Number(btn.dataset.id));
    });

    searchModal?.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (searchModal && !searchModal.hasAttribute("hidden")) closeSearch();
        if (sidebarMenu?.classList.contains("open")) closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      const sheets = totalSheets();
      if (currentSheet > sheets - 1) currentSheet = Math.max(0, sheets - 1);
      renderBook();
    });
  }

  function init() {
    ensureLangButton();
    renderSidebarList(recipes);
    renderBook();
    bindEvents();
  }

  window.toggleMenu = toggleMenu;
  window.changeSheet = changeSheet;
  window.closeSearch = closeSearch;

  document.addEventListener("DOMContentLoaded", init);
})();