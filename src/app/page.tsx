import { RestaurantMenu } from "@/components/RestaurantMenu";
import { menuGroups } from "@/data/menu";

export default function Home() {
  return <RestaurantMenu groups={menuGroups} />;
}
