import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["ecommerce"];

export default function EcommercePage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
