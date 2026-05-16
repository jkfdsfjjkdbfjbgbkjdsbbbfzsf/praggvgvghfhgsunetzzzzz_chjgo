import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["customintegration"];

export default function CustomintegrationPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
