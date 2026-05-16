import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["embedded"];

export default function EmbeddedPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
