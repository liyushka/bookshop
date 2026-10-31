// Master Application Script for FOLIO Editorial Bookshop

// --- Database ---
const BOOKS = [
  {
    id: 1,
    title: "Design Systems & Aesthetics",
    author: "Josef Müller-Brockmann",
    price: 3200,
    genre: "design",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Бытие и Время: Рефлексия",
    author: "Мартин Хайдеггер",
    price: 2800,
    genre: "philosophy",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Швейцарская Школа Типографики",
    author: "Эмиль Рудер",
    price: 4100,
    genre: "design",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Архитектура Текста",
    author: "Умберто Эко",
    price: 2400,
    genre: "fiction",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Критика Чистого Разума",
    author: "Иммануил Кант",
    price: 3500,
    genre: "philosophy",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Модулор и Пропорции",
    author: "Ле Корбюзье",
    price: 3900,
    genre: "design",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800"
  }
];

// --- i18n Translations Dictionary ---
const TRANSLATIONS = {
  ru: {
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_about: "О нас",
    nav_favorites: "Избранное",
    nav_contacts: "Контакты",
    cart_title: "Корзина",
    cart_total: "Итого:",
    cart_checkout: "Оформить заказ",
    hero_badge: "Новая коллекция 2026",
    hero_title1: "Искусство",
    hero_title2: "Печатного Слова",
    hero_subtitle: "Кураторская подборка редких изданий, философии, дизайна и вневременной художественной литературы.",
    hero_cta: "Исследовать каталог",
    hero_secondary: "О концепции",
    botm_tag: "Книга месяца",
    featured_subtitle: "Избранное каталога",
    featured_title: "Популярные издания",
    view_all: "Смотреть все →",
    add_to_cart: "В корзину",
    cat_title: "Каталог Изданий",
    cat_subtitle: "Полное собрание художественной литературы, книг по дизайну и философии.",
    filter_all: "Все",
    filter_fiction: "Художественная",
    filter_design: "Дизайн",
    filter_philosophy: "Философия",
    sort_default: "По умолчанию",
    sort_price_asc: "Цена: по возрастанию",
    sort_price_desc: "Цена: по убыванию",
    sort_rating: "По рейтингу",
    fav_title: "Сохраненные Издания",
    fav_subtitle: "Ваша личная подборка для последующего чтения или покупки."
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_catalog: "Katalog",
    nav_about: "Biz haqimizda",
    nav_favorites: "Tanlanganlar",
    nav_contacts: "Aloqa",
    cart_title: "Savat",
    cart_total: "Jami:",
    cart_checkout: "Buyurtma berish",
    hero_badge: "Yangi kolleksiya 2026",
    hero_title1: "Chop Etilgan",
    hero_title2: "So'z San'ati",
    hero_subtitle: "Nodir nashrlar, falsafa, dizayn va adabiyotlarning saralangan to'plami.",
    hero_cta: "Katalogni ko'rish",
    hero_secondary: "Konsepsiya",
    botm_tag: "Oynig kitobi",
    featured_subtitle: "Saralanganlar",
    featured_title: "Ommabop nashrlar",
    view_all: "Barchasini ko'rish →",
    add_to_cart: "Savatga",
    cat_title: "Nashrlar Katalogi",
    cat_subtitle: "Dizayn, falsafa va badiiy adabiyotlarning to'liq to'plami.",
    filter_all: "Barchasi",
    filter_fiction: "Badiiy",
    filter_design: "Dizayn",
    filter_philosophy: "Falsafa",
    sort_default: "Boshlang'ich",
    sort_price_asc: "Narx: arzonroq",
    sort_price_desc: "Narx: qimmatroq",
    sort_rating: "Reyting bo'yicha",
    fav_title: "Saqlangan Nashrlar",
    fav_subtitle: "Sizning shaxsiy tanlangan kitoblaringiz."
  },
  en: {
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_about: "About",
    nav_favorites: "Favorites",
    nav_contacts: "Contacts",
    cart_title: "Cart",
    cart_total: "Total:",
    cart_checkout: "Checkout",
    hero_badge: "New Collection 2026",
    hero_title1: "The Art of",
    hero_title2: "Printed Word",
    hero_subtitle: "Curated selection of rare editions, philosophy, design, and timeless literature.",
    hero_cta: "Explore Catalog",
    hero_secondary: "About Concept",
    botm_tag: "Book of the Month",
    featured_subtitle: "Catalog Highlights",
    featured_title: "Popular Publications",
    view_all: "View All →",
    add_to_cart: "Add to Cart",
    cat_title: "Publication Catalog",
    cat_subtitle: "Complete collection of fiction, design, and philosophy books.",
    filter_all: "All",
    filter_fiction: "Fiction",
    filter_design: "Design",
    filter_philosophy: "Philosophy",
    sort_default: "Default",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_rating: "Top Rated",
    fav_title: "Saved Editions",
    fav_subtitle: "Your personal selection for future reading or purchase."
  }
};

// --- Application State ---
let cart = JSON.parse(localStorage.getItem('folio_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('folio_favs')) || [];
let currentLang = localStorage.getItem('folio_lang') || 'ru';
let currentTheme = localStorage.getItem('folio_theme') || 'dark';

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCartDrawer();
  updateCounters();

  // Route-specific renderers
  if (document.getElementById('bestsellers-grid')) renderBestsellers();
  if (document.getElementById('catalog-grid')) initCatalogPage();
  if (document.getElementById('favorites-grid')) renderFavoritesPage();
  if (document.getElementById('contact-form')) initContactForm();
});

// --- Theme Controller ---
function initTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-sun');
  const moonIcon = document.getElementById('theme-moon');

  if (currentTheme === 'light') {
    body.classList.remove('dark');
    body.classList.add('light');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('folio_theme', 'light');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
      } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('folio_theme', 'dark');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
      }
    });
  }
}

// --- Multi-Language Controller ---
function initLanguage() {
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      localStorage.setItem('folio_lang', currentLang);
      applyTranslations();
    });
  }
  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });
}

// --- Cart Drawer Logic ---
function initCartDrawer() {
  const cartBtn = document.getElementById('cart-toggle-btn');
  const closeBtn = document.getElementById('cart-close-btn');
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  const content = document.getElementById('cart-content');

  const openCart = () => {
    renderCartItems();
    drawer.classList.remove('pointer-events-none', 'opacity-0');
    content.classList.remove('translate-x-full');
  };

  const closeCart = () => {
    content.classList.add('translate-x-full');
    drawer.classList.add('opacity-0');
    setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
  };

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);
}

function addToCart(id, title, price, image) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, title, price, image, qty: 1 });
  }
  saveCart();
  renderCartItems();
  
  // Open cart drawer immediately upon adding
  document.getElementById('cart-toggle-btn')?.click();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCartItems();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
  }
  saveCart();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('folio_cart', JSON.stringify(cart));
  updateCounters();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-neutral-500 text-xs font-mono text-center py-12">Ваша корзина пуста</p>`;
    if (totalPriceEl) totalPriceEl.textContent = '0 ₽';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `
      <div class="flex items-center gap-4 bg-[#1A1A1E] dark:bg-[#1A1A1E] light:bg-white border border-neutral-800 p-3">
        <img src="${item.image}" class="w-12 h-16 object-cover bg-neutral-900">
        <div class="flex-grow min-w-0">
          <h4 class="font-serif text-xs font-bold truncate">${item.title}</h4>
          <p class="text-[#C84B31] font-mono text-xs mt-1">${item.price.toLocaleString()} ₽</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="updateCartQty(${item.id}, -1)" class="w-5 h-5 bg-neutral-800 text-white font-mono text-xs flex items-center justify-center">-</button>
            <span class="font-mono text-xs">${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)" class="w-5 h-5 bg-neutral-800 text-white font-mono text-xs flex items-center justify-center">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})" class="text-neutral-500 hover:text-[#C84B31] p-1">&times;</button>
      </div>
    `;
  }).join('');

  if (totalPriceEl) totalPriceEl.textContent = `${total.toLocaleString()} ₽`;
}

function checkout() {
  if (cart.length === 0) return alert('Корзина пуста');
  alert('Заказ успешно оформлен! Наш куратор свяжется с вами.');
  cart = [];
  saveCart();
  renderCartItems();
  document.getElementById('cart-close-btn')?.click();
}

// --- Favorites Logic ---
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('folio_favs', JSON.stringify(favorites));
  updateCounters();

  if (document.getElementById('catalog-grid')) initCatalogPage();
  if (document.getElementById('bestsellers-grid')) renderBestsellers();
  if (document.getElementById('favorites-grid')) renderFavoritesPage();
}

function updateCounters() {
  const cartCount = document.getElementById('cart-count');
  const favCount = document.getElementById('fav-count');

  if (cartCount) {
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCount.textContent = totalQty;
  }
  if (favCount) {
    favCount.textContent = favorites.length;
  }
}

// --- Book Card Component Renderer ---
function createBookCard(book) {
  const isFav = favorites.includes(book.id);
  return `
    <div class="tilt-card bg-[#1A1A1E] border border-neutral-800 p-4 flex flex-col justify-between relative group">
      <button onclick="toggleFavorite(${book.id})" class="absolute top-6 right-6 z-10 p-2 bg-black/60 backdrop-blur-md text-white hover:text-[#C84B31] transition-colors">
        <svg class="w-4 h-4 ${isFav ? 'fill-[#C84B31] text-[#C84B31]' : 'fill-none stroke-currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </button>

      <div class="aspect-[3/4] bg-neutral-900 overflow-hidden mb-4 relative">
        <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      </div>

      <div class="space-y-2 flex-grow flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-mono text-[#C84B31] uppercase tracking-widest">${book.genre}</span>
          <h3 class="font-serif font-bold text-base mt-0.5 line-clamp-1">${book.title}</h3>
          <p class="text-neutral-400 text-xs">${book.author}</p>
        </div>

        <div class="pt-4 border-t border-neutral-800 flex items-center justify-between mt-4">
          <span class="font-mono text-sm font-bold text-[#C84B31]">${book.price.toLocaleString()} ₽</span>
          <button onclick="addToCart(${book.id}, '${book.title.replace(/'/g, "\\'")}', ${book.price}, '${book.image}')" class="bg-[#C84B31] text-white text-[10px] font-semibold px-3 py-2 uppercase tracking-wider hover:bg-neutral-800 transition-colors">
            + Корзина
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- Page Renderers ---
function renderBestsellers() {
  const container = document.getElementById('bestsellers-grid');
  if (!container) return;
  const bestsellers = BOOKS.slice(0, 4);
  container.innerHTML = bestsellers.map(book => createBookCard(book)).join('');
}

function initCatalogPage() {
  const container = document.getElementById('catalog-grid');
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('catalog-sort');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container) return;

  let currentGenre = 'all';
  let searchQuery = '';
  let currentSort = 'default';

  function filterAndRender() {
    let filtered = BOOKS.filter(book => {
      const matchesGenre = currentGenre === 'all' || book.genre === currentGenre;
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    container.innerHTML = filtered.length > 0 
      ? filtered.map(book => createBookCard(book)).join('')
      : `<div class="col-span-full text-center py-12 text-neutral-500 font-mono text-xs">Издания не найдены</div>`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      e.target.classList.add('active-filter');
      currentGenre = e.target.getAttribute('data-genre');
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}

function renderFavoritesPage() {
  const container = document.getElementById('favorites-grid');
  if (!container) return;

  const favBooks = BOOKS.filter(book => favorites.includes(book.id));

  if (favBooks.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 text-neutral-500 space-y-4">
        <p class="font-mono text-xs uppercase tracking-widest">Список избранного пуст</p>
        <a href="catalog.html" class="inline-block bg-[#C84B31] text-white text-xs font-semibold px-6 py-3 uppercase tracking-widest">Перейти в каталог</a>
      </div>
    `;
    return;
  }

  container.innerHTML = favBooks.map(book => createBookCard(book)).join('');
}

// --- Telegram Bot Integration ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const contact = document.getElementById('form-contact').value;
    const message = document.getElementById('form-message').value;

    status.classList.remove('hidden', 'text-green-500', 'text-red-500');
    status.textContent = 'Отправка...';

    // Telegram Bot Integration Details
    const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; 
    const CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

    const text = `📚 *Новая заявка FOLIO BOOKSHOP*\n\n👤 *Имя:* ${name}\n📞 *Контакт:* ${contact}\n💬 *Сообщение:* ${message}`;

    try {
      if (BOT_TOKEN === 'YOUR_TELEGRAM_BOT_TOKEN') {
        // Fallback simulation if tokens are not yet provided
        setTimeout(() => {
          status.textContent = 'Сообщение успешно отправлено! (Демо-режим)';
          status.classList.add('text-green-500');
          form.reset();
        }, 800);
        return;
      }

      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' })
      });

      if (res.ok) {
        status.textContent = 'Сообщение успешно отправлено в Telegram!';
        status.classList.add('text-green-500');
        form.reset();
      } else {
        throw new Error('Ошибка сети');
      }
    } catch (err) {
      status.textContent = 'Ошибка отправки. Попробуйте снова.';
      status.classList.add('text-red-500');
    }
  });
}