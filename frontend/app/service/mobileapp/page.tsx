import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["mobileapp"];

export default function MobileappPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
