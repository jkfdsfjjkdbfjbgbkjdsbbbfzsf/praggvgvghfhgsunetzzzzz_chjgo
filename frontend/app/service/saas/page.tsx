import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["saas"];

export default function SaaSPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
