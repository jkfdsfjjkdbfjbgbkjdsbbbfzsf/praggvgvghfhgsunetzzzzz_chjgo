import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["api"];

export default function APIPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
