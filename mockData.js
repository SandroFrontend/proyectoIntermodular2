export const PRODUCTS = [
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

export const CATEGORIES = [
  ["all", "Todo"],
  ["herramientas", "Herramientas"],
  ["fontanería", "Fontanería"],
  ["electricidad", "Electricidad"],
  ["fijación", "Fijación"],
  ["pintura", "Pintura"],
];

export const ORDERS = [
  { id: "PED-2026-0421", customer: "Ana Ruiz Vega", total: "245.60€", status: "En preparación", date: "Hoy 10:32" },
  { id: "PED-2026-0420", customer: "Luis M. Pereira", total: "89.99€", status: "Enviado", date: "Hoy 09:15" },
  { id: "PED-2026-0419", customer: "Obras del Norte SL", total: "1.240,00€", status: "Pendiente pago", date: "Ayer 17:43" },
  { id: "PED-2026-0418", customer: "Marina García", total: "38.90€", status: "Entregado", date: "Ayer 14:00" },
  { id: "PED-2026-0417", customer: "ConstBuild Pro", total: "567.20€", status: "En preparación", date: "21/09/2026" },
];

export const USERS = [
  { id: 1001, name: "Carlos Martínez", email: "carlos@ejemplo.es", phone: "+34 666 123 456", role: "Cliente", orders: 3 },
  { id: 1002, name: "Ana Ruiz Vega", email: "ana.ruiz@gmail.com", phone: "+34 677 234 567", role: "Cliente", orders: 1 },
  { id: 1003, name: "Obras del Norte SL", email: "compras@obranorte.es", phone: "+34 912 345 678", role: "Empresa", orders: 8 },
  { id: 1, name: "Admin FerroMax", email: "admin@ferromax.es", phone: "+34 954 000 123", role: "Admin", orders: 0 },
];

export const STATS = [
  { id: 1, value: "12", label: "Productos activos", delta: "+2 esta semana", warning: false },
  { id: 2, value: "7", label: "Pedidos hoy", delta: "+3 vs. ayer", warning: false },
  { id: 3, value: "3", label: "Alertas de stock", delta: "Acción requerida", warning: true },
  { id: 4, value: "12.840€", label: "Ingresos del mes", delta: "+18% vs. mes anterior", warning: false }
];