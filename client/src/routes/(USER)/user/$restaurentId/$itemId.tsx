import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Share2, View, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/(USER)/user/$restaurentId/$itemId")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fcf9f8] max-w-md mx-auto pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header flex justify-between items-center px-5 h-16 max-w-md mx-auto backdrop-blur-xl bg-white/40">
        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-md"
          onClick={() => navigate({ to: ".." })}
        >
          <ArrowLeft className="text-black drop-shadow-sm" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-md"
        >
          <Share2 className="text-black drop-shadow-sm" />
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[380px] w-full overflow-hidden">
          <img
            alt="Dal Makhani"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <Button
              variant="secondary"
              className="rounded-full backdrop-blur-md bg-white/90 border border-white/40 gap-2 shadow-xl"
            >
              <View className="w-4 h-4" /> Experience in 3D
            </Button>
          </div>
        </section>

        <section className="px-5 pt-6 space-y-6">
          {/* Header Info */}
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold tracking-tight">Dal Makhani</h1>
              <span className="text-2xl font-extrabold">₹280</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-[#f6f3f2] px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="font-bold text-sm">4.8</span>
              </div>
              <span className="text-tertiary text-sm font-semibold">
                324 orders today
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Slow-cooked black lentils simmered overnight with tomatoes,
              butter, and cream for a rich, smoky flavor.
            </p>
          </div>

          {/* AI Insight Card */}
          <Card className="relative overflow-hidden bg-linear-to-br from-green-50 to-white p-4 shadow-sm border border-green-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-tertiary animate-pulse" />
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm font-semibold leading-snug">
                  "This is best enjoyed with our Butter Garlic Naan."
                </p>
                <Button
                  size="sm"
                  className="bg-[#2D2D2D] text-white hover:bg-black rounded-xl text-xs gap-2"
                >
                  Add Garlic Naan | +₹45
                </Button>
              </div>
            </div>
          </Card>

          {/* Customization */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Make it yours</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {["Regular", "Large", "Extra Spicy"].map((option, i) => (
                <Button
                  key={option}
                  variant={i === 0 ? "default" : "outline"}
                  className="rounded-xl px-6"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Topping */}
          {/* <Card className="p-4 flex items-center justify-between border border-[#8f6f6d]/10 shadow-sm">
            <div>
              <h3 className="font-bold">Extra Butter Swirl</h3>
              <p className="text-xs text-gray-500">
                Added creaminess for richness (+₹20)
              </p>
            </div>
          </Card> */}

          <div>
            <Button
              asChild
              className="w-full bg-red-primary text-white h-12 flex flex-row items-center gap-2"
            >
              <Link to="/user/payment">
                <span>Add to cart</span>
                <span>₹250</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
