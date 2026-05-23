```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&amp;family=Inter:wght@400;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container": "#FFE9E7",
              "on-tertiary": "#ffffff",
              "on-error-container": "#93000a",
              "on-secondary-fixed": "#1c1b1c",
              "surface-container-lowest": "#ffffff",
              "surface-container-low": "#f6f3f2",
              "on-secondary-container": "#636262",
              "error-container": "#ffdad6",
              "on-error": "#ffffff",
              "on-primary-fixed-variant": "#930012",
              "outline-variant": "#e4beba",
              "outline-muted": "rgba(45, 45, 45, 0.08)",
              "surface-tint": "#b91b23",
              "coral-primary": "#E23B3B",
              "tertiary-fixed": "#94f8aa",
              "surface-container-high": "#eae7e7",
              outline: "#8f6f6d",
              error: "#ba1a1a",
              "primary-fixed": "#ffdad7",
              "on-surface-variant": "#5b403e",
              background: "#fcf9f8",
              "on-primary-container": "#fffbff",
              "surface-variant": "#e4e2e1",
              "on-primary": "#ffffff",
              "surface-container-highest": "#e4e2e1",
              "tertiary-container": "#1c8645",
              "primary-container": "#d93536",
              "on-tertiary-fixed": "#00210b",
              "background-warm": "#FFF0E8",
              primary: "#b61821",
              "on-tertiary-fixed-variant": "#005225",
              secondary: "#5f5e5e",
              "on-secondary": "#ffffff",
              "surface-bright": "#fcf9f8",
              "on-tertiary-container": "#f7fff3",
              surface: "#fcf9f8",
              "on-primary-fixed": "#410004",
              "inverse-primary": "#ffb3ad",
              "secondary-fixed-dim": "#c8c6c6",
              "on-secondary-fixed-variant": "#474647",
              "on-surface": "#1b1c1c",
              tertiary: "#006b32",
              "ai-teal": "#60C27A",
              "primary-fixed-dim": "#ffb3ad",
              "inverse-on-surface": "#f3f0f0",
              "tertiary-fixed-dim": "#78db90",
              "secondary-fixed": "#e5e2e1",
              "secondary-container": "#e2dfdf",
              "rich-charcoal": "#2D2D2D",
              "signature-red": "#CB202D",
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              full: "9999px",
            },
            spacing: {
              gutter: "16px",
              xl: "32px",
              md: "16px",
              margin: "20px",
              lg: "24px",
              sm: "12px",
              base: "4px",
              xs: "8px",
            },
            fontFamily: {
              "label-pill": ["Plus Jakarta Sans"],
              "headline-md": ["Plus Jakarta Sans"],
              "body-md": ["Inter"],
              "label-caps": ["Plus Jakarta Sans"],
              "body-lg": ["Inter"],
              "body-sm": ["Inter"],
              "display-lg": ["Plus Jakarta Sans"],
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
              "headline-md": [
                "24px",
                { lineHeight: "30px", fontWeight: "600" },
              ],
              "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
              "label-caps": [
                "10px",
                {
                  lineHeight: "12px",
                  letterSpacing: "0.05em",
                  fontWeight: "800",
                },
              ],
              "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
              "body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
              "display-lg": [
                "32px",
                {
                  lineHeight: "40px",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                },
              ],
            },
          },
        },
      };
    </script>
    <style>
      .glass-header {
        background: rgba(252, 249, 248, 0.4);
        backdrop-filter: blur(12px);
      }
      .ai-glow {
        background: linear-gradient(
          135deg,
          rgba(96, 194, 122, 0.1) 0%,
          rgba(255, 255, 255, 0.8) 100%
        );
      }
      .custom-scroll {
        scrollbar-width: none;
      }
      .custom-scroll::-webkit-scrollbar {
        display: none;
      }
      .hero-gradient {
        background: linear-gradient(
          to bottom,
          transparent 60%,
          rgba(0, 0, 0, 0.6) 100%
        );
      }
      body {
        min-height: max(884px, 100dvh);
      }
    </style>
  </head>
  <body class="bg-background text-on-surface font-body-lg overflow-x-hidden">
    <!-- Top Navigation Bar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 glass-header flex justify-between items-center px-margin h-16 max-w-md mx-auto"
    >
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md active:scale-95 transition-transform"
      >
        <span class="material-symbols-outlined text-white drop-shadow-sm"
          >arrow_back</span
        >
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md active:scale-95 transition-transform"
      >
        <span class="material-symbols-outlined text-white drop-shadow-sm"
          >share</span
        >
      </button>
    </header>
    <main class="max-w-md mx-auto pb-32">
      <!-- Hero Section -->
      <section class="relative h-[380px] w-full overflow-hidden">
        <img
          alt="Dal Makhani"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdoGI3lJIupphmf5PbL4_KKw1YeyojR8eypVxDGIPJLITknG62S379EMzMZKXeD6U6c7eOBlrtSVyjnlfAGYQGTwGkE6PLdA6NyyrXnw9ru7z2vF3XpXuT8-nccbNRm8kZiVDxW2AUcdImchw6eBRg2HPr_zHdZZqw0Lm27LrqCmgxOO63gndOF_pVayZWoJdzd6UzgeFVw_nSU2BsXnizO3eSULYBLC3Rwtm3E0oJrRmjobJlYDmQIC3Fi_yhIK5hRhMEj37PiXZ"
        />
        <div class="absolute inset-0 hero-gradient"></div>
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
          <button
            class="bg-white/90 backdrop-blur-md text-on-surface px-lg py-sm rounded-full border border-white/40 flex items-center gap-xs font-label-pill shadow-xl active:scale-95 transition-all"
          >
            <span class="material-symbols-outlined text-[18px]"
              >view_in_ar</span
            >
            <span>Experience in 3D</span>
          </button>
        </div>
      </section>
      <!-- Content Section -->
      <section class="px-margin pt-lg space-y-lg">
        <!-- Header Info -->
        <div class="space-y-sm">
          <div class="flex justify-between items-start">
            <h1 class="font-display-lg text-display-lg text-on-surface">
              Dal Makhani
            </h1>
            <span
              class="font-headline-md text-[28px] text-on-surface font-extrabold tracking-tight"
              >₹280</span
            >
          </div>
          <div class="flex items-center flex-wrap gap-md">
            <div
              class="flex items-center gap-1 bg-surface-container-low px-sm py-1 rounded-full"
            >
              <span
                class="material-symbols-outlined text-[18px] text-primary"
                style="font-variation-settings: 'FILL' 1;"
                >star</span
              >
              <span class="font-bold text-on-surface text-sm">4.8</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="text-tertiary font-semibold text-sm"
                >324 orders today</span
              >
            </div>
            <div class="flex items-center gap-1.5 ml-auto">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span
                class="text-[10px] font-bold text-on-surface/60 uppercase tracking-widest font-label-caps"
                >Pure Veg</span
              >
            </div>
          </div>
          <p class="text-on-surface-variant font-body-md leading-relaxed">
            Slow-cooked black lentils simmered overnight with tomatoes, butter,
            and cream for a rich, smoky flavor.
          </p>
        </div>
        <!-- AI Insight Card -->
        <div
          class="relative overflow-hidden rounded-2xl border border-ai-teal/20 p-md ai-glow group shadow-sm"
        >
          <div class="flex items-start gap-md">
            <div
              class="w-10 h-10 rounded-full bg-ai-teal/20 flex items-center justify-center shrink-0"
            >
              <span
                class="material-symbols-outlined text-tertiary animate-pulse"
                style="font-variation-settings: 'FILL' 1;"
                >auto_awesome</span
              >
            </div>
            <div class="flex-1 space-y-sm">
              <div>
                <p
                  class="text-on-surface text-[14px] leading-snug font-semibold"
                >
                  "This is best enjoyed with our Butter Garlic Naan."
                </p>
                <p class="text-on-surface-variant text-[12px]">
                  68% of customers order them together.
                </p>
              </div>
              <button
                class="bg-rich-charcoal hover:bg-black text-white text-[12px] font-bold px-md py-2.5 rounded-xl active:scale-95 transition-all flex items-center gap-2"
              >
                Add Garlic Naan
                <span class="opacity-40">|</span>
                <span>+₹45</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Customization Section -->
        <div class="space-y-md">
          <div class="flex items-baseline justify-between">
            <h3 class="font-headline-md text-on-surface">Make it yours</h3>
            <span
              class="text-[11px] font-bold text-on-surface/40 uppercase tracking-widest"
              >Select One</span
            >
          </div>
          <div class="flex gap-sm overflow-x-auto pb-2 custom-scroll">
            <button
              class="flex-shrink-0 bg-rich-charcoal text-white px-lg py-sm rounded-xl font-label-pill shadow-md border-2 border-rich-charcoal"
            >
              Regular
            </button>
            <button
              class="flex-shrink-0 bg-white border border-outline-variant text-on-surface px-lg py-sm rounded-xl font-label-pill hover:bg-surface-container-low transition-colors"
            >
              Large
            </button>
            <button
              class="flex-shrink-0 bg-white border border-outline-variant text-on-surface px-lg py-sm rounded-xl font-label-pill hover:bg-surface-container-low transition-colors"
            >
              Extra Spicy
            </button>
          </div>
        </div>
        <!-- Extra Toppings -->
        <div
          class="bg-surface-container-lowest rounded-2xl p-md border border-outline-muted flex items-center justify-between shadow-sm active:bg-surface-container-low transition-colors"
        >
          <div>
            <h3 class="text-on-surface font-bold text-md">
              Extra Butter Swirl
            </h3>
            <p class="text-on-surface/60 text-body-sm">
              Added creaminess for richness (+₹20)
            </p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input class="sr-only peer" type="checkbox" value="" />
            <div
              class="w-12 h-7 bg-secondary-container/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[19px] after:w-[19px] after:transition-all after:shadow-sm peer-checked:bg-tertiary"
            ></div>
          </label>
        </div>
      </section>
    </main>
    <!-- Bottom Sticky Button -->
  </body>
</html>
```
