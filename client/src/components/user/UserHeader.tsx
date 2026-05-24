import { Hamburger, ShoppingCart } from "lucide-react";

const UserHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#fcf9f8]/95 backdrop-blur-xl border-b border-[#8f6f6d]/10 px-5 py-3 flex justify-between items-center">
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
    </div>
  );
};

export default UserHeader;
