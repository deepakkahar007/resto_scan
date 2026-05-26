import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sparkles, TrendingDown, MessageCircle, Star } from "lucide-react";

const MENU_DISHES = [
  { name: "Mutton Biryani", score: 8.4, status: "STAR", margin: "68%" },
  { name: "Veg Thali", score: 4.2, status: "LOW", margin: "32%" },
  { name: "Butter Garlic Naan", score: 7.8, status: "GEM", margin: "82%" },
  { name: "Paneer Tikka", score: 6.2, status: "STABLE", margin: "55%" },
];

const CHURN_DATA = [
  {
    name: "Aditi Sharma",
    lastVisit: "32 days ago",
    trend: "-24%",
    risk: "HIGH",
  },
  {
    name: "Vikram Malhotra",
    lastVisit: "18 days ago",
    trend: "Flat",
    risk: "MED",
  },
  {
    name: "Rohan Gupta",
    lastVisit: "45 days ago",
    trend: "-40%",
    risk: "HIGH",
  },
];

export const Route = createFileRoute("/(RESTAURENT)/restaurent/ai-insights")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-8 mx-auto space-y-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-extrabold flex items-center gap-3">
          <Sparkles className="text-teal-500 fill-teal-500 w-8 h-8" />
          AI Intelligence Center
        </h2>
        <div className="px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-bold">
          AI Status: Optimized
        </div>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart Placeholder */}
        <Card className="col-span-7 h-80 flex flex-col items-center justify-center border-dashed">
          <p className="text-gray-400 font-medium">
            [ Revenue Forecast Chart Placeholder ]
          </p>
        </Card>

        {/* Opportunity Cards */}
        <div className="col-span-5 space-y-4">
          <h3 className="font-bold text-lg">Tonight's Opportunities</h3>
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="p-4 border-l-4 border-l-teal-500 flex gap-4"
            >
              <Sparkles className="text-teal-500 shrink-0" />
              <div>
                <p className="text-sm font-bold mb-2">
                  Feature Mutton Biryani — predicted bestseller 7-9PM.
                </p>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Feature It
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Menu Performance Grid */}
      <div>
        <h3 className="text-lg font-bold mb-6">Menu Performance AI Grid</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MENU_DISHES.map((dish) => (
            <Card key={dish.name} className="overflow-hidden">
              <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkcy8xX6Evew3KhqKzaKJlY0abDwyxuCTHj71Uljp8ptxu6MhRYjT-XbOKWyK4yBsIUK5bhC9rXQQbCBN9chzkoLnyg7sSyh23Zw5rvscRD2A379iLvqYM_uTzf7tC2x5zODxtASlSUcIji-CZSbzQcPr9P7mDLyfaDYUyfAMxpaAPMTYhU3vzGRShtAueiUwGaHUdzXkAFryJTvgIApihgtR3bjwRE0cDVl9E1oJhw2RSnShpBHLNmnXnWnQtwgMD62zVwlfCe3sS"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-sm mb-1">{dish.name}</h4>
                <div className="flex items-center gap-1 text-teal-600 text-xs font-black mb-3">
                  <Star className="w-3 h-3" /> AI Score {dish.score}/10
                </div>
                <div className="text-[10px] font-bold flex justify-between">
                  <span>MARGIN</span>{" "}
                  <span className="text-teal-600">{dish.margin}</span>
                </div>
                <div className="h-2 w-3/4 bg-green-primary rounded-2xl " />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Churn Risk Table */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Churn Risk Watchlist</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Spend Trend</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CHURN_DATA.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-bold">{row.name}</TableCell>
                <TableCell>{row.lastVisit}</TableCell>
                <TableCell className="text-red-600 font-bold flex items-center gap-1">
                  <TrendingDown className="w-4 h-4" /> {row.trend}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-black ${row.risk === "HIGH" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {row.risk}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
