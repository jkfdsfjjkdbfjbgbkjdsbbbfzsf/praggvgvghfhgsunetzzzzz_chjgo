import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["cybersecurity"];

export default function CybersecurityPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
