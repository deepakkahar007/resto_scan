import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TableProperties,
  Sparkles,
  ShoppingCart,
  PlusCircle,
  Edit3,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { ChartLineLinear } from "@/components/restaurent/LineChartLinear";

export const Route = createFileRoute("/(RESTAURENT)/restaurent/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4 md:p-8  mx-auto space-y-8 min-h-screen">
      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Today's Revenue"
          value="₹24,680"
          trend="+18%"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <KPICard
          title="Active Tables"
          value="8/12"
          progress={66}
          icon={<TableProperties className="w-4 h-4" />}
        />
        <KPICard
          title="Avg Order Value"
          value="₹412"
          tag="AI UPSELL ACTIVE"
          icon={<Sparkles className="w-4 h-4" />}
          className="ai-glow"
        />
        <KPICard
          title="Upsell Acceptance"
          value="34%"
          tag="AI RECOMMENDED"
          icon={<ShoppingCart className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-8">
          <ChartLineLinear />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-100 shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Live Orders</CardTitle>
                <Button variant="link" className="text-red-600 font-bold">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {["#892", "#891", "#890"].map((id) => (
                  <div
                    key={id}
                    className="flex justify-between items-center p-2 hover:bg-slate-50 rounded"
                  >
                    <div>
                      <p className="font-bold">Butter Chicken</p>
                      <p className="text-xs text-gray-500">Table 4</p>
                    </div>
                    <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-1 rounded uppercase">
                      Prep
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <ActionButton icon={<PlusCircle />} label="Add Order" />
              <ActionButton icon={<Edit3 />} label="Update Menu" />
              <ActionButton icon={<BarChart3 />} label="Reports" />
              <ActionButton icon={<Megaphone />} label="Promote" />
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Insights */}
        <aside className="space-y-6">
          <div className="flex items-center gap-2 text-green-600">
            <Sparkles className="fill-green-600" />
            <h2 className="font-extrabold uppercase tracking-widest text-sm">
              AI Insights
            </h2>
          </div>

          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-l-4 border-l-green-500 p-4">
              <p className="text-sm font-medium mb-3">
                Feature Butter Chicken tonight — predicted 43 orders.
              </p>
              <Button
                variant="ghost"
                className="text-green-600 text-xs font-bold p-0 hover:bg-transparent"
              >
                APPLY CAMPAIGN <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Card>
          ))}
        </aside>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function KPICard({ title, value, trend, progress, tag, icon, className }: any) {
  return (
    <Card
      className={`p-4 h-32 flex flex-col justify-between border-2 border-red-100 shadow ${className}`}
    >
      <div className="flex justify-between items-center text-gray-500 font-bold text-xs">
        {title} {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className="text-xs text-green-600 font-bold flex items-center">
            {trend}
          </div>
        )}
        {progress && (
          <div className="h-2 w-full bg-green-50 rounded-full mt-2" />
        )}
        {tag && (
          <div className="text-[10px] font-bold text-green-600 bg-green-50 w-fit px-1 mt-1">
            {tag}
          </div>
        )}
      </div>
    </Card>
  );
}

function ActionButton({ icon, label }: any) {
  return (
    <Button
      variant="outline"
      className="flex flex-col h-24 gap-2 hover:bg-slate-100 border-2
      border-red-100 shadow"
    >
      {icon} <span className="text-xs">{label}</span>
    </Button>
  );
}
