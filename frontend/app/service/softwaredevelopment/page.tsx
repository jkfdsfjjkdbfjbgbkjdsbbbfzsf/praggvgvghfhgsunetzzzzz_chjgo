import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["softwaredevelopment"];

export default function SoftwaredevelopmentPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
