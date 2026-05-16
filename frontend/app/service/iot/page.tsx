import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["iot"];

export default function IoTPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
