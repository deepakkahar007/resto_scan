```html
<!DOCTYPE html>

<html class="light" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Dyni AI - Sharma Bhoj Bhandar</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <style>
      .material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      ::-webkit-scrollbar {
        display: none;
      }
      body {
        -ms-overflow-style: none;
        scrollbar-width: none;
        background-color: #fcf9f8;
        -webkit-tap-highlight-color: transparent;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    </style>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-dim": "#dcd9d9",
              "rich-charcoal": "#2D2D2D",
              "on-primary-container": "#fffbff",
              "inverse-on-surface": "#f3f0f0",
              "primary-fixed": "#ffdad7",
              "on-tertiary-container": "#f7fff3",
              "on-secondary-fixed-variant": "#474647",
              "on-primary": "#ffffff",
              "surface-container-lowest": "#ffffff",
              primary: "#b61821",
              "on-error": "#ffffff",
              tertiary: "#006b32",
              "tertiary-fixed": "#94f8aa",
              "on-background": "#1b1c1c",
              "background-warm": "#FFF0E8",
              "surface-container-low": "#f6f3f2",
              "on-tertiary": "#ffffff",
              "tertiary-fixed-dim": "#78db90",
              "outline-muted": "rgba(45, 45, 45, 0.08)",
              "secondary-container": "#e2dfdf",
              "on-primary-fixed": "#410004",
              "on-secondary-fixed": "#1c1b1c",
              "on-secondary-container": "#636262",
              "surface-variant": "#e4e2e1",
              "on-primary-fixed-variant": "#930012",
              "surface-container": "#f0eded",
              outline: "#8f6f6d",
              "tertiary-container": "#1c8645",
              background: "#fcf9f8",
              "primary-fixed-dim": "#ffb3ad",
              "on-surface": "#1b1c1c",
              "error-container": "#ffdad6",
              "surface-container-highest": "#e4e2e1",
              "on-error-container": "#93000a",
              "coral-primary": "#E23B3B",
              secondary: "#5f5e5e",
              "on-surface-variant": "#5b403e",
              "surface-tint": "#b91b23",
              "on-secondary": "#ffffff",
              "surface-container-high": "#eae7e7",
              "on-tertiary-fixed": "#00210b",
              surface: "#fcf9f8",
              "secondary-fixed": "#e5e2e1",
              "surface-bright": "#fcf9f8",
              "on-tertiary-fixed-variant": "#005225",
              "primary-container": "#d93536",
              "inverse-surface": "#303030",
              "inverse-primary": "#ffb3ad",
              "outline-variant": "#e4beba",
              "secondary-fixed-dim": "#c8c6c6",
              "ai-teal": "#60C27A",
              error: "#ba1a1a",
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              "2xl": "1rem",
              full: "9999px",
            },
            spacing: {
              xs: "8px",
              sm: "12px",
              gutter: "16px",
              lg: "24px",
              xl: "32px",
              md: "16px",
              margin: "20px",
              base: "4px",
            },
            fontFamily: {
              "label-pill": ["Plus Jakarta Sans"],
              "body-md": ["Inter"],
              "display-lg": ["Plus Jakarta Sans"],
              "label-caps": ["Plus Jakarta Sans"],
              "headline-md": ["Plus Jakarta Sans"],
              "body-lg": ["Inter"],
              "body-sm": ["Inter"],
            },
            fontSize: {
              "label-pill": [
                "14px",
                {
                  lineHeight: "16px",
                  letterSpacing: "0.01em",
                  fontWeight: "600",
                },
              ],
              "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
              "display-lg": [
                "32px",
                {
                  lineHeight: "40px",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                },
              ],
              "label-caps": [
                "10px",
                {
                  lineHeight: "12px",
                  letterSpacing: "0.05em",
                  fontWeight: "800",
                },
              ],
              "headline-md": [
                "24px",
                { lineHeight: "30px", fontWeight: "700" },
              ],
              "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
              "body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
            },
          },
        },
      };
    </script>
  </head>
  <body
    class="bg-background text-on-background font-body-md min-h-screen pb-xl"
  >
    <!-- TopAppBar -->
    <header
      class="bg-background/95 backdrop-blur-xl border-b border-outline-muted fixed top-0 w-full z-50 flex justify-between items-center px-margin py-sm"
    >
      <div class="flex items-center gap-xs">
        <span
          class="material-symbols-outlined text-coral-primary"
          data-icon="restaurant"
          >restaurant</span
        >
        <h1
          class="font-headline-md text-[20px] font-bold text-on-background tracking-tight"
        >
          Dyni AI
        </h1>
      </div>
      <div
        class="relative hover:opacity-80 transition-transform duration-200 active:scale-95 cursor-pointer p-1"
      >
        <span
          class="material-symbols-outlined text-on-background text-2xl"
          data-icon="shopping_cart"
          >shopping_cart</span
        >
        <span
          class="absolute top-0 right-0 bg-coral-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-background"
          >3</span
        >
      </div>
    </header>
    <main class="mt-[64px] px-margin space-y-lg">
      <!-- Restaurant Context -->
      <div class="pt-sm space-y-sm">
        <h2 class="font-headline-md text-headline-md text-on-background">
          Sharma Bhoj Bhandar
        </h2>
        <!-- Category Tabs -->
        <div
          class="overflow-x-auto flex items-center gap-lg py-xs -mx-margin px-margin no-scrollbar border-b border-outline-muted"
        >
          <button
            class="font-label-pill text-label-pill text-coral-primary relative shrink-0 pb-3"
          >
            All
            <div
              class="absolute bottom-0 left-0 w-full h-0.5 bg-coral-primary rounded-full"
            ></div>
          </button>
          <button
            class="font-label-pill text-label-pill text-on-surface/50 shrink-0 pb-3 hover:text-on-surface transition-colors"
          >
            Starters
          </button>
          <button
            class="font-label-pill text-label-pill text-on-surface/50 shrink-0 pb-3 hover:text-on-surface transition-colors"
          >
            Main Course
          </button>
          <button
            class="font-label-pill text-label-pill text-on-surface/50 shrink-0 pb-3 hover:text-on-surface transition-colors"
          >
            Breads
          </button>
          <button
            class="font-label-pill text-label-pill text-on-surface/50 shrink-0 pb-3 hover:text-on-surface transition-colors"
          >
            Beverages
          </button>
          <button
            class="font-label-pill text-label-pill text-on-surface/50 shrink-0 pb-3 hover:text-on-surface transition-colors"
          >
            Desserts
          </button>
        </div>
      </div>
      <!-- Search Bar -->
      <div class="relative w-full group">
        <div
          class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
        >
          <span
            class="material-symbols-outlined text-on-surface/30 group-focus-within:text-coral-primary transition-colors text-[20px]"
            data-icon="search"
            >search</span
          >
        </div>
        <input
          class="w-full bg-surface-container-low border-0 ring-1 ring-outline-muted rounded-2xl py-3.5 pl-11 pr-md text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-coral-primary placeholder-on-surface/40 transition-all shadow-sm"
          placeholder="Search for dishes, cuisines..."
          type="text"
        />
      </div>
      <!-- AI Recommendations Section -->
      <div class="space-y-md">
        <div class="flex items-center justify-between">
          <div
            class="bg-ai-teal/10 text-ai-teal px-3 py-1.5 rounded-full flex items-center gap-1.5"
          >
            <span
              class="material-symbols-outlined text-[18px] fill-1"
              data-icon="auto_awesome"
              >auto_awesome</span
            >
            <span class="font-label-pill text-[12px] uppercase tracking-wider"
              >AI Picks for Tonight</span
            >
          </div>
        </div>
        <!-- Featured AI Pick Card -->
        <div
          class="relative w-full rounded-2xl overflow-hidden bg-white border border-outline-muted shadow-md group active:scale-[0.98] transition-all duration-200"
        >
          <div class="relative h-56 w-full overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Truffle Risotto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3i0QyAlgj5Xr4SxgjM6NDZnyJJPnVwJd_R0SVGGYeGKbumq_08GwxflFeMzBKjf04N98vQdd_rDgq7r4pmqvPWTWvod3CqQz8tJNut2rKkXXEDQM5AC85nswn3o2BOe0S0TpONqNjq5G5HtegOn5GYYNSE4JludwQOXYs03jaDo14-p9TRypve4fxoTvsXV2OvxUUCZBd7Gc8KGE6pCPxxCaDUCWRRf44quzFs6HV0-KUJJOGu8sZK9B0sEZ3TS4c3GdJh8sN4w0N"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>
            <div
              class="absolute top-sm right-sm bg-ai-teal backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg ring-1 ring-white/20"
            >
              <span
                class="material-symbols-outlined text-[14px] text-white fill-1"
                data-icon="auto_awesome"
                >auto_awesome</span
              >
              <span
                class="text-[10px] font-bold uppercase text-white tracking-widest"
                >AI Recommended</span
              >
            </div>
          </div>
          <div class="p-md space-y-sm">
            <div class="flex justify-between items-start">
              <div class="space-y-0.5">
                <h3 class="font-headline-md text-xl text-on-surface">
                  Truffle Risotto
                </h3>
                <div class="flex items-center gap-1">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-ai-teal animate-pulse"
                  ></span>
                  <p class="font-body-sm text-ai-teal font-semibold">
                    Popular now
                  </p>
                </div>
              </div>
              <div class="text-right">
                <span class="font-bold text-on-surface text-xl">₹450</span>
              </div>
            </div>
            <button
              class="w-full bg-coral-primary text-white py-3.5 rounded-xl font-label-pill text-label-pill hover:bg-coral-primary/90 transition-all active:scale-95 shadow-lg shadow-coral-primary/20 flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Menu List Section -->
      <div class="space-y-md">
        <h4
          class="font-label-caps text-label-caps text-on-surface/40 uppercase tracking-[0.15em] pt-md font-extrabold"
        >
          All Dishes
        </h4>
        <div class="space-y-4">
          <!-- Dish Card 1 -->
          <div
            class="bg-white border border-outline-muted rounded-2xl p-3 flex items-center gap-md shadow-sm active:bg-surface-container-low transition-colors duration-150"
          >
            <div
              class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative ring-1 ring-outline-muted"
            >
              <img
                class="w-full h-full object-cover"
                data-alt="Garden Bliss Salad"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRJ7oOfV8NSHwhXkQsUl10JuCGJJlOlbptV7XLD_XKY5OX51Dl9k1uJYc_AfKsGOMuxfqgkIJ3ea51CCvZzwdE8T3OmOTDZbieKKpTuxWeWheW98nzrXU7n_1nL0YqQQGmGH06AkpFghi46qXtcGaF1Z45sARCbVg1PgoGL6BtlWr2I6oW1G3rweFnP-53AVEc-UVJSHMZHWGjg0F8gMDEIcNxDyDqh2ojQoN-DC_Qix9FvvSZdCbcH2Wz6mlz6ZJmoJtbtDRzj8os"
              />
              <div
                class="absolute bottom-1 right-1 h-4 w-4 bg-white border border-gray-100 flex items-center justify-center rounded-[3px] shadow-sm"
              >
                <div class="h-2 w-2 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex-1 flex flex-col min-w-0">
              <div class="flex justify-between items-start gap-2">
                <h5 class="font-body-md font-bold text-on-surface truncate">
                  Garden Bliss Salad
                </h5>
                <span class="font-bold text-on-surface whitespace-nowrap"
                  >₹280</span
                >
              </div>
              <p class="font-body-sm text-on-surface/60 line-clamp-1 mt-0.5">
                Fresh greens, citrus vinaigrette, feta...
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="border-2 border-coral-primary/20 text-coral-primary px-6 py-1.5 rounded-xl font-label-pill text-[13px] active:scale-90 active:bg-coral-primary active:text-white transition-all font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <!-- Dish Card 2 (AI Specialized) -->
          <div
            class="bg-white border-2 border-ai-teal/10 rounded-2xl p-3 flex items-center gap-md shadow-sm relative overflow-hidden active:bg-ai-teal/5 transition-colors duration-150"
          >
            <div
              class="absolute top-0 right-0 px-2 py-0.5 bg-ai-teal/10 rounded-bl-lg"
            >
              <span
                class="material-symbols-outlined text-[12px] text-ai-teal fill-1"
                data-icon="auto_awesome"
                >auto_awesome</span
              >
            </div>
            <div
              class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative ring-1 ring-outline-muted"
            >
              <img
                class="w-full h-full object-cover"
                data-alt="Signature AI Burger"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGYGIKR5yGAxajS0qJcVOgZQzxktO85cGrR3hwob6r0h9lsUfCK50C8WZvPOELYSM8RtoKVxjF-Y6WerT6VeQP2GtP-9NZ8M558k4QnpLirPOLftiru4zrfeO_71DNwOQgLhwWaZg8IRTddAVqlQk8nDBEK_v5oOG1FqW4pvGmwdiyQMNqmTsOncSidbH0OcT-e8V-_F2z66r7MOG_tH36oHBH1MJWyTrtA2gzRz-waHsXs4CWFPtuPYCAIC0BVzgrwDmdssCqpfrM"
              />
              <div
                class="absolute bottom-1 right-1 h-4 w-4 bg-white border border-gray-100 flex items-center justify-center rounded-[3px] shadow-sm"
              >
                <div class="h-2 w-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex-1 flex flex-col min-w-0">
              <div class="flex justify-between items-start gap-2">
                <h5 class="font-body-md font-bold text-on-surface truncate">
                  Signature AI Burger
                </h5>
                <span class="font-bold text-on-surface whitespace-nowrap"
                  >₹390</span
                >
              </div>
              <p class="font-body-sm text-on-surface/60 line-clamp-1 mt-0.5">
                AI-crafted recipe, double patty delight...
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="bg-coral-primary text-white px-6 py-2 rounded-xl font-label-pill text-[13px] active:scale-90 transition-all shadow-sm font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <!-- Dish Card 3 -->
          <div
            class="bg-white border border-outline-muted rounded-2xl p-3 flex items-center gap-md shadow-sm active:bg-surface-container-low transition-colors duration-150"
          >
            <div
              class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative ring-1 ring-outline-muted"
            >
              <img
                class="w-full h-full object-cover"
                data-alt="Classic Carbonara"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuiH-8TovvqGzvVrGZPfPiL4KnvM0RxVf3wgLWPWRwn1Xksts8Qge7ePnlwK4RCAGNlVA_6Wa2AJqoKthe0C3jlyne7muGELsQxNN7xyfOuAfXBHpnM10oGFLzYujparzefx2yIZRWteSr-X1FJgNNhkW_pOBWpGQHWjRjeg_bZuPfO8Goc6EeL8-yKVrlZtSIW8HsOL0taXJO1GZVbjLu66Ag21PgRB-mlHnwfWW6ro0EApXnvL_Je-vr7ySxQRKgXWbh4Hpi2r4"
              />
              <div
                class="absolute bottom-1 right-1 h-4 w-4 bg-white border border-gray-100 flex items-center justify-center rounded-[3px] shadow-sm"
              >
                <div class="h-2 w-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex-1 flex flex-col min-w-0">
              <div class="flex justify-between items-start gap-2">
                <h5 class="font-body-md font-bold text-on-surface truncate">
                  Classic Carbonara
                </h5>
                <span class="font-bold text-on-surface whitespace-nowrap"
                  >₹420</span
                >
              </div>
              <p class="font-body-sm text-on-surface/60 line-clamp-1 mt-0.5">
                Authentic egg-based creamy goodness...
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="border-2 border-coral-primary/20 text-coral-primary px-6 py-1.5 rounded-xl font-label-pill text-[13px] active:scale-90 active:bg-coral-primary active:text-white transition-all font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- BottomNavBar -->
    <nav
      class="bg-background/95 backdrop-blur-xl border-t border-outline-muted fixed bottom-0 w-full z-50 flex justify-around items-center px-xs pb-8 pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]"
    >
      <a
        class="flex flex-col items-center justify-center text-coral-primary relative transition-all duration-150 active:scale-90"
        href="#"
      >
        <span
          class="material-symbols-outlined fill-1"
          data-icon="restaurant_menu"
          >restaurant_menu</span
        >
        <span class="font-label-pill text-[11px] mt-1">Menu</span>
        <div
          class="absolute -top-3 w-8 h-1 bg-coral-primary rounded-full"
        ></div>
      </a>
      <a
        class="flex flex-col items-center justify-center text-on-surface/40 hover:text-coral-primary transition-all duration-150 active:scale-90"
        href="#"
      >
        <span class="material-symbols-outlined" data-icon="shopping_bag"
          >shopping_bag</span
        >
        <span class="font-label-pill text-[11px] mt-1">Cart</span>
      </a>
      <a
        class="flex flex-col items-center justify-center text-on-surface/40 hover:text-coral-primary transition-all duration-150 active:scale-90"
        href="#"
      >
        <span class="material-symbols-outlined" data-icon="receipt_long"
          >receipt_long</span
        >
        <span class="font-label-pill text-[11px] mt-1">Orders</span>
      </a>
      <a
        class="flex flex-col items-center justify-center text-on-surface/40 hover:text-coral-primary transition-all duration-150 active:scale-90"
        href="#"
      >
        <span class="material-symbols-outlined" data-icon="person">person</span>
        <span class="font-label-pill text-[11px] mt-1">Profile</span>
      </a>
    </nav>
  </body>
</html>
```
