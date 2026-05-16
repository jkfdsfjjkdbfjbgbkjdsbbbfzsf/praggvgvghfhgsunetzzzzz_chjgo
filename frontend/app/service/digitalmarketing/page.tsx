import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["digitalmarketing"];

export default function DigitalmarketingPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
