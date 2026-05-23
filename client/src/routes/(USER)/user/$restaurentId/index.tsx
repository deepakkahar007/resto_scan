import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Bell, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/(USER)/user/$restaurentId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { restaurentId } = Route.useParams();

  return (
    <div className="min-h-screen bg-[#FFF6F0] flex flex-col items-center p-5 pb-10 font-sans">
      {/* Hero Section */}
      <div className="w-full max-w-md mb-8">
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
              <Sparkles className="w-4 h-4 text-green-primary fill-green-primary" />
              <span className="text-xs font-semibold text-dark-gray">
                AI Recommended
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center w-full max-w-md">
        <div className="mb-2">
          <span className="text-3xl font-extrabold text-red-primary tracking-tighter">
            Dyni
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-dark-gray mb-2">
          Sharma Bhoj Bhandar
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-secondary mb-8">
          <span className="text-sm font-medium">
            Table {restaurentId} · Scan to order
          </span>
          <CheckCircle2 className="w-4 h-4 text-green-primary" />
        </div>

        {/* Language Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["English", "हिंदी", "தமிழ்", "తెలుగు"].map((lang, i) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                i === 0
                  ? "bg-red-primary text-white"
                  : "bg-white border border-gray-200 text-dark-gray"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full">
          <Link to="/user/$restaurentId/browsemenu" params={{ restaurentId }}>
            <Button className="w-full h-14 bg-red-primary text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              Browse Menu & Order <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Button className="w-full h-14 bg-transparent border-2 border-red-primary text-red-primary font-semibold rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            <Bell className="w-5 h-5" /> Call Waiter
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-black/5">
            <Sparkles className="w-4 h-4 text-green-primary" />
            <span className="text-xs text-gray-secondary">
              Powered by{" "}
              <span className="text-dark-gray font-bold">Dyni AI</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
