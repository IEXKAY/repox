// ==========================================================================
// DATOS PREDETERMINADOS Y CONSTANTES (Se cargan la primera vez que entras)
// ==========================================================================
const DEFAULT_CATEGORIES = ["Gaming", "Herramientas", "Otros"];

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
        title: "ChotOS 101  22H2",
        url: "https://www.mediafire.com/file/57cbwvz689sekxn",
        category: "Otros",
        size: "1.3 GB",
        description: "ISO",
        icon: "download",
        createdAt: Date.now() - 3600000 * 24 * 10 // Hace 10 días
    }
];

// ==========================================================================
// ESTADO DE LA APLICACIÓN
// ==========================================================================
// Intentamos cargar las categorías de localStorage. Si no existen, usamos las de defecto.
let categories = JSON.parse(localStorage.getItem("eskay_categories")) || DEFAULT_CATEGORIES;
// Intentamos cargar los enlaces de localStorage. Si no existen, usamos los de defecto.
let links = JSON.parse(localStorage.getItem("eskay_links")) || DEFAULT_LINKS;

// Variables de control de filtros activos
let currentCategoryFilter = "all"; // Filtrar por "all" (todos) o por un nombre de categoría
let searchQuery = "";             // Contenido de búsqueda actual
let sortBy = "recent";            // Criterio de ordenamiento actual (recent, oldest, alpha-asc, alpha-desc)
let activeDropdownId = null;      // Guarda el ID del menú de la tarjeta abierto actualmente
let linkIdToDelete = null;        // Guarda el ID del enlace a eliminar

// ==========================================================================
// ELEMENTOS DEL DOM (Selectores HTML)
// ==========================================================================
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const btnAddLink = document.getElementById("btn-add-link");
const btnEmptyAdd = document.getElementById("btn-empty-add");
const sortSelect = document.getElementById("sort-select");

// Modales
const linkModal = document.getElementById("link-modal");
const closeLinkModalBtn = document.getElementById("close-link-modal");
const linkForm = document.getElementById("link-form");
const btnCancelLink = document.getElementById("btn-cancel-link");

const categoriesModal = document.getElementById("categories-modal");
const btnManageCategories = document.getElementById("btn-manage-categories");
const closeCategoriesModalBtn = document.getElementById("close-categories-modal");
const addCategoryForm = document.getElementById("add-category-form");
const newCategoryNameInput = document.getElementById("new-category-name");

// Modal de confirmación de eliminación
const confirmModal = document.getElementById("confirm-modal");
const closeConfirmModalBtn = document.getElementById("close-confirm-modal");
const btnCancelConfirm = document.getElementById("btn-cancel-confirm");
const btnAcceptConfirm = document.getElementById("btn-accept-confirm");

// Contenedores dinámicos
const categoriesContainer = document.getElementById("categories-container");
const selectCategoryDropdown = document.getElementById("select-category");
const manageCategoriesList = document.getElementById("manage-categories-list");
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
// Guarda el estado actual en la memoria del navegador (localStorage)
function saveToStorage() {
    localStorage.setItem("eskay_categories", JSON.stringify(categories));
    localStorage.setItem("eskay_links", JSON.stringify(links));
}

// Devuelve el icono de Font Awesome correspondiente, validando que esté permitido
function getIconClass(iconName) {
    const validIcons = ["gamepad", "screwdriver-wrench", "download", "shield-halved", "compact-disc", "code", "file-zipper", "gear"];
    return validIcons.includes(iconName) ? iconName : "download";
}

// Asegura que las URLs tengan protocolo correcto
function formatUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
    return url;
}

// Comprueba si la URL ingresada es válida
function isValidUrl(url) {
    try {
        new URL(formatUrl(url));
        return true;
    } catch (e) {
        return false;
    }
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

// Dibuja las categorías en la barra lateral y los desplegables de los formularios
function renderCategories() {
    // 1. Limpiar lista de la barra lateral
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

    // 2. Poblar el menú desplegable del formulario de Enlaces
    selectCategoryDropdown.innerHTML = "";
    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        selectCategoryDropdown.appendChild(option);
    });

    // 3. Renderizar la lista de gestión en el modal de categorías
    manageCategoriesList.innerHTML = "";
    categories.forEach(cat => {
        const item = document.createElement("div");
        item.className = "category-manage-item";

        item.innerHTML = `
            <span>${cat}</span>
            <button class="btn-icon btn-sm btn-danger" onclick="deleteCategory('${cat}')" title="Eliminar Categoría">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        manageCategoriesList.appendChild(item);
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
                <!-- Menú contextual para editar o eliminar -->
                <div class="card-actions-menu">
                    <button class="btn-icon dropdown-trigger" data-id="${link.id}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <div class="dropdown-menu" id="dropdown-${link.id}">
                        <button class="dropdown-item edit-trigger" data-id="${link.id}">
                            <i class="fa-solid fa-pen"></i> Editar
                        </button>
                        <button class="dropdown-item delete-item delete-trigger" data-id="${link.id}">
                            <i class="fa-solid fa-trash-can"></i> Eliminar
                        </button>
                    </div>
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

// Los eventos de las tarjetas se manejan mediante delegación de eventos en el init()

// Cerrar los dropdowns si hacemos click en cualquier parte libre de la página
document.addEventListener("click", () => {
    closeActiveDropdown();
});

// Controla si se abre o se cierra el menú de opciones de una tarjeta
function toggleDropdown(id) {
    if (activeDropdownId === id) {
        closeActiveDropdown();
    } else {
        closeActiveDropdown();
        const dd = document.getElementById(`dropdown-${id}`);
        if (dd) {
            dd.classList.add("show");
            activeDropdownId = id;
        }
    }
}

// Cierra cualquier dropdown abierto
function closeActiveDropdown() {
    if (activeDropdownId) {
        const dd = document.getElementById(`dropdown-${activeDropdownId}`);
        if (dd) {
            dd.classList.remove("show");
        }
        activeDropdownId = null;
    }
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

// Borra un enlace por ID
function deleteLink(id) {
    links = links.filter(link => link.id !== id);
    saveToStorage();
    updateDashboardStats();
    renderCategories();
    renderLinks();
    showToast("Enlace eliminado correctamente", "info");
}

// Abre el modal de confirmación de eliminación
function openConfirmDeleteModal(id) {
    linkIdToDelete = id;
    confirmModal.classList.add("open");
}

// Cierra el modal de confirmación de eliminación
function closeConfirmDeleteModal() {
    confirmModal.classList.remove("open");
    linkIdToDelete = null;
}

// Borra una categoría
function deleteCategory(catName) {
    // Advertir si hay links usando esta categoría
    const matches = links.filter(link => link.category === catName);
    if (matches.length > 0) {
        if (!confirm(`Hay ${matches.length} enlace(s) en esta categoría. Si la eliminas, esos enlaces se moverán a la categoría 'Otros'. ¿Deseas continuar?`)) {
            return;
        }
        // Asignamos la categoría "Otros" a los enlaces huérfanos
        links = links.map(link => {
            if (link.category === catName) {
                return { ...link, category: "Otros" };
            }
            return link;
        });
    }

    // Filtramos la lista de categorías
    categories = categories.filter(c => c !== catName);

    // Si la categoría eliminada era la seleccionada, resetear filtro a "Todos"
    if (currentCategoryFilter === catName) {
        currentCategoryFilter = "all";
        activeCategoryTitle.textContent = "Todos los Enlaces";
    }

    saveToStorage();
    updateDashboardStats();
    renderCategories();
    renderLinks();
    showToast(`Categoría "${catName}" eliminada`, "info");
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
// APERTURA Y CIERRE DE FORMULARIOS EMERGENTES (Modales)
// ==========================================================================

// Prepara y abre el modal para Agregar un Enlace nuevo
function openAddLinkModal() {
    document.getElementById("modal-title").textContent = "Añadir Nuevo Enlace";
    document.getElementById("link-id").value = ""; // ID vacío significa "Creación"
    linkForm.reset();

    // Seleccionar icono gamepad por defecto
    const defaultRadio = document.querySelector('input[name="icon-choice"][value="gamepad"]');
    if (defaultRadio) defaultRadio.checked = true;

    // Selecciona por defecto la categoría en la que estamos navegando
    if (currentCategoryFilter !== "all" && categories.includes(currentCategoryFilter)) {
        selectCategoryDropdown.value = currentCategoryFilter;
    } else if (categories.length > 0) {
        selectCategoryDropdown.value = categories[0];
    }

    linkModal.classList.add("open");
}

// Carga los datos del enlace correspondiente y abre el modal para Editar
function openEditLinkModal(id) {
    const link = links.find(l => l.id === id);
    if (!link) return;

    document.getElementById("modal-title").textContent = "Editar Enlace";
    document.getElementById("link-id").value = link.id;
    document.getElementById("input-title").value = link.title;
    document.getElementById("input-url").value = link.url;
    document.getElementById("select-category").value = link.category;
    document.getElementById("input-size").value = link.size || "";
    document.getElementById("input-description").value = link.description || "";

    // Marca el botón de opción del icono que tenía asignado
    const radio = document.querySelector(`input[name="icon-choice"][value="${link.icon || 'download'}"]`);
    if (radio) {
        radio.checked = true;
    } else {
        const fallbackRadio = document.querySelector('input[name="icon-choice"][value="download"]');
        if (fallbackRadio) fallbackRadio.checked = true;
    }

    linkModal.classList.add("open");
}

// Cierra el modal de enlaces
function closeLinkModal() {
    linkModal.classList.remove("open");
}

// Escuchas para los botones de control del modal
btnAddLink.addEventListener("click", openAddLinkModal);
btnEmptyAdd.addEventListener("click", openAddLinkModal);
closeLinkModalBtn.addEventListener("click", closeLinkModal);
btnCancelLink.addEventListener("click", closeLinkModal);

// Procesar el envío del Formulario de Enlaces (Guardar / Actualizar)
linkForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("link-id").value;
    const title = document.getElementById("input-title").value.trim();
    const rawUrl = document.getElementById("input-url").value.trim();
    const category = document.getElementById("select-category").value;
    const size = document.getElementById("input-size").value.trim();
    const description = document.getElementById("input-description").value.trim();

    // Obtener valor del icono marcado
    const checkedRadio = document.querySelector('input[name="icon-choice"]:checked');
    const icon = checkedRadio ? checkedRadio.value : "download";

    const formattedUrl = formatUrl(rawUrl);

    // Validación de seguridad de enlace
    if (!isValidUrl(formattedUrl)) {
        showToast("Introduce un enlace válido (Ej: https://...)", "error");
        return;
    }

    if (id) {
        // EDICIÓN: Actualizamos el registro correspondiente en la lista
        links = links.map(link => {
            if (link.id === id) {
                return {
                    ...link,
                    title,
                    url: formattedUrl,
                    category,
                    size,
                    description,
                    icon
                };
            }
            return link;
        });
        showToast("Enlace actualizado correctamente");
    } else {
        // CREACIÓN: Insertamos un nuevo registro al inicio
        const newLink = {
            id: 'link_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            title,
            url: formattedUrl,
            category,
            size,
            description,
            icon,
            createdAt: Date.now()
        };
        links.unshift(newLink);
        showToast("Enlace añadido exitosamente");
    }

    // Guardar en la base de datos local y re-renderizar todo
    saveToStorage();
    closeLinkModal();
    updateDashboardStats();
    renderCategories();
    renderLinks();
});

// Modal de gestión de categorías
btnManageCategories.addEventListener("click", () => {
    categoriesModal.classList.add("open");
});

closeCategoriesModalBtn.addEventListener("click", () => {
    categoriesModal.classList.remove("open");
});

// Formulario de agregar nueva categoría
addCategoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newCat = newCategoryNameInput.value.trim();

    if (!newCat) return;

    // Normalizar la primera letra en mayúscula
    const normalizedNewCat = newCat.charAt(0).toUpperCase() + newCat.slice(1);

    // Evitar nombres duplicados
    if (categories.some(c => c.toLowerCase() === normalizedNewCat.toLowerCase())) {
        showToast("Esta categoría ya existe", "error");
        return;
    }

    categories.push(normalizedNewCat);
    saveToStorage();
    newCategoryNameInput.value = "";

    renderCategories();
    showToast(`Categoría "${normalizedNewCat}" creada`);
});

// Cerrar modales si hacemos click por fuera de la tarjeta modal
window.addEventListener("click", (e) => {
    if (e.target === linkModal) {
        closeLinkModal();
    }
    if (e.target === categoriesModal) {
        categoriesModal.classList.remove("open");
    }
    if (e.target === confirmModal) {
        closeConfirmDeleteModal();
    }
});

// Escuchas para el modal de confirmación de eliminación
closeConfirmModalBtn.addEventListener("click", closeConfirmDeleteModal);
btnCancelConfirm.addEventListener("click", closeConfirmDeleteModal);
btnAcceptConfirm.addEventListener("click", () => {
    if (linkIdToDelete) {
        deleteLink(linkIdToDelete);
        closeConfirmDeleteModal();
    }
});

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
    // Si no existen los objetos en localStorage, los inicializamos
    if (!localStorage.getItem("eskay_categories")) {
        localStorage.setItem("eskay_categories", JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem("eskay_links")) {
        localStorage.setItem("eskay_links", JSON.stringify(DEFAULT_LINKS));
    }

    // Delegación de eventos para la cuadrícula de tarjetas
    linksGrid.addEventListener("click", (e) => {
        // Clic en dropdown trigger (tres puntos)
        const dropdownTrigger = e.target.closest(".dropdown-trigger");
        if (dropdownTrigger) {
            e.stopPropagation();
            const id = dropdownTrigger.dataset.id;
            toggleDropdown(id);
            return;
        }

        // Clic en "Editar" enlace
        const editBtn = e.target.closest(".edit-trigger");
        if (editBtn) {
            e.stopPropagation();
            const id = editBtn.dataset.id;
            closeActiveDropdown();
            openEditLinkModal(id);
            return;
        }

        // Clic en "Eliminar" enlace
        const deleteBtn = e.target.closest(".delete-trigger");
        if (deleteBtn) {
            e.stopPropagation();
            const id = deleteBtn.dataset.id;
            closeActiveDropdown();
            openConfirmDeleteModal(id);
            return;
        }

        // Clic en "Copiar" enlace
        const copyBtn = e.target.closest(".btn-copy");
        if (copyBtn) {
            e.stopPropagation();
            const url = copyBtn.dataset.url;
            copyToClipboard(url);
            return;
        }
    });

    updateDashboardStats();
    renderCategories();
    renderLinks();
}

// Iniciar aplicación
init();

// Exportación global de deleteCategory para que los botones inline creados dinámicamente funcionen
window.deleteCategory = deleteCategory;
