import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Assuming the images are placed in the public folder
const restaurantImage = "/images/restaurant-placeholder.jpg";

export default function MobileScreen() {
  return (
    <div className="flex flex-col items-center p-4 bg-(--color-background) min-h-screen">
      {/* Header */}
      <header className="w-full mb-4">
        <h1 className="text-2xl font-bold text-(--color-dark-gray) text-center">
          Restaurant Name
        </h1>
      </header>

      {/* Main Card */}
      <Card className="w-full max-w-sm border border-(--color-gray-secondary) bg-(--color-background)">
        <CardHeader className="p-0">
          <img
            src={restaurantImage}
            alt="Restaurant"
            className="w-full h-48 object-cover rounded-t-md"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold text-(--color-dark-gray) mb-2">
            Delicious Bites
          </CardTitle>
          <p className="text-sm text-(--color-gray-secondary) mb-4">
            A cozy place offering a variety of gourmet dishes made with fresh
            ingredients.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-(--color-green-primary)">
              $25.00
            </span>
            <span className="text-sm text-(--color-gray-secondary) line-through">
              $30.00
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
          <Button className="bg-(--color-red-primary) hover:bg-red-primary/90 text-white rounded-md w-full">
            Order Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
