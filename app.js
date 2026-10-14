// ==========================================================================
// REPOX — NÚCLEO DINÁMICO DE ENLACES Y NAVEGACIÓN
// Creado para @iexkay
// ==========================================================================

// Categorías del repositorio
const DEFAULT_CATEGORIES = ["Gaming", "Herramientas", "Otros"];

// ==========================================================================
// LISTA DE ENLACES DE DESCARGA
// Para añadir un nuevo software, copia un bloque {...}, pon coma al anterior y pégalo.
// ==========================================================================
const DEFAULT_LINKS = [
    {
        id: "mock-1",
        title: "Forza Horizon 5",
        url: "https://store5.gofile.io/download/web/e5f71859-9dfc-400d-b654-7df8316230f1/Forza%20Horizon%205%20Opti.7z",
        category: "Gaming",
        size: "89.0 GB",
        description: "Es un juego de carreras de mundo abierto desarrollado por Playground Games, versión optimizada.",
        icon: "gamepad",
        createdAt: Date.now()
    },
    {
        id: "mock-2",
        title: "Euro Truck Simulator 2",
        url: "https://download2430.mediafire.com/r89avxwap5ugm-jgF9siuwkC-S-jH_SxiVeGLptpRmhYwG7sbvlwOWgjK-1ebDzbotURbfzNHjLFF0ffbfoV5KV6JGuOxcQlUcsJHvnnrAvAzKixYYLm9hoWujJ0hKQzUrtYnx0v4BDXRbwQkoCvuMUP4yfuutAII98pi1NEwcuf/h1a7szc5qrzl53j/Euro+Truck+Simulator+2+Opti.7z",
        category: "Gaming",
        size: "3.09 GB",
        description: "Versión optimizada del simulador de camiones por carreteras europeas.",
        icon: "gamepad",
        createdAt: Date.now()
    },
    {
        id: "mock-3",
        title: "Grand Theft Auto: San Andreas",
        url: "https://download2332.mediafire.com/a92ber34hnggS3VPTiyQT6fpWs7IF7caxiU3ZYyVypuJUJjv3ozm2_2npodow0P689GZ_MQohhxtzAKUavuo8-kquq_xa2zwGlKrq0F1fOT-nyKoMfKvQ0N5lzNl_HAjNx7IJzWB1rSXrSbonZsSvbaNdlz3YVEuYmJeiCvYFaEV/0iddf1zy4jyyww4/GTA+SA+Opti+V3.1.7z",
        category: "Gaming",
        size: "3 GB",
        description: "El clásico GTA San Andreas comprimido y optimizado para PCs de bajos recursos. Idioma español, audios comprimidos.",
        icon: "gamepad",
        createdAt: Date.now()
    },
    {
        id: "mock-4",
        title: "Microsoft Activation Scripts | MAS",
        url: "https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?path=/MAS/All-In-One-Version-KL/MAS_AIO.cmd&download=true",
        category: "Herramientas",
        size: "1.2 KB",
        description: "Script oficial MAS All-in-One para activación de Windows y Office mediante PowerShell de forma limpia.",
        icon: "gear",
        createdAt: Date.now()
    },
    {
        id: "mock-5",
        title: "Ventoy",
        url: "https://ia902900.us.archive.org/10/items/ventoy-1.1.12-windows/ventoy-1.1.12-windows.zip",
        category: "Herramientas",
        size: "15.9 MB",
        description: "Permite crear una memoria USB booteable con múltiples sistemas operativos sin formatear de nuevo.",
        icon: "gear",
        createdAt: Date.now()
    },
    {
        id: "mock-6",
        title: "Rufus Portable",
        url: "https://github.com/pbatard/rufus/releases/download/v4.14/rufus-4.14p.exe",
        category: "Herramientas",
        size: "1.9 MB",
        description: "Herramienta gratuita y muy ligera para Windows que permite crear unidades USB de arranque rápidamente.",
        icon: "gear",
        createdAt: Date.now()
    },
    {
        id: "mock-7",
        title: "Driver Booster Pro",
        url: "https://www.iobit.com/es/driver-booster.php",
        category: "Herramientas",
        size: "21.37 MB",
        description: "Programa para descargar e instalar automáticamente los controladores faltantes o desactualizados de tu PC.",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mock-8",
        title: "Adobe Acrobat Pro DC",
        url: "https://dn710202.ca.archive.org/0/items/adobe-acrobat-pro-iexkay.-7z/Adobe%20Acrobat%20Pro%20-%20iexkay.7z",
        category: "Herramientas",
        size: "689 MB",
        description: "Versión completa de Adobe Acrobat Pro DC para visualización y edición avanzada de archivos PDF.",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mock-9",
        title: "AutoDesk AutoCAD 2022",
        url: "https://download2281.mediafire.com/byhxa080olzgWOB45h7ZleFovQtUuRPP7uuB3Eu-YhR8ci43fj5mICFkF2L5fxMT8Cse8tvDSSq7wbhiUW-ZvAbQMCWc6A5DVOb-YiwUBBKBbr9SGif1uj0NsTHWqqXutv5VFwJQhuQWYh3OBhanzLiF0YqhHz0lyvOhAS2JTy4B/n2xrns8syk9fu8f/AutoDesk+AutoCAD+2022.7z",
        category: "Herramientas",
        size: "1.73 GB",
        description: "Software líder de diseño y modelado asistido por computadora en 2D y 3D.",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mock-10",
        title: "HDD Low Level Format Tool",
        url: "https://download2391.mediafire.com/ziawyxncqfvgdzmuwB0SvMHm_4sLC7AJ7rqAyoFZUQJ5w3D_x_hV_6IEFZrnl5rQT79_SIH2tk9qjjYWZzUWmV9uC-5Uy--59WdqmM4_AKe77PKRIpZy2AFqr-cvM-sXPIMGFMf7z9cxQkTcvvxMjD1kI_zV7v-EsNRJMC3Ej_CE/12q163k1rmbz1n5/HDD+Low+Level+Format.EXE",
        category: "Herramientas",
        size: "1.95 MB",
        description: "Utilidad para formateo a bajo nivel de discos duros mecánicos, SSDs y memorias USB.",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mock-11",
        title: "Free Download Manager",
        url: "https://cold-na-phx-2.gofile.io/download/web/06d9d1ef-52b4-42b7-b870-4bb6c3094b99/fdm_x64_setup.exe",
        category: "Herramientas",
        size: "46.6 MB",
        description: "Gestor de descargas rápido y eficiente para sistemas Windows, Mac, Linux y Android.",
        icon: "screwdriver-wrench",
        createdAt: Date.now()
    },
    {
        id: "mock-12",
        title: "7-Zip",
        url: "https://release-assets.githubusercontent.com/github-production-release-asset/466446150/d9c834c2-819e-4343-9cd4-1ea61004285c?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-05-21T03%3A39%3A01Z&rscd=attachment%3B+filename%3D7z2501-x64.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-05-21T02%3A38%3A22Z&ske=2026-05-21T03%3A39%3A01Z&sks=b&skv=2018-11-09&sig=JnWL0WQteQfpU8fxSOj3CFp%2Bz%2BBEEih8vbDxdZ7ZKBs%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3OTMzMjE5NywibmJmIjoxNzc5MzMxODk3LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.Kt4iAFZ-Yd-WTALL9O45AxlQuJR-bnb5YtEHlBLb3t4&response-content-disposition=attachment%3B%20filename%3D7z2501-x64.exe&response-content-type=application%2Foctet-stream",
        category: "Herramientas",
        size: "1 MB",
        description: "Compresor y descompresor de archivos de código abierto con alta tasa de compresión.",
        icon: "file-zipper",
        createdAt: Date.now()
    },
    {
        id: "mock-13",
        title: "ChotOS 10 22H2",
        url: "https://download2390.mediafire.com/1k1er9r9ghpgUj7qkfnh4z-ZBjlHDOPMWxrb_jNngAEN6vONnNMU2PjuVC1G9apjALS0CgoLc1i-wioQPfnT9BO-1HQxkHX2XsGEnQm9DzqvGuz_jL2jepphNvGhihVPQeSkfCoyAfWye2NacwsWx5JpGVtZR-rmJjCte24P9OdY/57cbwvz689sekxn/ChotOS+10+22H2.iso",
        category: "Otros",
        size: "1.3 GB",
        description: "ISO modificada de Windows 10 ultra optimizada para máximo rendimiento en juegos.",
        icon: "compact-disc",
        createdAt: Date.now() - 3600000 * 24 * 10
    },
    {
        id: "mock-14",
        title: "WinPE11/10 Sergei Strelec",
        url: "https://store-na-phx-1.gofile.io/download/web/253f0c07-f509-49da-8af2-e66a3c20e17a/WinPE11_10_Sergei_Strelec_x64_2026.05.11_English%20-%20iexkay.iso",
        category: "Otros",
        size: "3.35 GB",
        description: "Sistema operativo ligero booteable para rescate, diagnóstico y mantenimiento de PCs.",
        icon: "compact-disc",
        createdAt: Date.now() - 3600000 * 24 * 10
    },
    {
        id: "mock-15",
        title: "CachyOS",
        url: "https://cdn77.cachyos.org/ISO/desktop/260426/cachyos-desktop-linux-260426.iso",
        category: "Otros",
        size: "2.9 GB",
        description: "Distribución basada en Arch Linux con optimizaciones avanzadas del kernel para mayor velocidad.",
        icon: "compact-disc",
        createdAt: Date.now()
    }
];

// Variables de estado
let links = DEFAULT_LINKS;
let currentCategoryFilter = "all";
let searchQuery = "";
let sortBy = "recent";

// ==========================================================================
// ELEMENTOS DEL DOM
// ==========================================================================
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const sortSelect = document.getElementById("sort-select");

const linksGrid = document.getElementById("links-grid");
const emptyState = document.getElementById("empty-state");
const btnResetFilters = document.getElementById("btn-reset-filters");

const statGamingCount = document.getElementById("stat-gaming-count");
const statToolsCount = document.getElementById("stat-tools-count");
const statOthersCount = document.getElementById("stat-others-count");
const statTotalCount = document.getElementById("stat-total-count");

const activeCategoryTitle = document.getElementById("active-category-title");
const activeCountBadge = document.getElementById("active-count-badge");
const categoryCards = document.querySelectorAll(".category-card");

// ==========================================================================
// SISTEMA DE NOTIFICACIONES TOAST
// ==========================================================================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconClass = "fa-circle-check";
    if (type === "error") iconClass = "fa-circle-exclamation";
    if (type === "info") iconClass = "fa-circle-info";

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 350);
    }, 3200);
}

// Iconos Font Awesome permitidos
function getIconClass(iconName) {
    const validIcons = [
        "gamepad", "screwdriver-wrench", "download", 
        "shield-halved", "compact-disc", "code", 
        "file-zipper", "gear"
    ];
    return validIcons.includes(iconName) ? iconName : "cloud-arrow-down";
}

// ==========================================================================
// ACTUALIZAR CONTADORES DE LAS 4 CATEGORÍAS PRINCIPALES
// ==========================================================================
function updateCategoryCounts() {
    const total = links.length;
    const gaming = links.filter(l => l.category.toLowerCase() === "gaming").length;
    const tools = links.filter(l => l.category.toLowerCase() === "herramientas").length;
    const others = total - gaming - tools;

    if (statTotalCount) statTotalCount.textContent = total;
    if (statGamingCount) statGamingCount.textContent = gaming;
    if (statToolsCount) statToolsCount.textContent = tools;
    if (statOthersCount) statOthersCount.textContent = others;
}

// ==========================================================================
// CONTROLADOR DE NAVEGACIÓN Y FILTRADO POR CATEGORÍA
// (Las 4 tarjetas superiores son la ÚNICA navegación interactiva)
// ==========================================================================
function filterByCategory(category) {
    currentCategoryFilter = category;

    // 1. Actualizar el título de la sección
    if (activeCategoryTitle) {
        if (category === "all") {
            activeCategoryTitle.textContent = "Todos los Enlaces";
        } else {
            activeCategoryTitle.textContent = category;
        }
    }

    // 2. Sincronizar estado visual de las 4 tarjetas (resaltar la seleccionada)
    categoryCards.forEach(card => {
        const cardCat = card.dataset.category;
        const statusPill = card.querySelector(".category-status-pill");

        if (cardCat === category) {
            card.classList.add("active");
            if (statusPill) statusPill.textContent = "Activo";
        } else {
            card.classList.remove("active");
            if (statusPill) statusPill.textContent = "Filtrar";
        }
    });

    renderLinks();
}

// ==========================================================================
// RENDERIZAR CUADRÍCULA DE TARJETAS
// ==========================================================================
function renderLinks() {
    if (!linksGrid) return;
    linksGrid.innerHTML = "";

    // 1. Filtrar por categoría activa
    let filteredLinks = links;
    if (currentCategoryFilter !== "all") {
        filteredLinks = links.filter(link => link.category.toLowerCase() === currentCategoryFilter.toLowerCase());
    }

    // 2. Filtrar por búsqueda de texto
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        filteredLinks = filteredLinks.filter(link =>
            link.title.toLowerCase().includes(query) ||
            link.description.toLowerCase().includes(query) ||
            link.category.toLowerCase().includes(query)
        );
    }

    // 3. Ordenar
    filteredLinks.sort((a, b) => {
        if (sortBy === "recent") return b.createdAt - a.createdAt;
        if (sortBy === "oldest") return a.createdAt - b.createdAt;
        if (sortBy === "alpha-asc") return a.title.localeCompare(b.title);
        if (sortBy === "alpha-desc") return b.title.localeCompare(a.title);
        return 0;
    });

    // 4. Actualizar badge con el número de resultados visibles
    if (activeCountBadge) {
        activeCountBadge.textContent = `${filteredLinks.length} ${filteredLinks.length === 1 ? 'enlace' : 'enlaces'}`;
    }

    // 5. Manejar estado vacío
    if (filteredLinks.length === 0) {
        linksGrid.style.display = "none";
        if (emptyState) emptyState.style.display = "flex";
        return;
    } else {
        linksGrid.style.display = "grid";
        if (emptyState) emptyState.style.display = "none";
    }

    // 6. Generar tarjetas
    filteredLinks.forEach(link => {
        const card = document.createElement("div");
        card.className = "link-card";
        card.dataset.id = link.id;

        const sizeBadge = link.size 
            ? `<span class="card-tag size-tag"><i class="fa-solid fa-hard-drive"></i> ${link.size}</span>` 
            : "";
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
                <p class="card-desc">${link.description || "Software optimizado listo para descarga inmediata."}</p>
            </div>
            <div class="card-bottom">
                <button class="btn btn-secondary btn-card-action btn-copy" data-url="${link.url}" title="Copiar enlace directo">
                    <i class="fa-regular fa-copy"></i> Copiar
                </button>
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-card-action">
                    <i class="fa-solid fa-download"></i> Descargar
                </a>
            </div>
        `;

        linksGrid.appendChild(card);
    });
}

// ==========================================================================
// FUNCIONALIDAD DE COPIAR AL PORTAPAPELES
// ==========================================================================
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("¡Enlace copiado al portapapeles!", "success");
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast("¡Enlace copiado al portapapeles!", "success");
        } else {
            showToast("No se pudo copiar el enlace", "error");
        }
    } catch {
        showToast("Error al copiar enlace", "error");
    }
    document.body.removeChild(textArea);
}

function initTypewriterPlaceholder() {
    if (!searchInput) return;

    const sampleQueries = [
        "Buscar por título o descripción...",
        "Buscar: Forza Horizon 5...",
        "Buscar: Ventoy USB...",
        "Buscar: GTA San Andreas...",
        "Buscar: Adobe Acrobat Pro...",
        "Buscar: Rufus Portable...",
        "Buscar: Driver Booster...",
        "Buscar: 7-Zip...",
        "Buscar: AutoCAD 2022...",
        "Buscar: Euro Truck Simulator..."
    ];

    let queryIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let isPaused = false;

    searchInput.addEventListener("focus", () => {
        isPaused = true;
        searchInput.placeholder = "Escribe para buscar software...";
    });

    searchInput.addEventListener("blur", () => {
        if (!searchInput.value.trim()) {
            isPaused = false;
        }
    });

    function tick() {
        if (isPaused || searchInput.value.trim().length > 0) {
            setTimeout(tick, 1000);
            return;
        }

        const currentText = sampleQueries[queryIdx];

        if (isDeleting) {
            charIdx--;
            searchInput.placeholder = currentText.substring(0, charIdx);
        } else {
            charIdx++;
            searchInput.placeholder = currentText.substring(0, charIdx);
        }

        let delay = isDeleting ? 30 : 65;

        if (!isDeleting && charIdx === currentText.length) {
            delay = 1800; // Pausa para leer la sugerencia
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            queryIdx = (queryIdx + 1) % sampleQueries.length;
            delay = 300;
        }

        setTimeout(tick, delay);
    }

    setTimeout(tick, 1000);
}

// ==========================================================================
// EVENTOS DE BÚSQUEDA Y ORDENACIÓN
// ==========================================================================
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;

    const kbdHint = document.querySelector(".search-kbd-hint");
    if (searchQuery.trim().length > 0) {
        clearSearchBtn.style.display = "flex";
        if (kbdHint) kbdHint.style.display = "none";
    } else {
        clearSearchBtn.style.display = "none";
        if (kbdHint) kbdHint.style.display = "";
    }

    renderLinks();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    const kbdHint = document.querySelector(".search-kbd-hint");
    if (kbdHint) kbdHint.style.display = "";
    renderLinks();
    searchInput.focus();
});

sortSelect.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderLinks();
});

// Botón para restablecer filtros
if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        const kbdHint = document.querySelector(".search-kbd-hint");
        if (kbdHint) kbdHint.style.display = "";
        filterByCategory("all");
    });
}

// Atajos de teclado: Ctrl+K para buscar
window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    if (e.key === "Escape" && document.activeElement === searchInput) {
        if (searchInput.value) clearSearchBtn.click();
        else searchInput.blur();
    }
});

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
function init() {
    // 1. Delegación de eventos para el botón copiar en cada tarjeta
    linksGrid.addEventListener("click", (e) => {
        const copyBtn = e.target.closest(".btn-copy");
        if (copyBtn) {
            e.stopPropagation();
            const url = copyBtn.dataset.url;
            copyToClipboard(url);
        }
    });

    // 2. Clic en cualquiera de las 4 tarjetas de categoría
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.dataset.category;
            if (cat) {
                filterByCategory(cat);
                // En móvil, hacer scroll suave a la lista de contenido
                if (window.innerWidth <= 768) {
                    const contentArea = document.querySelector(".content-area");
                    if (contentArea) {
                        contentArea.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
        });

        // Soporte de accesibilidad con tecla Enter / Espacio
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                card.click();
            }
        });
    });

    // 3. Inicialización de datos y componentes
    initTypewriterPlaceholder();
    updateCategoryCounts();
    renderLinks();

}

// Arrancar REPOX
init();
