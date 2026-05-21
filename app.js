// ==========================================================================
// DATOS DE ENLACES Y CATEGORÍAS (Edítalos directamente aquí en el código)
// ==========================================================================

// Define aquí las categorías de tu repositorio
const DEFAULT_CATEGORIES = ["Gaming", "Herramientas", "Otros"];

// Define aquí tus enlaces de descarga. 
// Para añadir uno nuevo, copia un bloque {...} completo, ponle una coma al anterior y pégalo.
const DEFAULT_LINKS = [
    {
        id: "mock-1",
        title: "Minecraft Portable 1.20.1",
        url: "https://www.mediafire.com/file/mock-mc120/Minecraft_Portable_1.20.1.zip/file",
        category: "Gaming",
        size: "185 MB",
        description: "Versión portable del popular juego sandbox. No requiere instalación, incluye launcher premium/no-premium. Solo extraer y jugar.",
        icon: "gamepad",
        createdAt: Date.now() - 3600000 * 24 * 5 // Hace 5 días
    },
    {
        id: "mock-2",
        title: "GTA San Andreas Lite Español",
        url: "https://www.mediafire.com/file/mock-gtasa/GTA_San_Andreas_Lite_ES.rar/file",
        category: "Gaming",
        size: "620 MB",
        description: "El clásico GTA San Andreas comprimido y optimizado para PCs de bajo recursos. Idioma español, audios de misiones comprimidos.",
        icon: "gamepad",
        createdAt: Date.now() - 3600000 * 24 * 3 // Hace 3 días
    },
    {
        id: "mock-3",
        title: "WinRAR v6.22 Full Español (x64)",
        url: "https://www.mediafire.com/file/mock-winrar/WinRAR_6.22_x64_Full_ES.exe/file",
        category: "Herramientas",
        size: "8.2 MB",
        description: "Compresor y descompresor de archivos de alto rendimiento. Activación automática incluida. Versión de 64 bits.",
        icon: "file-zipper",
        createdAt: Date.now() - 3600000 * 12 // Hace 12 horas
    },
    {
        id: "mock-4",
        title: "CCleaner Professional v6.15",
        url: "https://www.mediafire.com/file/mock-cclean/CCleaner_Pro_v6.15_Pre-Activated.rar/file",
        category: "Herramientas",
        size: "45 MB",
        description: "Herramienta definitiva para optimizar el sistema, limpiar el registro y desinstalar programas de forma segura. Pre-activado.",
        icon: "screwdriver-wrench",
        createdAt: Date.now() - 3600000 * 2 // Hace 2 horas
    },
    {
        id: "mock-5",
        title: "ChotOS 10 22H2",
        url: "https://www.mediafire.com/file/57cbwvz689sekxn",
        category: "Otros",
        size: "1.3 GB",
        description: "ISO Tomex",
        icon: "download",
        createdAt: Date.now() - 3600000 * 24 * 10 // Hace 10 días
    },
    {
        id: "mock-6",
        title: "HDD Low Level Format Tool",
        url: "https://download2391.mediafire.com/riyeir973ijgh3RmnZHJh4v6RauW-8hgprp3jqEzr6hS8d_m2LvBjRxACua4b5d5Rwz63A1onYkA5UDqCxqs1rCyzwscHN_7PuGANLeh439yZBsH-hWgUz-QVuC39r0RsYGQppBmxlIQ4KE10xk9-XwidNkPRgB8LJwvR-41mV8e/12q163k1rmbz1n5/HDD+Low+Level+Format.EXE",
        category: "Herramientas",
        size: "1.95 MB",
        description: "Formateo Lento",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mi-juego-1",
        title: "Aquí pones el título de tu juego",
        url: "https://www.mediafire.com/file/tu-link-real",
        category: "Gaming",
        size: "350 MB",
        description: "Tu descripción personalizada de lo que hace el archivo.",
        icon: "gamepad",
        createdAt: Date.now()
    },
    {
        id: "mock-8",
        title: "7-Zip",
        url: "https://release-assets.githubusercontent.com/github-production-release-asset/466446150/d9c834c2-819e-4343-9cd4-1ea61004285c?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-05-21T03%3A39%3A01Z&rscd=attachment%3B+filename%3D7z2501-x64.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-05-21T02%3A38%3A22Z&ske=2026-05-21T03%3A39%3A01Z&sks=b&skv=2018-11-09&sig=JnWL0WQteQfpU8fxSOj3CFp%2Bz%2BBEEih8vbDxdZ7ZKBs%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3OTMzMjE5NywibmJmIjoxNzc5MzMxODk3LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.Kt4iAFZ-Yd-WTALL9O45AxlQuJR-bnb5YtEHlBLb3t4&response-content-disposition=attachment%3B%20filename%3D7z2501-x64.exe&response-content-type=application%2Foctet-stream",
        category: "Herramientas",
        size: "1 MB",
        description: "Descomprimir",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    }
];

// Asignamos las variables directamente sin usar localStorage
let categories = DEFAULT_CATEGORIES;
let links = DEFAULT_LINKS;

// Variables de control de filtros activos
let currentCategoryFilter = "all"; // Filtrar por "all" (todos) o por un nombre de categoría
let searchQuery = "";             // Contenido de búsqueda actual
let sortBy = "recent";            // Criterio de ordenamiento actual (recent, oldest, alpha-asc, alpha-desc)

// ==========================================================================
// ELEMENTOS DEL DOM (Selectores HTML)
// ==========================================================================
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const sortSelect = document.getElementById("sort-select");

// Contenedores dinámicos
const categoriesContainer = document.getElementById("categories-container");
const linksGrid = document.getElementById("links-grid");
const emptyState = document.getElementById("empty-state");

// Elementos de Estadísticas y Encabezado
const statGamingCount = document.getElementById("stat-gaming-count");
const statToolsCount = document.getElementById("stat-tools-count");
const statOthersCount = document.getElementById("stat-others-count");
const statTotalCount = document.getElementById("stat-total-count");
const activeCategoryTitle = document.getElementById("active-category-title");

// ==========================================================================
// SISTEMA DE NOTIFICACIONES FLOTANTES (Toasts)
// ==========================================================================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    // Elegimos el icono correspondiente al tipo de notificación
    let iconClass = "fa-circle-check";
    if (type === "error") iconClass = "fa-circle-exclamation";
    if (type === "info") iconClass = "fa-circle-info";

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Pequeño retardo para activar la animación CSS de entrada
    setTimeout(() => toast.classList.add("show"), 10);

    // Ocultar y remover la notificación tras 3.5 segundos
    setTimeout(() => {
        toast.classList.remove("show");
        // Esperamos que termine la animación de salida para destruirla en el DOM
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==========================================================================
// FUNCIONES AUXILIARES
// ==========================================================================

// Devuelve el icono de Font Awesome correspondiente, validando que esté permitido
function getIconClass(iconName) {
    const validIcons = ["gamepad", "screwdriver-wrench", "download", "shield-halved", "compact-disc", "code", "file-zipper", "gear"];
    return validIcons.includes(iconName) ? iconName : "download";
}

// ==========================================================================
// MÓDULOS DE RENDERIZADO DINÁMICO (Creación de HTML)
// ==========================================================================

// Actualiza los contadores estadísticos del panel
function updateDashboardStats() {
    const total = links.length;

    // Contamos según categorías específicas (Gaming, Herramientas, y Otros)
    const gaming = links.filter(link => link.category.toLowerCase() === "gaming").length;
    const tools = links.filter(link => link.category.toLowerCase() === "herramientas").length;
    const others = total - gaming - tools;

    statTotalCount.textContent = total;
    statGamingCount.textContent = gaming;
    statToolsCount.textContent = tools;
    statOthersCount.textContent = others;
}

// Dibuja las categorías en la barra lateral
function renderCategories() {
    // Limpiar lista de la barra lateral
    categoriesContainer.innerHTML = "";

    // Crear el elemento estático "Todos"
    const allItem = document.createElement("li");
    allItem.className = `category-item ${currentCategoryFilter === "all" ? "active" : ""}`;
    allItem.innerHTML = `
        <div class="category-name-wrapper">
            <i class="fa-solid fa-layer-group"></i>
            <span>Todos</span>
        </div>
        <span class="category-badge">${links.length}</span>
    `;
    allItem.addEventListener("click", () => filterByCategory("all"));
    categoriesContainer.appendChild(allItem);

    // Crear dinámicamente cada categoría guardada
    categories.forEach(cat => {
        const count = links.filter(link => link.category === cat).length;
        const item = document.createElement("li");
        item.className = `category-item ${currentCategoryFilter === cat ? "active" : ""}`;

        // Icono según la categoría
        let catIcon = "fa-folder";
        if (cat.toLowerCase() === "gaming") catIcon = "fa-gamepad";
        else if (cat.toLowerCase() === "herramientas") catIcon = "fa-screwdriver-wrench";
        else if (cat.toLowerCase() === "otros") catIcon = "fa-box-open";

        item.innerHTML = `
            <div class="category-name-wrapper">
                <i class="fa-solid ${catIcon}"></i>
                <span>${cat}</span>
            </div>
            <span class="category-badge">${count}</span>
        `;
        item.addEventListener("click", () => filterByCategory(cat));
        categoriesContainer.appendChild(item);
    });
}

// Filtra, ordena y renderiza las tarjetas de enlaces
function renderLinks() {
    linksGrid.innerHTML = "";

    // 1. Filtrado por categoría activa
    let filteredLinks = links;
    if (currentCategoryFilter !== "all") {
        filteredLinks = links.filter(link => link.category === currentCategoryFilter);
    }

    // 2. Filtrado por búsqueda de texto
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        filteredLinks = filteredLinks.filter(link =>
            link.title.toLowerCase().includes(query) ||
            link.description.toLowerCase().includes(query) ||
            link.category.toLowerCase().includes(query)
        );
    }

    // 3. Ordenamiento
    filteredLinks.sort((a, b) => {
        if (sortBy === "recent") return b.createdAt - a.createdAt; // Nuevos primero
        if (sortBy === "oldest") return a.createdAt - b.createdAt; // Antiguos primero
        if (sortBy === "alpha-asc") return a.title.localeCompare(b.title); // A-Z
        if (sortBy === "alpha-desc") return b.title.localeCompare(a.title); // Z-A
        return 0;
    });

    // Mostrar u ocultar pantalla de "Repositorio Vacío"
    if (filteredLinks.length === 0) {
        linksGrid.style.display = "none";
        emptyState.style.display = "flex";
    } else {
        linksGrid.style.display = "grid";
        emptyState.style.display = "none";
    }

    // 4. Renderizar tarjetas (Cards) HTML
    filteredLinks.forEach(link => {
        const card = document.createElement("div");
        card.className = "link-card";
        card.dataset.id = link.id;

        const sizeBadge = link.size ? `<span class="card-tag size-tag"><i class="fa-solid fa-database"></i> ${link.size}</span>` : "";
        const iconName = getIconClass(link.icon);

        card.innerHTML = `
            <div class="card-top">
                <div class="card-icon-box">
                    <i class="fa-solid fa-${iconName}"></i>
                </div>
            </div>
            <div class="card-content">
                <div class="card-tags">
                    <span class="card-tag cat-tag">${link.category}</span>
                    ${sizeBadge}
                </div>
                <h3 class="card-title" title="${link.title}">${link.title}</h3>
                <p class="card-desc">${link.description || "Sin descripción proporcionada."}</p>
            </div>
            <!-- Acciones de copiar enlace o descargar directamente -->
            <div class="card-bottom">
                <button class="btn btn-secondary btn-card-action btn-copy" data-url="${link.url}">
                    <i class="fa-regular fa-copy"></i> Copiar
                </button>
                <a href="${link.url}" target="_blank" class="btn btn-primary btn-card-action">
                    <i class="fa-solid fa-download"></i> Descargar
                </a>
            </div>
        `;

        linksGrid.appendChild(card);
    });
}

// ==========================================
// CONTROLADORES DE ACCIÓN (Lógica de Negocio)
// ==========================================

// Cambia el filtro de categoría seleccionada
function filterByCategory(category) {
    currentCategoryFilter = category;

    // Cambiamos el título del panel principal
    if (category === "all") {
        activeCategoryTitle.textContent = "Todos los Enlaces";
    } else {
        activeCategoryTitle.textContent = category;
    }

    renderCategories();
    renderLinks();
}

// ==========================================================================
// FUNCIONALIDAD DE COPIAR AL PORTAPAPELES
// ==========================================================================
function copyToClipboard(text) {
    // Intentamos usar la API moderna del navegador
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("¡Enlace copiado al portapapeles!");
        }).catch(err => {
            fallbackCopyToClipboard(text); // Si falla, usar fallback alternativo
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// Alternativa antigua por si el navegador no soporta navigator.clipboard
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast("¡Enlace copiado al portapapeles!");
        } else {
            showToast("No se pudo copiar el enlace", "error");
        }
    } catch (err) {
        showToast("Error al copiar enlace", "error");
    }
    document.body.removeChild(textArea);
}

// ==========================================================================
// FUNCIONES DE BÚSQUEDA Y ORDENAMIENTO EN TIEMPO REAL
// ==========================================================================
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;

    // Mostramos la 'X' de limpiar solo si hay texto escrito
    if (searchQuery.trim().length > 0) {
        clearSearchBtn.style.display = "block";
    } else {
        clearSearchBtn.style.display = "none";
    }

    renderLinks();
});

// Botón para borrar el texto del buscador
clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderLinks();
});

// Evento al cambiar de criterio de orden
sortSelect.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderLinks();
});

// ==========================================================================
// INICIALIZACIÓN DE LA APLICACIÓN al abrir la página
// ==========================================================================
function init() {
    // Delegación de eventos para la cuadrícula de tarjetas (Copiar enlace)
    linksGrid.addEventListener("click", (e) => {
        const copyBtn = e.target.closest(".btn-copy");
        if (copyBtn) {
            e.stopPropagation();
            const url = copyBtn.dataset.url;
            copyToClipboard(url);
        }
    });

    updateDashboardStats();
    renderCategories();
    renderLinks();
}

// Iniciar aplicación
init();
