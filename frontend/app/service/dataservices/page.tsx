import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["dataservices"];

export default function DataservicesPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
