import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["compliance"];

export default function CompliancePage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
