/* ===========================================================
   Senjed Afghan Catering — menu + order builder
   To change a price or dish, edit the MENU list below.
   s = small tray price, l = large tray price (null = not offered)
   =========================================================== */

const PHONE_US = "18593121370";

const CATEGORIES = [
  { id: "all",      label: "All Dishes" },
  { id: "rice",     label: "Rice & Pulao" },
  { id: "stews",    label: "Stews & Curries" },
  { id: "kebabs",   label: "Kebabs" },
  { id: "bites",    label: "Dumplings & Bites" },
  { id: "veg",      label: "Veggies & Sides" },
  { id: "soups",    label: "Soups & Salads" },
  { id: "desserts", label: "Desserts" },
];

const MENU = [
  // Rice & Pulao
  { id: "kabuli-pulao-beef", cat: "rice", name: "Kabuli Pulao with Beef", desc: "Afghanistan's national dish: seasoned rice with tender beef, sweet carrots and raisins.", s: 85, l: 160 },
  { id: "kabuli-pulao-lamb", cat: "rice", name: "Kabuli Pulao with Lamb", desc: "Our signature pulao made with slow-cooked lamb, carrots, raisins and almonds.", s: 90, l: 185 },
  { id: "lamb-shank-pulao", cat: "rice", name: "Lamb Shank Pulao", desc: "Whole fall-off-the-bone lamb shanks served over fragrant Kabuli rice.", s: 100, l: 200 },
  { id: "chalaw", cat: "rice", name: "Chalaw", alt: "Barberry pulao & plain rice", desc: "Fluffy white rice topped with saffron and tangy barberries.", s: 50, l: 90 },
  { id: "lamb-biryani", cat: "rice", name: "Lamb / Beef Biryani", desc: "Layered spiced rice with tender meat, herbs and fried onions.", s: 90, l: 185 },
  { id: "chicken-biryani", cat: "rice", name: "Chicken Biryani", desc: "Aromatic basmati rice layered with spiced chicken.", s: 70, l: 140 },

  // Stews & Curries
  { id: "dopiaza-lamb", cat: "stews", name: "Dopiaza with Lamb", desc: "Classic Afghan lamb cooked with plenty of onions and a tangy vinegar finish.", s: 95, l: 200 },
  { id: "dopiaza-beef", cat: "stews", name: "Dopiaza with Beef", desc: "Tender beef with sweet and pickled onions, Afghan style.", s: 90, l: 180 },
  { id: "kofta", cat: "stews", name: "Kofta", alt: "Meatballs", desc: "Spiced meatballs simmered in a rich tomato sauce with split peas.", s: 70, l: 130 },
  { id: "beef-curry", cat: "stews", name: "Beef Curry", desc: "Slow-cooked beef in a deep, aromatic tomato and onion gravy.", s: 85, l: 180 },
  { id: "lamb-curry", cat: "stews", name: "Lamb Curry", desc: "Tender lamb in a warmly spiced, herb-rich sauce.", s: 95, l: 195 },
  { id: "chicken-curry", cat: "stews", name: "Chicken Curry", desc: "Chicken cooked in a flavorful tomato and spice gravy.", s: 70, l: 140 },

  // Kebabs
  { id: "shami-kebab", cat: "kebabs", name: "Shami Kebab", alt: "Beef or chicken", desc: "Soft, golden patties of minced meat, lentils and spices.", s: 85, l: 165 },
  { id: "chapli-kebab", cat: "kebabs", name: "Chapli Kebab", desc: "Crispy, flat spiced minced-meat kebabs, a street-food favorite.", s: 85, l: 165 },
  { id: "chicken-kebab", cat: "kebabs", name: "Chicken Breast Kebab", desc: "Marinated chicken breast skewers grilled with peppers and onions.", s: 70, l: 150 },
  { id: "salmon-kebab", cat: "kebabs", name: "Salmon Kebab", desc: "Seasoned salmon fillets grilled until flaky and caramelized.", s: 100, l: 200 },
  { id: "seekh-kebab", cat: "kebabs", name: "Seekh / Adana Kebab", desc: "Juicy skewered minced-meat kebabs with herbs and spices.", s: 90, l: 185 },
  { id: "lola-kebab", cat: "kebabs", name: "Lola Kebab", desc: "Spiced minced-meat kebab wrapped around boiled eggs, a beautiful party platter.", s: 90, l: 185 },
  { id: "shawarma", cat: "kebabs", name: "Shawarma", desc: "Marinated meat wrapped in flatbread with fresh vegetables and sauce.", s: 70, l: 130 },

  // Dumplings & Bites
  { id: "mantu", cat: "bites", name: "Mantu", alt: "Meat dumplings", desc: "Steamed dumplings filled with spiced meat and onion, topped with yogurt and sauce.", s: 60, l: 110 },
  { id: "ashak", cat: "bites", name: "Ashak", alt: "Vegetable dumplings", desc: "Delicate leek-and-scallion dumplings with garlic yogurt and mint.", s: 55, l: 100 },
  { id: "bolani", cat: "bites", name: "Bolani", desc: "Thin, crispy stuffed flatbreads served with a cool yogurt dip.", s: 80, l: 165 },
  { id: "spring-rolls", cat: "bites", name: "Spring Rolls", desc: "Golden, crunchy rolls with a savory filling.", s: 70, l: 145 },
  { id: "samosa", cat: "bites", name: "Samosa", desc: "Crisp triangular pastries with a spiced filling.", s: 60, l: 125 },
  { id: "pani-puri", cat: "bites", name: "Pani Puri", desc: "Hollow crispy puris filled with a tangy, spiced water and fillings.", s: 45, l: 85 },

  // Veggies & Sides
  { id: "bamya", cat: "veg", name: "Bamya", alt: "Okra", desc: "Tender okra cooked with tomatoes, onions and spices.", s: 40, l: 85 },
  { id: "borani-baadenjan", cat: "veg", name: "Borani Baadenjan", alt: "Eggplant", desc: "Fried eggplant in tomato sauce, topped with garlic yogurt.", s: 40, l: 85 },
  { id: "veg-pakawra", cat: "veg", name: "Mixed Veg Pakawra", desc: "Crispy vegetable fritters in a seasoned chickpea batter.", s: 40, l: 85 },
  { id: "potato-pakawra", cat: "veg", name: "Potato / Eggplant Pakawra", desc: "Sliced potato or eggplant fried golden in spiced batter.", s: 40, l: 85 },
  { id: "paratha", cat: "veg", name: "Paratha", desc: "Flaky, buttery layered flatbread.", s: 45, l: 85 },

  // Soups & Salads
  { id: "chicken-soup", cat: "soups", name: "Chicken / Vegetable Soup", desc: "A warm, comforting soup with vegetables and herbs.", s: 50, l: 100 },
  { id: "lentil-soup", cat: "soups", name: "Lentil Soup", desc: "Smooth, hearty lentil soup with a squeeze of lemon.", s: 45, l: 85 },
  { id: "green-salad", cat: "soups", name: "Seasonal Mixed Green Salad", desc: "Fresh seasonal greens and vegetables with a light dressing.", s: 40, l: 70 },
  { id: "fruit-salad", cat: "soups", name: "Seasonal Mixed Fruit Salad", desc: "A colorful bowl of fresh seasonal fruit.", s: 70, l: 165 },

  // Desserts (small tray only)
  { id: "shir-berenj", cat: "desserts", name: "Shir Berenj", alt: "Rice pudding", desc: "Creamy Afghan rice pudding scented with cardamom and rosewater.", s: 50, l: null },
  { id: "fereni", cat: "desserts", name: "Fereni", desc: "Silky milk pudding topped with pistachios and rose petals.", s: 50, l: null },
  { id: "sheer-khurma", cat: "desserts", name: "Sheer Khurma", desc: "Sweet vermicelli milk dessert with dates and nuts.", s: 60, l: null },
  { id: "gulab-jamun", cat: "desserts", name: "Gulab Jamun", desc: "Soft milk dumplings soaked in fragrant sugar syrup.", s: 60, l: null },
  { id: "baklava", cat: "desserts", name: "Baklava", desc: "Layers of flaky pastry, nuts and honey syrup.", s: 65, l: null },
  { id: "chocolate-kolcha", cat: "desserts", name: "Chocolate Kolcha", desc: "Homemade Afghan cookies with a chocolate twist.", s: 50, l: null },
  { id: "kolcha-gulshirin", cat: "desserts", name: "Kolcha Gulshirin", alt: "Gül tatlısı", desc: "Rose-shaped pastries soaked in syrup and topped with pistachio.", s: 65, l: null },
  { id: "gosh-e-fil", cat: "desserts", name: "Gosh-e Fil", alt: "Elephant ears", desc: "Crispy fried pastry dusted with powdered sugar and pistachio.", s: 40, l: null },
  { id: "cake-e-tar", cat: "desserts", name: "Cake-e Tar", alt: "Moist chocolate cake", desc: "Rich, moist chocolate cake with a glossy topping.", s: 50, l: null },
  { id: "biscuit-cake", cat: "desserts", name: "Terasimo / Biscuit Cake", desc: "No-bake chocolate biscuit cake, perfect with tea.", s: 50, l: null },
  { id: "keshmeshi-cake", cat: "desserts", name: "Keshmeshi Afghani Cake", alt: "Raisin cake / simple cake", desc: "Classic Afghan raisin loaf cake, lightly sweet.", s: 45, l: null },
];

const $ = (sel) => document.querySelector(sel);
const money = (n) => "$" + n.toLocaleString("en-US");
const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || "";

/* ---------- Render filters ---------- */
const filtersEl = $("#filters");
let activeCat = "all";

CATEGORIES.forEach((c) => {
  const b = document.createElement("button");
  b.className = "filter";
  b.type = "button";
  b.setAttribute("role", "tab");
  b.dataset.cat = c.id;
  b.setAttribute("aria-selected", c.id === activeCat ? "true" : "false");
  const count = c.id === "all" ? MENU.length : MENU.filter((d) => d.cat === c.id).length;
  b.innerHTML = `<span class="dot"></span>${c.label} <small style="opacity:.7">${count}</small>`;
  b.addEventListener("click", () => {
    activeCat = c.id;
    filtersEl.querySelectorAll(".filter").forEach((f) => f.setAttribute("aria-selected", f.dataset.cat === c.id ? "true" : "false"));
    renderMenu();
  });
  filtersEl.appendChild(b);
});

/* ---------- Render menu ---------- */
const grid = $("#menuGrid");

function priceRow(d, size) {
  const price = size === "s" ? d.s : d.l;
  if (price == null) return "";
  const label = size === "s" ? "Small tray" : "Large tray";
  const serves = size === "s" ? "serves 8–10" : "serves 15–20";
  return `
    <div class="price-row">
      <span class="size">${label}<small>${serves}</small></span>
      <span class="amt">${money(price)}</span>
      <button class="add-btn" type="button" data-id="${d.id}" data-size="${size}" aria-label="Add ${label.toLowerCase()} of ${d.name}">+ Add</button>
    </div>`;
}

function renderMenu() {
  const items = activeCat === "all" ? MENU : MENU.filter((d) => d.cat === activeCat);
  grid.innerHTML = items
    .map(
      (d, i) => `
    <article class="dish" data-cat="${d.cat}" style="animation-delay:${Math.min(i, 12) * 30}ms">
      <div class="dish-img">
        <img src="images/${d.id}.jpg" alt="${d.name}" loading="lazy" width="400" height="300">
        <span class="dish-tag">${catLabel(d.cat)}</span>
      </div>
      <div class="dish-body">
        <h3>${d.name}</h3>
        ${d.alt ? `<p class="dish-alt">${d.alt}</p>` : ""}
        <p class="dish-desc">${d.desc}</p>
        <div class="prices">${priceRow(d, "s")}${priceRow(d, "l")}</div>
      </div>
    </article>`
    )
    .join("");
}
renderMenu();

/* ---------- Order (saved in this browser only) ---------- */
let order = [];
try { order = JSON.parse(localStorage.getItem("senjedOrder") || "[]"); } catch (e) { order = []; }
const save = () => { try { localStorage.setItem("senjedOrder", JSON.stringify(order)); } catch (e) {} };

const findDish = (id) => MENU.find((d) => d.id === id);
const lineKey = (id, size) => id + ":" + size;
const lineTotal = (l) => (l.size === "s" ? findDish(l.id).s : findDish(l.id).l) * l.qty;
const orderTotal = () => order.reduce((t, l) => t + lineTotal(l), 0);
const orderCount = () => order.reduce((t, l) => t + l.qty, 0);

function addItem(id, size) {
  const k = lineKey(id, size);
  const existing = order.find((l) => lineKey(l.id, l.size) === k);
  if (existing) existing.qty++;
  else order.push({ id, size, qty: 1 });
  save();
  updateOrderUI();
  toast(`Added ${size === "s" ? "small" : "large"} tray of ${findDish(id).name}`);
}

function changeQty(key, delta) {
  const line = order.find((l) => lineKey(l.id, l.size) === key);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) order = order.filter((l) => l !== line);
  save();
  updateOrderUI();
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addItem(btn.dataset.id, btn.dataset.size);
  btn.classList.add("added");
  btn.textContent = "✓ Added";
  setTimeout(() => { btn.classList.remove("added"); btn.textContent = "+ Add"; }, 1200);
});

const orderBar = $("#orderBar");
const drawer = $("#drawer");
const backdrop = $("#backdrop");
const list = $("#orderList");

function updateOrderUI() {
  const count = orderCount();
  orderBar.hidden = count === 0;
  $("#obCount").textContent = count;
  $("#obTotal").textContent = money(orderTotal());
  $("#drawerTotal").textContent = money(orderTotal());
  $("#orderEmpty").hidden = count > 0;

  list.innerHTML = order
    .map((l) => {
      const d = findDish(l.id);
      const k = lineKey(l.id, l.size);
      return `
      <li class="order-item">
        <img src="images/${d.id}.jpg" alt="">
        <div>
          <div class="oi-name">${d.name}</div>
          <div class="oi-meta">${l.size === "s" ? "Small" : "Large"} tray · ${money(lineTotal(l))}</div>
        </div>
        <div class="qty">
          <button type="button" data-key="${k}" data-d="-1" aria-label="Remove one">−</button>
          <span>${l.qty}</span>
          <button type="button" data-key="${k}" data-d="1" aria-label="Add one">+</button>
        </div>
      </li>`;
    })
    .join("");
  updateLinks();
}

list.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-key]");
  if (b) changeQty(b.dataset.key, Number(b.dataset.d));
});

function buildMessage() {
  const lines = order.map((l) => {
    const d = findDish(l.id);
    return `• ${l.qty} × ${d.name} (${l.size === "s" ? "small" : "large"} tray)`;
  });
  const name = $("#oName").value.trim();
  const date = $("#oDate").value;
  const notes = $("#oNotes").value.trim();
  let msg = `Hi Senjed! I'd like to place a catering order:\n\n${lines.join("\n")}\n\nEstimated total: ${money(orderTotal())}`;
  if (date) msg += `\nEvent date: ${date}`;
  if (notes) msg += `\nNotes: ${notes}`;
  if (name) msg += `\n\nThank you, ${name}`;
  return msg;
}

function updateLinks() {
  const msg = encodeURIComponent(buildMessage());
  $("#sendSms").href = `sms:+${PHONE_US}?&body=${msg}`;
  $("#sendWa").href = `https://wa.me/${PHONE_US}?text=${msg}`;
}
["#oName", "#oDate", "#oNotes"].forEach((s) => $(s).addEventListener("input", updateLinks));

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  $("#closeDrawer").focus();
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.style.overflow = "";
}
orderBar.addEventListener("click", openDrawer);
$("#closeDrawer").addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
$("#clearOrder").addEventListener("click", () => { order = []; save(); updateOrderUI(); });

/* ---------- Toast ---------- */
let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------- Mobile nav ---------- */
const toggle = $("#menuToggle");
const nav = $("#nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
});

$("#year").textContent = new Date().getFullYear();
updateOrderUI();
