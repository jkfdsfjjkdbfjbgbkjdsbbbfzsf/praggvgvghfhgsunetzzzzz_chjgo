import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["webdevelopment"];

export default function WebdevelopmentPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
