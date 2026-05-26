import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
// import { Sparkles,  CheckCircle2 } from "lucide-react";

const ORDERS = [
  {
    id: 1,
    table: "Table 12",
    type: "Pending",
    items: ["2x Butter Chicken", "4x Garlic Naan"],
    time: "12m ago",
  },
  {
    id: 2,
    table: "Order #842",
    type: "Preparing",
    items: ["1x Paneer Tikka", "2x Roti"],
    time: "18m ago",
  },
  {
    id: 3,
    table: "Table 04",
    type: "Ready",
    items: ["1x Hyderabadi Biryani"],
    time: "45m ago",
  },
  {
    id: 4,
    table: "Table 19",
    type: "Preparing",
    items: ["3x Dal Makhani"],
    time: "8m ago",
  },
  {
    id: 5,
    table: "Order #901",
    type: "Pending",
    items: ["1x Veg Biryani"],
    time: "2m ago",
  },
  {
    id: 6,
    table: "Table 05",
    type: "Served",
    items: ["2x Coke", "1x Fries"],
    time: "1h ago",
  },
  {
    id: 7,
    table: "Order #905",
    type: "Ready",
    items: ["1x Pizza"],
    time: "30m ago",
  },
  {
    id: 8,
    table: "Table 08",
    type: "Pending",
    items: ["1x Pasta"],
    time: "5m ago",
  },
  {
    id: 9,
    table: "Order #910",
    type: "Preparing",
    items: ["2x Burger"],
    time: "10m ago",
  },
  {
    id: 10,
    table: "Table 02",
    type: "Served",
    items: ["1x Salad"],
    time: "2h ago",
  },
];

const getBackgroundColorByCategories = (type: string) => {
  switch (type) {
    case "Pending":
      return "bg-yellow-100";
    case "Preparing":
      return "bg-blue-100";
    case "Ready":
      return "bg-green-100";
    case "Served":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
};

export const Route = createFileRoute("/(RESTAURENT)/restaurent/live-orders")({
  component: RouteComponent,
});

function RouteComponent() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Pending", "Preparing", "Ready", "Served"];

  const filteredOrders =
    filter === "All" ? ORDERS : ORDERS.filter((o) => o.type === filter);
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-[#fcf9f8] min-h-screen">
      {/* Header Info */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Live Orders</h1>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          <span className="text-sm font-bold text-green-700">
            {ORDERS.length} Active Orders
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="link"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 font-bold ${filter === cat ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"}`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Order Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOrders.map((order) => (
          <Card
            key={order.id}
            className="p-5 shadow-sm hover:border-red-200 transition-all"
          >
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg">{order.table}</span>
              <span className="text-xs text-gray-400">{order.time}</span>
            </div>

            <Button
              className={`mb-4 text-red-primary rounded-full w-24 ${getBackgroundColorByCategories(order.type)}`}
            >
              {order.type}
            </Button>

            <div className="bg-slate-100 p-3 rounded-lg mb-4">
              {order.items.map((item, i) => (
                <p key={i} className="text-sm font-medium">
                  {item}
                </p>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex  flex-col ">
                <p className="text-xl font-bold text-red-primary ">
                  {order.time}
                </p>
                <span>Estimated Time</span>
              </div>
              <div className="flex  flex-row gap-1 ">
                <Cloud className="w-4 h-4 text-green-primary" />
                <p className="text-xs text-green-primary">Synced with POS</p>
              </div>
            </div>
            <Button className="mt-4 bg-red-primary text-white font-bold h-10 rounded-2xl">
              Start Prep
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
