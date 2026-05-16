import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["qa"];

export default function QaPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
