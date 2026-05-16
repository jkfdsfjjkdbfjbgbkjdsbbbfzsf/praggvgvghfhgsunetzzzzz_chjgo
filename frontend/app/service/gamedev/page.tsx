import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["gamedev"];

export default function GamedevPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
