import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["rpa"];

export default function RpaPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
