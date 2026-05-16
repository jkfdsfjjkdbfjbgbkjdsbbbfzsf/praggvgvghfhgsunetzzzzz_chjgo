import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["devops"];

export default function DevopsPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
