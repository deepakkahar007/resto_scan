import { createFileRoute, Link } from "@tanstack/react-router";
import {
  QrCode,
  CreditCard,
  Wallet,
  Split,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserHeader from "@/components/user/UserHeader";

export const Route = createFileRoute("/(USER)/user/payment")({
  component: RouteComponent,
});

function RouteComponent() {
  const billItems = [
    { name: "Wild Mushroom Risotto", price: 240 },
    { name: "Truffle Parm Fries", price: 180 },
    { name: "Craft Lemonade x2", price: 120 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF6F0] pb-40 max-w-md mx-auto">
      {/* Header */}
      <UserHeader />

      <section className="pt-5 px-5 space-y-8">
        {/* Bill Summary */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Payment Summary</h1>
          <Card className="p-5 border-0 shadow-sm rounded-xl">
            <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              <span>TABLE 12 • DINER #4</span>
              <span className="text-green-primary">#INV-8821</span>
            </div>

            <div className="space-y-3 border-b pb-4 mb-4 border-gray-100">
              {billItems.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="font-semibold">₹{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between text-xs text-gray-500">
                <span>Service Charge (5%)</span> <span>₹27</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>GST (18%)</span> <span>₹113</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs uppercase text-gray-500 mb-1">
                  Grand Total
                </p>
                <p className="text-3xl font-bold text-red-primary">₹680</p>
              </div>
              <div className="flex items-center gap-1 text-green-primary">
                <Sparkles className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  AI Optimized
                </span>
              </div>
            </div>
          </Card>
        </section>

        {/* Split Bill */}
        {/* <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Split Bill</h2>
            <button className="flex items-center gap-1 text-coral-primary text-sm font-semibold">
              <PlusCircle className="w-4 h-4" /> Add Person
            </button>
          </div>
          <div className="flex gap-4">
            <div className="w-16 text-center">
              <div className="w-14 h-14 rounded-full bg-coral-primary flex items-center justify-center text-white font-bold text-xs border-2 border-white ring-2 ring-coral-primary">
                YOU
              </div>
              <p className="text-[10px] text-coral-primary font-bold mt-1">
                ₹680
              </p>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="w-16 text-center opacity-40">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserCircle className="w-8 h-8" />
                </div>
                <p className="text-[10px] font-bold mt-1">UNASSIGNED</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Payment Methods */}
        <section>
          <h2 className="font-bold text-lg mb-4">Payment Method</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "UPI", icon: QrCode, active: true },
              { label: "Card", icon: CreditCard },
              { label: "Cash", icon: Wallet },
              { label: "Split Pay", icon: Split },
            ].map((method) => (
              <div
                key={method.label}
                className={`p-4 rounded-xl border flex flex-col items-center gap-2 ${method.active ? "border-coral-primary" : "border-gray-200"}`}
              >
                <method.icon
                  className={
                    method.active ? "text-coral-primary" : "text-gray-500"
                  }
                />
                <span className="text-sm font-semibold">{method.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* QR Section */}
        {/* <section className="bg-gradient-to-br from-[#FFE9E7] to-[#FFF6F0] rounded-2xl p-6 flex flex-col items-center border">
          <div className="bg-white p-2 rounded-lg shadow-sm mb-4">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=pay"
              className="w-40 h-40"
              alt="QR"
            />
          </div>
          <p className="text-sm text-gray-600">Scan to pay with any UPI app</p>
        </section> */}
      </section>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 w-full p-5 bg-linear-to-t from-[#FFF6F0] to-transparent pt-10">
        <Button
          asChild
          className="w-full h-14 bg-red-primary rounded-xl font-bold text-lg"
        >
          <Link to="/user/order-tracking">
            Complete Payment ₹680 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
