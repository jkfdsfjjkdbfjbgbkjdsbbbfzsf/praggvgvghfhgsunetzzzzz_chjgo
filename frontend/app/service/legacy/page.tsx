import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["legacy"];

export default function LegacyPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
