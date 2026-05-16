import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["vrar"];

export default function VRARPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
