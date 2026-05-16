import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["itconsulting"];

export default function ItconsultingPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
