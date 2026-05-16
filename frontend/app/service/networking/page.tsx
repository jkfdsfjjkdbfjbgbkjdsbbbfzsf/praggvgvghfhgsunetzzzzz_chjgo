import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["networking"];

export default function NetworkingPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
