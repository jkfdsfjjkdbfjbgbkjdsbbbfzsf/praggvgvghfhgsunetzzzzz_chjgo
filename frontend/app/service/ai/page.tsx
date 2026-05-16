import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["ai"];

export default function AiPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
