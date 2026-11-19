
// ShopSphere - E-Commerce Frontend JavaScript

const products = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3499,
    rating: 4.8,
    reviews: 128,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    description: "Enjoy rich sound with comfortable ear cushions and long battery life."
  },
  {
    id: 2,
    name: "Classic Running Sneakers",
    category: "Fashion",
    price: 1899,
    oldPrice: 2599,
    rating: 4.7,
    reviews: 94,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    description: "Lightweight everyday sneakers with a comfortable sole."
  },
  {
    id: 3,
    name: "Minimal Ceramic Table Lamp",
    category: "Home",
    price: 1599,
    oldPrice: 1999,
    rating: 4.6,
    reviews: 76,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
    description: "A stylish lamp for your bedroom or reading corner."
  },
  {
    id: 4,
    name: "Daily Glow Skincare Set",
    category: "Beauty",
    price: 1299,
    oldPrice: 1699,
    rating: 4.9,
    reviews: 203,
    badge: "TOP RATED",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
    description: "Everyday skincare essentials for your routine."
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 3299,
    oldPrice: 4499,
    rating: 4.5,
    reviews: 112,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    description: "Track your activities and everyday notifications."
  },
  {
    id: 6,
    name: "Everyday Canvas Backpack",
    category: "Fashion",
    price: 999,
    oldPrice: 1399,
    rating: 4.4,
    reviews: 61,
    badge: "VALUE PICK",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
    description: "A versatile backpack for college and everyday use."
  },
  {
    id: 7,
    name: "Soft Knit Lounge Cushion",
    category: "Home",
    price: 799,
    oldPrice: 1099,
    rating: 4.6,
    reviews: 48,
    badge: "COZY PICK",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=85",
    description: "A soft cushion for your sofa or favourite chair."
  },
  {
    id: 8,
    name: "Hydrating Face Serum",
    category: "Beauty",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    reviews: 156,
    badge: "FAN FAVOURITE",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
    description: "A lightweight serum for your daily skincare routine."
  },
  {
    id: 9,
    name: "Adjustable Dumbbell Set",
    category: "Sports",
    price: 2799,
    oldPrice: 3599,
    rating: 4.5,
    reviews: 83,
    badge: "FITNESS",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85",
    description: "Compact strength-training equipment for home workouts."
  },
  {
    id: 10,
    name: "The Creative Mind Journal",
    category: "Books",
    price: 499,
    oldPrice: 649,
    rating: 4.8,
    reviews: 177,
    badge: "READER PICK",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85",
    description: "A journal for ideas, plans and creative thoughts."
  },
  {
    id: 11,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    reviews: 139,
    badge: "GREAT SOUND",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
    description: "A compact speaker for music at home or on the go."
  },
  {
    id: 12,
    name: "Everyday Cotton T-Shirt",
    category: "Fashion",
    price: 599,
    oldPrice: 799,
    rating: 4.3,
    reviews: 88,
    badge: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    description: "A comfortable T-shirt for everyday wear."
  },
  {
    id: 13,
    name: "Modern Desk Organizer",
    category: "Home",
    price: 899,
    oldPrice: 1199,
    rating: 4.4,
    reviews: 53,
    badge: "WORKSPACE",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85",
    description: "Keep your workspace tidy and organized."
  },
  {
    id: 14,
    name: "Gentle Body Care Kit",
    category: "Beauty",
    price: 1099,
    oldPrice: 1399,
    rating: 4.6,
    reviews: 92,
    badge: "SELF CARE",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85",
    description: "A body care kit for your daily routine."
  },
  {
    id: 15,
    name: "Insulated Sports Bottle",
    category: "Sports",
    price: 749,
    oldPrice: 999,
    rating: 4.5,
    reviews: 101,
    badge: "ON THE GO",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85",
    description: "A reusable bottle for workouts and travel."
  },
  {
    id: 16,
    name: "Design Inspiration Book",
    category: "Books",
    price: 849,
    oldPrice: 1099,
    rating: 4.9,
    reviews: 67,
    badge: "EDITOR'S PICK",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
    description: "Creative inspiration for curious minds."
  }
];

// Shortcuts
const $ = selector => document.querySelector(selector);

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

// Load saved data
function safeRead(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

let cart = safeRead("shopsphere-cart", []);
let wishlist = safeRead("shopsphere-wishlist", []);

let activeCategory = "All";
let searchTerm = "";
let maxPrice = 10000;
let sortMode = "featured";

// Save data
function saveState() {
  localStorage.setItem("shopsphere-cart", JSON.stringify(cart));
  localStorage.setItem("shopsphere-wishlist", JSON.stringify(wishlist));
}

// Notifications
function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";

  node.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;

  $("#toastContainer").appendChild(node);

  setTimeout(() => node.remove(), 2800);
}

// Find product
function productById(id) {
  return products.find(p => p.id === Number(id));
}

// Product filtering and sorting
function visibleProducts() {
  let list = products.filter(p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    p.price <= maxPrice &&
    (
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    )
  );

  if (sortMode === "price-low")
    list.sort((a, b) => a.price - b.price);

  if (sortMode === "price-high")
    list.sort((a, b) => b.price - a.price);

  if (sortMode === "rating")
    list.sort((a, b) => b.rating - a.rating);

  if (sortMode === "name")
    list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

// Display products
function renderProducts() {
  const list = visibleProducts();

  $("#productGrid").innerHTML = list.map(p => `
    <article class="product-card">

      <div class="product-image-wrap" data-quick="${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-badge">${p.badge}</span>
      </div>

      <button class="heart-button ${wishlist.includes(p.id) ? "active" : ""}"
        data-wish="${p.id}">
        <i class="${wishlist.includes(p.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
      </button>

      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-title">${p.name}</div>

        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          ${p.rating}
          <span>(${p.reviews} reviews)</span>
        </div>

        <div class="product-bottom">
          <div class="price">
            <strong>${money(p.price)}</strong>
            <span class="old-price">${money(p.oldPrice)}</span>
          </div>

          <button class="add-button" data-add="${p.id}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("#resultsText").textContent =
    `Showing ${list.length} of ${products.length} products`;

  $("#emptyState").classList.toggle("hidden", list.length !== 0);
}

// Category selection
function setCategory(category) {
  activeCategory = category;

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === category
    );
  });

  renderProducts();
}

// Update cart and wishlist counters
function renderCounts() {
  $("#cartCount").textContent =
    cart.reduce((sum, item) => sum + item.qty, 0);

  $("#wishlistCount").textContent = wishlist.length;

  $("#cartPanelCount").textContent =
    `(${cart.reduce((sum, item) => sum + item.qty, 0)})`;

  $("#wishlistPanelCount").textContent =
    `(${wishlist.length})`;
}

// Add to cart
function addToCart(id) {
  const item = cart.find(i => i.id === Number(id));

  if (item) {
    item.qty++;
  } else {
    cart.push({ id: Number(id), qty: 1 });
  }

  saveState();
  renderCart();
  renderCounts();

  toast("Added to your cart");
}

// Change quantity
function changeQty(id, delta) {
  const item = cart.find(i => i.id === Number(id));

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== Number(id));
  }

  saveState();
  renderCart();
  renderCounts();
}

// Remove cart item
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== Number(id));

  saveState();
  renderCart();
  renderCounts();

  toast("Item removed from cart");
}

// Display cart
function renderCart() {
  const target = $("#cartItems");

  if (!cart.length) {
    target.innerHTML = `
      <div class="panel-empty">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your cart is waiting</h4>
        <p>Add something lovely to get started.</p>
      </div>
    `;
  } else {
    target.innerHTML = cart.map(item => {
      const p = productById(item.id);

      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">

          <div>
            <h4>${p.name}</h4>
            <div class="item-price">${money(p.price)}</div>

            <div class="item-actions">
              <div class="qty-control">
                <button data-qty="${p.id}" data-delta="-1">−</button>
                <span>${item.qty}</span>
                <button data-qty="${p.id}" data-delta="1">+</button>
              </div>

              <button class="remove-button" data-remove="${p.id}">
                Remove
              </button>
            </div>
          </div>

          <strong>${money(p.price * item.qty)}</strong>
        </div>
      `;
    }).join("");
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + productById(item.id).price * item.qty,
    0
  );

  const delivery =
    subtotal === 0 || subtotal >= 999 ? 0 : 79;

  $("#cartSubtotal").textContent = money(subtotal);

  $("#deliveryCost").textContent =
    delivery === 0 && subtotal > 0 ? "FREE" : money(delivery);

  $("#cartTotal").textContent = money(subtotal + delivery);

  $("#shippingNote").textContent =
    subtotal === 0
      ? "Add products to get started."
      : subtotal >= 999
        ? "You unlocked free delivery!"
        : `Add ${money(999 - subtotal)} more for free delivery.`;

  $("#checkoutButton").disabled = !cart.length;
  $("#checkoutButton").style.opacity = cart.length ? 1 : 0.5;

  $("#checkoutTotal").textContent = money(subtotal + delivery);
}

// Wishlist
function toggleWishlist(id) {
  id = Number(id);

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    toast("Removed from wishlist");
  } else {
    wishlist.push(id);
    toast("Saved to your wishlist");
  }

  saveState();
  renderProducts();
  renderWishlist();
  renderCounts();
}

// Display wishlist
function renderWishlist() {
  if (!wishlist.length) {
    $("#wishlistItems").innerHTML = `
      <div class="panel-empty">
        <i class="fa-regular fa-heart"></i>
        <h4>Your wishlist is empty</h4>
        <p>Tap the heart on a product to save it here.</p>
      </div>
    `;
    return;
  }

  $("#wishlistItems").innerHTML = wishlist.map(id => {
    const p = productById(id);

    return `
      <div class="wishlist-item">
        <img src="${p.image}" alt="${p.name}">

        <div>
          <h4>${p.name}</h4>
          <div class="item-price">${money(p.price)}</div>

          <div class="wishlist-actions">
            <button class="small-action" data-add="${p.id}">
              Add to cart
            </button>

            <button class="remove-button" data-wish="${p.id}">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Open side panel
function openPanel(panel) {
  closeOverlays();

  $("#overlay").classList.add("active");

  $(panel).classList.add("open");
  $(panel).setAttribute("aria-hidden", "false");
}

// Open modal
function openModal(modal) {
  closeOverlays();

  $(modal).classList.add("open");
  $(modal).setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

// Close all overlays
function closeOverlays() {
  $("#overlay").classList.remove("active");

  document.querySelectorAll(".side-panel").forEach(panel => {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  });

  document.querySelectorAll(".modal-wrap").forEach(modal => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });

  document.body.style.overflow = "";
}

// Product quick view
function quickView(id) {
  const p = productById(id);

  $("#quickViewContent").innerHTML = `
    <div class="quick-view-layout">

      <img src="${p.image}" alt="${p.name}">

      <div>
        <span class="eyebrow">${p.category.toUpperCase()}</span>

        <h2>${p.name}</h2>

        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          ${p.rating}
          <span>(${p.reviews} reviews)</span>
        </div>

        <div class="quick-price">
          ${money(p.price)}
          <span class="old-price">${money(p.oldPrice)}</span>
        </div>

        <p>${p.description}</p>

        <button class="primary-button" data-add="${p.id}">
          Add to cart
          <i class="fa-solid fa-bag-shopping"></i>
        </button>
      </div>

    </div>
  `;

  openModal("#quickViewModal");
}

// Checkout
function startCheckout() {
  if (!cart.length) {
    toast("Your cart is empty");
    return;
  }

  closeOverlays();

  $("#checkoutTotal").textContent = $("#cartTotal").textContent;

  openModal("#checkoutModal");
}

// Place demo order
function placeOrder(event) {
  event.preventDefault();

  const form = new FormData(event.target);
  const orderId = "SS" + Date.now().toString().slice(-7);
  const customer = form.get("name");

  cart = [];

  saveState();
  renderCart();
  renderCounts();

  event.target.reset();

  closeOverlays();

  toast(`Thank you, ${customer}! Demo order ${orderId} placed.`);
}

// Dark and light mode
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");

  $("#themeToggle").innerHTML =
    theme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-regular fa-moon"></i>';

  localStorage.setItem("shopsphere-theme", theme);
}

// Handle product buttons
function handleProductActions(event) {
  const add = event.target.closest("[data-add]");
  const wish = event.target.closest("[data-wish]");
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  const quick = event.target.closest("[data-quick]");

  if (add) {
    event.stopPropagation();
    addToCart(add.dataset.add);

    if ($("#quickViewModal").classList.contains("open")) {
      closeOverlays();
    }
  } else if (wish) {
    event.stopPropagation();
    toggleWishlist(wish.dataset.wish);
  } else if (qty) {
    changeQty(qty.dataset.qty, Number(qty.dataset.delta));
  } else if (remove) {
    removeFromCart(remove.dataset.remove);
  } else if (quick) {
    quickView(quick.dataset.quick);
  }
}

// Initialize website
function init() {
  renderProducts();
  renderCart();
  renderWishlist();
  renderCounts();

  applyTheme(localStorage.getItem("shopsphere-theme") || "light");

  // Search
  $("#searchForm").addEventListener("submit", event => {
    event.preventDefault();

    searchTerm = $("#searchInput").value.trim().toLowerCase();

    renderProducts();

    $("#products").scrollIntoView({ behavior: "smooth" });
  });

  $("#searchInput").addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  // Category filters
  $("#filterChips").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");

    if (button) {
      setCategory(button.dataset.filter);
    }
  });

  document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.category);

      $("#products").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-nav-category]").forEach(link => {
    link.addEventListener("click", () => {
      setCategory(link.dataset.navCategory);
    });
  });

  // Sorting
  $("#sortSelect").addEventListener("change", event => {
    sortMode = event.target.value;
    renderProducts();
  });

  // Maximum price
  $("#maxPrice").addEventListener("input", event => {
    maxPrice = Number(event.target.value);

    $("#maxPriceLabel").textContent = money(maxPrice);

    renderProducts();
  });

  // Clear filters
  $("#clearFilters").addEventListener("click", () => {
    searchTerm = "";
    $("#searchInput").value = "";

    $("#maxPrice").value = 10000;
    maxPrice = 10000;

    $("#maxPriceLabel").textContent = money(maxPrice);

    $("#sortSelect").value = "featured";
    sortMode = "featured";

    setCategory("All");
  });

  // Product actions
  $("#productGrid").addEventListener("click", handleProductActions);
  $("#cartItems").addEventListener("click", handleProductActions);
  $("#wishlistItems").addEventListener("click", handleProductActions);
  $("#quickViewContent").addEventListener("click", handleProductActions);

  // Cart and wishlist panels
  $("#cartHeader").addEventListener("click", () => {
    openPanel("#cartPanel");
  });

  $("#wishlistHeader").addEventListener("click", () => {
    renderWishlist();
    openPanel("#wishlistPanel");
  });

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const theme = document.body.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(theme);
  });

  // Close panels and modals
  $("#overlay").addEventListener("click", closeOverlays);

  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", closeOverlays);
  });

  // Checkout
  $("#checkoutButton").addEventListener("click", startCheckout);

  $("#checkoutForm").addEventListener("submit", placeOrder);

  // Newsletter demo
  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();

    toast("Thanks for subscribing! (Demo)");

    event.target.reset();
  });

  // Back to top
  $("#backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    $("#backToTop").classList.toggle(
      "visible",
      window.scrollY > 450
    );
  });

  // Escape key closes popups
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeOverlays();
    }
  });
}

// Run after HTML loads
document.addEventListener("DOMContentLoaded", init);