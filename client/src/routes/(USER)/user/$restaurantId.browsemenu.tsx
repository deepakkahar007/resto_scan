import { createFileRoute } from "@tanstack/react-router";
import { Hamburger, ShoppingCart, Search, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/(USER)/user/$restaurantId/browsemenu")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { restaurantId } = Route.useParams();

  return (
    <div className="min-h-screen bg-[#fcf9f8] pb-10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fcf9f8]/95 backdrop-blur-xl border-b border-[#8f6f6d]/10 px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Hamburger className="text-coral-primary" />
          <h1 className="font-bold text-[20px] tracking-tight">Dyni AI</h1>
        </div>
        <div className="relative cursor-pointer p-1">
          <ShoppingCart className="text-on-background" />
          <span className="absolute top-0 right-0 bg-coral-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-[#fcf9f8]">
            3
          </span>
        </div>
      </header>

      <main className="px-5 pt-4 space-y-6">
        {/* Category Scroll */}
        <div className="space-y-4">
          <h2 className="font-bold text-2xl text-on-background">
            Sharma Bhoj Bhandar
          </h2>
          <div className="flex items-center gap-6 overflow-x-auto pb-3 -mx-5 px-5 scrollbar-hide border-b border-[#8f6f6d]/10">
            {[
              "All",
              "Starters",
              "Main Course",
              "Breads",
              "Beverages",
              "Desserts",
            ].map((cat, i) => (
              <button
                key={cat}
                className={`font-semibold text-sm whitespace-nowrap pb-3 relative ${i === 0 ? "text-coral-primary" : "text-gray-500"}`}
              >
                {cat}
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full bg-[#f6f3f2] border-0 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-coral-primary outline-none transition-all shadow-sm"
            placeholder="Search for dishes, cuisines..."
          />
        </div>

        {/* Hero Item */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-primary bg-green-primary/20 px-3 py-1.5 rounded-full w-fit">
            <Sparkles className="h-4 w-4 fill-current" />
            <span className="text-[11px] text-green-primary font-bold uppercase tracking-wider">
              AI Picks for Tonight
            </span>
          </div>
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative h-56 w-full">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"
                className="w-full h-full object-cover"
                alt="Hero"
              />
              <div className="absolute top-3 right-3 bg-green-primary text-white px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold uppercase shadow-lg">
                <Sparkles className="h-3 w-3 fill-current" /> AI Recommended
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Truffle Risotto</h3>
                <p className="text-green-primary text-xs font-semibold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-green-primary rounded-full animate-pulse" />{" "}
                  Popular now
                </p>
              </div>
              <span className="font-bold text-xl">₹450</span>
            </div>
            <div className="px-4 pb-4">
              <Button className="w-full h-12 bg-red-primary">
                Add to Cart
              </Button>
            </div>
          </Card>
        </div>

        {/* Item List */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-gray-400 text-xs uppercase tracking-[0.15em] pt-2">
            All Dishes
          </h4>

          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="p-3 flex flex-row items-center gap-4 border-0 shadow-sm"
            >
              {/* Image container acts as a fixed-size element */}
              <div className="w-20 h-20 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150"
                  className="w-full h-full rounded-xl object-cover"
                  alt="Dish"
                />
              </div>

              {/* CardContent reset to remove its default bottom padding/margin issues */}
              <CardContent className="flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <h5 className="font-bold text-sm leading-tight">
                    Garden Bliss Salad
                  </h5>
                  <span className="font-bold text-sm">₹280</span>
                </div>

                <p className="text-xs text-gray-500 line-clamp-1">
                  Fresh greens, citrus vinaigrette, feta, walnuts...
                </p>

                <div className="mt-2 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 rounded-xl border-red-primary/20 text-red-primary hover:bg-red-primary hover:text-white"
                  >
                    <Plus className="h-4 w-4" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
