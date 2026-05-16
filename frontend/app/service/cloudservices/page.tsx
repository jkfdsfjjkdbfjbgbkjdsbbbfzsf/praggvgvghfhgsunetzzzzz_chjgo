import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["cloudservices"];

export default function CloudservicesPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
