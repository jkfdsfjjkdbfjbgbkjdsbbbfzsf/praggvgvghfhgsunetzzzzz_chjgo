import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["businessintelligence"];

export default function BusinessintelligencePage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
