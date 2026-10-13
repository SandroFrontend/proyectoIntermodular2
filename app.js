const PRODUCTS = [
  { id: 1, name: "Taladro Percutor 750W", category: "herramientas", price: 89.99, brand: "Bosch", stock: 15, sku: "BOH-TP750", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=450&fit=crop&auto=format", desc: "Taladro de alto rendimiento con función percutora. 750W, portabrocas 13mm. Ideal para obra y bricolaje profesional." },
  { id: 2, name: "Juego de Llaves 24 pzas", category: "herramientas", price: 34.5, brand: "Stanley", stock: 28, sku: "STN-LL24", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=450&fit=crop&auto=format", desc: "Set completo de llaves fijas y combinadas métricas de 6 a 32mm. Acero cromo-vanadio." },
  { id: 3, name: "Sierra Circular 1400W", category: "herramientas", price: 124, brand: "DeWalt", stock: 6, sku: "DWT-SC1400", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=450&fit=crop&auto=format", desc: "Sierra circular de 185mm, 5500rpm, corte máximo 65mm a 90°." },
  { id: 4, name: "Grifo Mezclador Cocina", category: "fontanería", price: 67, brand: "Grohe", stock: 9, sku: "GRH-GMC01", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=450&fit=crop&auto=format", desc: "Grifo monomando cromo con caño giratorio 360°. Cartucho cerámico." },
  { id: 5, name: "Tubo PVC Presión Ø32 2m", category: "fontanería", price: 8.4, brand: "Jimten", stock: 55, sku: "JMT-PVC32", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop&auto=format", desc: "Tubo PVC rígido para instalaciones a presión. DN32, PN16, 2 metros." },
  { id: 6, name: "Cuadro Eléctrico 8 Módulos", category: "electricidad", price: 45, brand: "Schneider", stock: 12, sku: "SCH-CE8M", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&auto=format", desc: "Caja de distribución empotrable IP30. Con puerta y bornes de tierra." },
  { id: 7, name: "Cable Manguera 3×1.5mm 100m", category: "electricidad", price: 58, brand: "Prysmian", stock: 7, sku: "PRY-MNG315", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=450&fit=crop&auto=format", desc: "Cable flexible H05VV-F para instalaciones domésticas. 3 conductores de 1.5mm²." },
  { id: 8, name: "Tornillos Madera 4×30 (200u)", category: "fijación", price: 4.8, brand: "Würth", stock: 350, sku: "WRT-TM430", img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=450&fit=crop&auto=format", desc: "Tornillo para madera con cabeza Torx T20. Acero zincado bicromatado." },
  { id: 9, name: "Taco Químico M12 Epoxi", category: "fijación", price: 12.6, brand: "Hilti", stock: 40, sku: "HLT-TQE12", img: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&h=450&fit=crop&auto=format", desc: "Anclaje químico de epoxi para hormigón fisurado y no fisurado. Cartucho 300ml." },
  { id: 10, name: "Pintura Blanca Mate 15L", category: "pintura", price: 38.9, brand: "Bruguer", stock: 20, sku: "BRG-PBM15", img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=450&fit=crop&auto=format", desc: "Pintura plástica para interior, lavable clase 1. Gran poder cubriente." },
  { id: 11, name: "Esmalte Sintético Gris 750ml", category: "pintura", price: 14.2, brand: "Titanlux", stock: 33, sku: "TTX-ESG750", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=450&fit=crop&auto=format", desc: "Esmalte de acabado brillante para madera y metal. Excelente resistencia exterior." },
  { id: 12, name: "Nivel Láser Autonivelante", category: "herramientas", price: 156, brand: "Leica", stock: 4, sku: "LCA-NLA01", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=450&fit=crop&auto=format", desc: "Nivel láser de líneas cruzadas, autonivelante ±4°. Alcance 30m." },
];

const CATEGORIES = [
  ["all", "Todo"],
  ["herramientas", "Herramientas"],
  ["fontanería", "Fontanería"],
  ["electricidad", "Electricidad"],
  ["fijación", "Fijación"],
  ["pintura", "Pintura"],
];

const ORDERS = [
  { id: "PED-2026-0421", customer: "Ana Ruiz Vega", total: "245.60€", status: "En preparación", date: "Hoy 10:32" },
  { id: "PED-2026-0420", customer: "Luis M. Pereira", total: "89.99€", status: "Enviado", date: "Hoy 09:15" },
  { id: "PED-2026-0419", customer: "Obras del Norte SL", total: "1.240,00€", status: "Pendiente pago", date: "Ayer 17:43" },
  { id: "PED-2026-0418", customer: "Marina García", total: "38.90€", status: "Entregado", date: "Ayer 14:00" },
  { id: "PED-2026-0417", customer: "ConstBuild Pro", total: "567.20€", status: "En preparación", date: "21/09/2026" },
];

const USERS = [
  { id: 1001, name: "Carlos Martínez", email: "carlos@ejemplo.es", phone: "+34 666 123 456", role: "Cliente", orders: 3 },
  { id: 1002, name: "Ana Ruiz Vega", email: "ana.ruiz@gmail.com", phone: "+34 677 234 567", role: "Cliente", orders: 1 },
  { id: 1003, name: "Obras del Norte SL", email: "compras@obranorte.es", phone: "+34 912 345 678", role: "Empresa", orders: 8 },
  { id: 1, name: "Admin FerroMax", email: "admin@ferromax.es", phone: "+34 954 000 123", role: "Admin", orders: 0 },
];

const state = {
  view: "home",
  cart: [],
  search: "",
  category: "all",
  selectedProduct: null,
  menuOpen: false,
  accountTab: "login",
  loggedIn: false,
  quoteSent: false,
  adminTab: "dashboard",
};

const app = document.querySelector("#app");
const money = (value) => `${value.toFixed(2)}€`;
const cartCount = () => state.cart.reduce((sum, item) => sum + item.qty, 0);
const cartTotal = () => state.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function navigate(view) {
  state.view = view;
  state.menuOpen = false;
  state.selectedProduct = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function header() {
  const count = cartCount();
  const links = [
    ["catalog", "Catálogo"],
    ["presupuesto", "Presupuestos"],
    ["account", "Mi Cuenta"],
    ["admin", "Admin"],
  ];
  return `
    <header class="site-header">
      <div class="container header-inner">
        <button class="logo" data-nav="home" aria-label="Ir al inicio">
          <span class="logo-mark">◆</span><span>Ferro<span class="accent">Max</span></span>
        </button>
        <nav class="desktop-nav" aria-label="Navegación principal">
          ${links.map(([view, label]) => `<button class="nav-button ${state.view === view ? "active" : ""}" data-nav="${view}">${label}</button>`).join("")}
        </nav>
        <div class="header-actions">
          <button class="cart-button ${count ? "has-items" : ""}" data-nav="cart">
            Cesta${count ? ` · ${count} art. <span class="cart-total-label">— ${money(cartTotal())}</span>` : ""}
          </button>
          <button class="menu-button" data-action="menu" aria-label="Abrir menú" aria-expanded="${state.menuOpen}">☰</button>
        </div>
      </div>
      <nav class="mobile-nav ${state.menuOpen ? "open" : ""}" aria-label="Navegación móvil">
        ${links.map(([view, label]) => `<button data-nav="${view}">${label}</button>`).join("")}
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <p class="footer-logo">Ferro<span class="accent">Max</span></p>
          <p class="footer-copy">Suministros industriales y ferretería profesional. Sevilla, España.</p>
        </div>
        <div class="footer-columns">
          <div><h3>Legal</h3><p>Aviso Legal</p><p>Política de Privacidad</p><p>Política de Cookies</p><p>RGPD</p></div>
          <div><h3>Contacto</h3><p>info@ferromax.es</p><p>+34 954 000 123</p><p>Lun–Vie 8:00–18:00</p></div>
        </div>
      </div>
      <p class="copyright">© 2026 FerroMax · Todos los derechos reservados · Conexión segura SSL</p>
    </footer>`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image" data-product="${product.id}" role="button" tabindex="0" aria-label="Ver ${escapeHtml(product.name)}">
        <img src="${product.img}" alt="${escapeHtml(product.name)}" />
        ${product.stock <= 8 ? '<span class="badge floating">Últimas unidades</span>' : ""}
      </div>
      <div class="product-body">
        <p class="meta">${escapeHtml(product.brand)} · ${escapeHtml(product.sku)}</p>
        <h3 class="product-name">${escapeHtml(product.name)}</h3>
        <div class="product-actions">
          <span class="price">${money(product.price)}</span>
          <button class="small-button" data-add="${product.id}">+ Añadir</button>
        </div>
        <p class="stock ${product.stock <= 8 ? "low" : ""}">Stock: ${product.stock} ud.</p>
      </div>
    </article>`;
}

function homeView() {
  return `
    <main>
      <section class="hero">
        <img class="hero-image" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1600&h=800&fit=crop&auto=format" alt="Taller de ferretería profesional" />
        <div class="container hero-content">
          <p class="eyebrow">Plataforma profesional</p>
          <h1>Todo lo que necesita<br /><em class="accent">su obra</em>, en un solo lugar.</h1>
          <p class="hero-copy">Catálogo completo de herramientas, materiales y suministros. Stock en tiempo real, pedidos online y solicitud de presupuestos para profesionales.</p>
          <div class="button-row">
            <button class="primary-button" data-nav="catalog">Ver Catálogo</button>
            <button class="secondary-button" data-nav="presupuesto">Solicitar Presupuesto</button>
          </div>
        </div>
      </section>
      <section class="features">
        <div class="container features-grid">
          ${["Stock en tiempo real", "Pago seguro HTTPS/SSL", "Envío en 24/48h", "Presupuestos a medida"].map((text, index) => `<div class="feature"><span class="feature-mark">0${index + 1}</span><span>${text}</span></div>`).join("")}
        </div>
      </section>
      <section class="section container">
        <div class="section-heading"><div><p class="eyebrow">Selección</p><h2 class="section-title">Productos Destacados</h2></div><button class="text-link" data-nav="catalog">Ver todo →</button></div>
        <div class="product-grid">${PRODUCTS.slice(0, 4).map(productCard).join("")}</div>
      </section>
      <section class="section category-section">
        <div class="container">
          <div class="section-heading"><div><p class="eyebrow">Departamentos</p><h2 class="section-title">Navega por Categoría</h2></div></div>
          <div class="category-grid">${CATEGORIES.slice(1).map(([id, label]) => `<button class="category-card" data-category-nav="${id}">${label}</button>`).join("")}</div>
        </div>
      </section>
      ${footer()}
    </main>`;
}

function catalogView() {
  const query = state.search.trim().toLowerCase();
  const products = PRODUCTS.filter((product) => {
    const inCategory = state.category === "all" || product.category === state.category;
    const matches = !query || [product.name, product.brand, product.sku].some((value) => value.toLowerCase().includes(query));
    return inCategory && matches;
  });
  return `
    <main class="page container">
      <p class="eyebrow">Tienda online</p>
      <h1 class="page-title">Catálogo de Productos</h1>
      <div class="catalog-controls">
        <div class="search"><input id="catalog-search" type="search" value="${escapeHtml(state.search)}" placeholder="Buscar por nombre, marca, referencia…" aria-label="Buscar productos" /></div>
        <div class="category-list">${CATEGORIES.map(([id, label]) => `<button class="category-filter ${state.category === id ? "active" : ""}" data-filter="${id}">${label}</button>`).join("")}</div>
      </div>
      <p class="result-count">${products.length} ${products.length === 1 ? "producto encontrado" : "productos encontrados"}</p>
      ${products.length ? `<div class="product-grid">${products.map(productCard).join("")}</div>` : '<div class="empty"><p>No se encontraron productos con esos criterios.</p></div>'}
      ${state.selectedProduct ? productModal(state.selectedProduct) : ""}
    </main>`;
}

function productModal(product) {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-labelledby="product-title">
        <button class="modal-close" data-action="close-modal" aria-label="Cerrar">×</button>
        <img class="modal-image" src="${product.img}" alt="${escapeHtml(product.name)}" />
        <div class="modal-body">
          <p class="eyebrow">${escapeHtml(product.brand)} · ${escapeHtml(product.sku)}</p>
          <h2 id="product-title">${escapeHtml(product.name)}</h2>
          <p class="page-copy">${escapeHtml(product.desc)}</p>
          <p class="price">${money(product.price)}</p>
          <p class="stock ${product.stock <= 8 ? "low" : ""}">${product.stock} unidades en stock</p>
          <button class="primary-button full" data-add="${product.id}" data-close-after>Añadir a la cesta</button>
        </div>
      </article>
    </div>`;
}

function cartView() {
  if (!state.cart.length) {
    return `<main class="page container"><p class="eyebrow">Compra</p><h1 class="page-title">Mi Cesta</h1><div class="empty"><p>La cesta está vacía.</p><button class="primary-button" data-nav="catalog" style="margin-top:1.5rem">Ver Catálogo</button></div></main>`;
  }
  const subtotal = cartTotal();
  const shipping = subtotal > 75 ? 0 : 5.99;
  const tax = (subtotal + shipping) * 0.21;
  return `
    <main class="page container">
      <p class="eyebrow">Compra</p><h1 class="page-title">Mi Cesta</h1>
      <div class="cart-layout">
        <div class="cart-items">
          ${state.cart.map(({ product, qty }) => `
            <article class="cart-item">
              <img src="${product.img}" alt="${escapeHtml(product.name)}" />
              <div><p class="meta">${product.brand}</p><p class="cart-name">${escapeHtml(product.name)}</p><p class="stock">${money(product.price)}/ud.</p></div>
              <div class="quantity"><button class="icon-button" data-qty="${product.id}" data-change="-1">−</button><span>${qty}</span><button class="icon-button" data-qty="${product.id}" data-change="1">+</button></div>
              <div class="line-total"><p class="price">${money(product.price * qty)}</p><button class="text-link" data-remove="${product.id}">Eliminar</button></div>
            </article>`).join("")}
        </div>
        <aside><div class="summary">
          <h2>Resumen del pedido</h2>
          <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="summary-row"><span>Gastos de envío</span><span>${shipping ? money(shipping) : "Gratis"}</span></div>
          <div class="summary-row"><span>IVA (21%)</span><span>${money(tax)}</span></div>
          <div class="summary-total"><strong>Total</strong><span class="price">${money(subtotal + shipping + tax)}</span></div>
          <button class="primary-button full" data-action="checkout">Tramitar Pedido — Pago Seguro</button>
          <p class="payment-methods">Tarjeta · Bizum · PayPal</p>
        </div></aside>
      </div>
    </main>`;
}

function accountView() {
  if (state.loggedIn) {
    const customerOrders = [
      ["PED-2026-0412", "12/09/2026", "3", "134.80€", "Entregado"],
      ["PED-2026-0389", "28/08/2026", "1", "89.99€", "Enviado"],
      ["PED-2026-0341", "05/07/2026", "2", "42.30€", "Entregado"],
    ];
    return `
      <main class="page container">
        <p class="eyebrow">Portal</p><h1 class="page-title">Área de Clientes</h1><p class="page-copy">Bienvenido, <strong>Carlos Martínez</strong></p>
        <div class="stats-grid">
          ${[["3", "Pedidos totales"], ["2", "Direcciones guardadas"], ["3", "Facturas en PDF"]].map(([value, label]) => `<div class="stat-card"><p class="stat-value">${value}</p><p class="stat-label">${label}</p></div>`).join("")}
        </div>
        <div class="admin-heading"><h2>Historial de Pedidos</h2></div>
        <div class="table-wrap"><table><thead><tr>${["Ref. Pedido", "Fecha", "Artículos", "Total", "Estado", "Factura"].map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>
          ${customerOrders.map((order) => `<tr><td class="code">${order[0]}</td><td>${order[1]}</td><td>${order[2]}</td><td>${order[3]}</td><td><span class="badge ${order[4] === "Entregado" ? "success" : "blue"}">${order[4]}</span></td><td><button class="text-link" data-action="download">PDF</button></td></tr>`).join("")}
        </tbody></table></div>
        <button class="text-link" data-action="logout" style="margin-top:2rem">Cerrar sesión</button>
      </main>`;
  }
  const login = state.accountTab === "login";
  return `
    <main class="page container">
      <div class="auth-panel">
        <div style="text-align:center;margin-bottom:2rem"><p class="eyebrow">Portal</p><h1 class="page-title">Área de Clientes</h1></div>
        <div class="tab-list"><button class="tab-button ${login ? "active" : ""}" data-account-tab="login">Iniciar Sesión</button><button class="tab-button ${!login ? "active" : ""}" data-account-tab="register">Registrarse</button></div>
        <div class="panel">
          ${login ? `
            <form id="login-form" class="stack">
              <div><label for="login-email">Email</label><input class="form-control" id="login-email" type="email" value="carlos@ejemplo.es" required /></div>
              <div><label for="login-password">Contraseña</label><input class="form-control" id="login-password" type="password" value="ferromax" required /></div>
              <button class="primary-button full" type="submit">Entrar</button>
            </form>` : `
            <form id="register-form" class="stack">
              <div><label for="register-name">Nombre completo</label><input class="form-control" id="register-name" required /></div>
              <div><label for="register-email">Email</label><input class="form-control" id="register-email" type="email" required /></div>
              <div><label for="register-phone">Teléfono</label><input class="form-control" id="register-phone" type="tel" required /></div>
              <div><label for="register-password">Contraseña</label><input class="form-control" id="register-password" type="password" required /></div>
              <label class="checkbox-label"><input type="checkbox" required /> Acepto la Política de Privacidad y el tratamiento de mis datos conforme al RGPD.</label>
              <button class="primary-button full" type="submit">Crear Cuenta</button>
            </form>`}
        </div>
      </div>
    </main>`;
}

function quoteView() {
  if (state.quoteSent) {
    return `<main class="page container"><div class="success-view"><span class="success-mark">✓</span><h1 class="page-title">Solicitud Enviada</h1><p class="page-copy">Hemos recibido tu solicitud de presupuesto. Nuestro equipo comercial se pondrá en contacto contigo en un plazo máximo de 24 horas laborables.</p><p class="code" style="margin-top:1rem">Ref. solicitud: #SOL-2026-${Math.floor(Math.random() * 9000 + 1000)}</p><button class="secondary-button" data-action="new-quote" style="margin-top:2rem">Nueva solicitud</button></div></main>`;
  }
  return `
    <main class="page container" style="max-width:850px">
      <p class="eyebrow">Clientes profesionales</p><h1 class="page-title">Solicitud de Presupuesto</h1>
      <p class="page-copy" style="margin-bottom:2rem">Para pedidos voluminosos, proyectos de obra o solicitudes especiales. Adjunta tu lista de materiales o despiece y te responderemos en 24h.</p>
      <form id="quote-form" class="panel stack">
        <div class="form-grid">
          <div><label for="quote-name">Nombre completo *</label><input class="form-control" id="quote-name" required /></div>
          <div><label for="quote-company">Empresa / Razón social</label><input class="form-control" id="quote-company" /></div>
          <div><label for="quote-email">Email de contacto *</label><input class="form-control" id="quote-email" type="email" required /></div>
          <div><label for="quote-phone">Teléfono *</label><input class="form-control" id="quote-phone" type="tel" required /></div>
        </div>
        <div><label for="quote-description">Descripción del pedido / proyecto *</label><textarea class="form-control" id="quote-description" required></textarea></div>
        <div><label for="quote-materials">Lista de materiales</label><textarea class="form-control" id="quote-materials"></textarea></div>
        <div><label for="quote-file">Adjuntar despiece / plano</label><div class="upload"><input id="quote-file" type="file" accept=".pdf,.jpg,.jpeg,.png" /><p style="margin-top:.6rem;font-size:.72rem">PDF, JPG, PNG · Máx. 10MB</p></div></div>
        <label class="checkbox-label"><input type="checkbox" required /> Acepto la Política de Privacidad y consiento el tratamiento de mis datos para gestionar esta solicitud.</label>
        <button class="primary-button full" type="submit">Enviar Solicitud de Presupuesto</button>
      </form>
    </main>`;
}

function statusBadge(status) {
  const className = status === "Entregado" ? "success" : status === "Enviado" ? "blue" : status === "Pendiente pago" ? "danger" : "";
  return `<span class="badge ${className}">${status}</span>`;
}

function ordersTable(withShipping = false) {
  const heads = withShipping ? ["Ref.", "Cliente", "Fecha", "Total", "Estado", "Transportista", "Acción"] : ["Referencia", "Cliente", "Fecha", "Total", "Estado", "Acción"];
  return `<div class="table-wrap"><table><thead><tr>${heads.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>
    ${ORDERS.map((order) => `<tr><td class="code">${order.id}</td><td>${order.customer}</td><td>${order.date}</td><td>${order.total}</td><td>${statusBadge(order.status)}</td>${withShipping ? "<td>MRW / GLS</td>" : ""}<td>${withShipping ? `<select class="table-select"><option>Cambiar estado</option><option>En preparación</option><option>Enviado</option><option>Entregado</option><option>Cancelado</option></select>` : '<button class="small-button">Ver</button>'}</td></tr>`).join("")}
  </tbody></table></div>`;
}

function adminContent() {
  if (state.adminTab === "dashboard") {
    const lowStock = PRODUCTS.filter((product) => product.stock <= 8).length;
    return `
      <div class="stats-grid">
        ${[["12", "Productos activos", "+2 esta semana", false], ["7", "Pedidos hoy", "+3 vs. ayer", false], [String(lowStock), "Alertas de stock", "Acción requerida", true], ["12.840€", "Ingresos del mes", "+18% vs. mes anterior", false]].map(([value, label, delta, warning]) => `<div class="stat-card ${warning ? "warning" : ""}"><p class="stat-value">${value}</p><p class="stat-label">${label}</p><p class="stat-delta">${delta}</p></div>`).join("")}
      </div>
      <div class="admin-heading"><h2>Últimos Pedidos</h2></div>${ordersTable()}`;
  }
  if (state.adminTab === "productos") {
    return `<div class="admin-heading"><h2>Gestión de Productos</h2><button class="primary-button" data-action="new-product">+ Nuevo producto</button></div>
      <div class="table-wrap"><table><thead><tr>${["Ref.", "Producto", "Categoría", "Marca", "Precio", "Stock", "Acciones"].map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>
        ${PRODUCTS.map((product) => `<tr><td class="code">${product.sku}</td><td>${product.name}</td><td>${product.category}</td><td>${product.brand}</td><td class="accent">${money(product.price)}</td><td>${statusBadge(product.stock <= 8 ? `${product.stock} ud.` : `${product.stock} ud.`)}</td><td><div class="row-actions"><button class="small-button">Editar</button><button class="small-button">Eliminar</button></div></td></tr>`).join("")}
      </tbody></table></div>`;
  }
  if (state.adminTab === "pedidos") {
    return `<div class="admin-heading"><h2>Control de Pedidos y Envíos</h2></div>${ordersTable(true)}`;
  }
  return `<div class="admin-heading"><h2>Gestión de Usuarios y Permisos</h2></div>
    <div class="table-wrap"><table><thead><tr>${["ID", "Nombre", "Email", "Teléfono", "Rol", "Pedidos", "Estado", "Acciones"].map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>
      ${USERS.map((user) => `<tr><td class="code">#id_${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td><td><span class="badge">${user.role}</span></td><td>${user.orders}</td><td><span class="badge success">Activo</span></td><td><div class="row-actions"><button class="small-button">Editar</button>${user.role !== "Admin" ? '<button class="small-button">Bloquear</button>' : ""}</div></td></tr>`).join("")}
    </tbody></table></div>`;
}

function adminView() {
  const tabs = [["dashboard", "Dashboard"], ["productos", "Productos"], ["pedidos", "Pedidos"], ["usuarios", "Usuarios"]];
  return `
    <main class="page container">
      <p class="eyebrow">Gestión</p><h1 class="page-title">Panel de Administración</h1>
      <div class="admin-tabs">${tabs.map(([id, label]) => `<button class="admin-tab ${state.adminTab === id ? "active" : ""}" data-admin-tab="${id}">${label}</button>`).join("")}</div>
      <section style="padding-top:2rem">${adminContent()}</section>
    </main>`;
}

function render() {
  const views = { home: homeView, catalog: catalogView, cart: cartView, account: accountView, presupuesto: quoteView, admin: adminView };
  app.innerHTML = `${header()}${views[state.view]()}`;
}

function addToCart(id) {
  const product = PRODUCTS.find((item) => item.id === Number(id));
  const existing = state.cart.find((item) => item.product.id === product.id);
  if (existing) existing.qty += 1;
  else state.cart.push({ product, qty: 1 });
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-product], [data-action], [data-category-nav]");
  if (!target) return;
  if (target.dataset.nav) return navigate(target.dataset.nav);
  if (target.dataset.action === "menu") {
    state.menuOpen = !state.menuOpen;
    return render();
  }
  if (target.dataset.categoryNav) {
    state.category = target.dataset.categoryNav;
    return navigate("catalog");
  }
  if (target.dataset.filter) {
    state.category = target.dataset.filter;
    return render();
  }
  if (target.dataset.product) {
    state.selectedProduct = PRODUCTS.find((item) => item.id === Number(target.dataset.product));
    return render();
  }
  if (target.dataset.add) {
    addToCart(target.dataset.add);
    if (target.hasAttribute("data-close-after")) state.selectedProduct = null;
    return render();
  }
  if (target.dataset.action === "close-modal") {
    if (event.target.closest(".modal") && !event.target.closest(".modal-close")) return;
    state.selectedProduct = null;
    return render();
  }
  if (target.dataset.qty) {
    const item = state.cart.find((entry) => entry.product.id === Number(target.dataset.qty));
    item.qty += Number(target.dataset.change);
    if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry !== item);
    return render();
  }
  if (target.dataset.remove) {
    state.cart = state.cart.filter((entry) => entry.product.id !== Number(target.dataset.remove));
    return render();
  }
  if (target.dataset.accountTab) {
    state.accountTab = target.dataset.accountTab;
    return render();
  }
  if (target.dataset.adminTab) {
    state.adminTab = target.dataset.adminTab;
    return render();
  }
  if (target.dataset.action === "logout") {
    state.loggedIn = false;
    return render();
  }
  if (target.dataset.action === "new-quote") {
    state.quoteSent = false;
    return render();
  }
  if (target.dataset.action === "checkout") {
    window.alert("Pasarela de pago simulada. La exportación está lista para conectar con el TPV elegido.");
  }
  if (target.dataset.action === "download") {
    window.alert("Descarga de factura simulada.");
  }
  if (target.dataset.action === "new-product") {
    window.alert("Formulario de alta de producto simulado.");
  }
});

app.addEventListener("input", (event) => {
  if (event.target.id !== "catalog-search") return;
  state.search = event.target.value;
  const cursor = event.target.selectionStart;
  render();
  const input = document.querySelector("#catalog-search");
  input.focus();
  input.setSelectionRange(cursor, cursor);
});

app.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id === "login-form" || event.target.id === "register-form") {
    state.loggedIn = true;
    render();
  }
  if (event.target.id === "quote-form") {
    state.quoteSent = true;
    render();
  }
});

render();
