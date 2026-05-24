import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Receipt,
  ChefHat,
  Utensils,
  Check,
  PlusCircle,
  Bell,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/(USER)/user/order-tracking")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 space-y-8 bg-[#FFF6F0] min-h-screen">
      {/* Success Header */}
      <div className="flex flex-col items-center text-center pt-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#1F2937]">Order Confirmed!</h2>
        <p className="text-sm text-gray-500 font-medium">
          Order #882193 • Table 04
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Tracking & Details */}
        <div className="md:col-span-7 space-y-6">
          {/* Progress Stepper */}
          <Card className="p-6 border border-gray-200 shadow-sm">
            <div className="flex justify-between relative">
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200" />
              <div className="absolute top-4 left-0 w-[66%] h-0.5 bg-[#CB202D]" />
              {[
                { icon: Receipt, label: "Received" },
                { icon: ChefHat, label: "Cooking" },
                { icon: Utensils, label: "Plating" },
                { icon: Check, label: "Served" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 3 ? "bg-[#CB202D] text-white" : "bg-gray-100 text-gray-400"}`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="rounded-full bg-[#CB202D] hover:bg-red-700 shadow-md">
              <PlusCircle className="w-4 h-4 mr-2" /> Add More Items
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-[#CB202D] text-[#CB202D]"
            >
              <Bell className="w-4 h-4 mr-2" /> Call Waiter
            </Button>
          </div>

          {/* Order Summary */}
          <Accordion
            type="single"
            collapsible
            defaultValue="summary"
            className="w-full"
          >
            <AccordionItem
              value="summary"
              className="bg-white rounded-xl border px-4"
            >
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                Order Summary
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Truffle Tagliatelle</p>
                    <p className="text-xs text-gray-500">Extra Parmesan</p>
                  </div>
                  <span className="font-semibold">$28.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#CB202D] pt-2 border-t">
                  <span>Total</span>
                  <span>$44.00</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Column: AI ETA Card */}
        <div className="md:col-span-5">
          <Card className="p-6 border-secondary/20 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3 text-[#14B8A6]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Dyni AI Prediction
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 leading-tight">
              Ready in <span className="text-[#14B8A6]">~12 minutes</span>
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Our smart kitchen analysis predicts your meal will be ready
              exactly at 8:42 PM.
            </p>

            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400"
                className="w-full h-full object-cover"
                alt="Kitchen"
              />
              <div className="absolute bottom-0 p-3 bg-linear-to-t from-black/60 w-full text-white">
                <p className="text-[10px] font-bold uppercase">
                  Plating station active
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
