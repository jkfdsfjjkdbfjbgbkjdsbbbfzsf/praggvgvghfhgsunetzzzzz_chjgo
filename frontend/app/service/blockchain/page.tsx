import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["blockchain"];

export default function BlockchainPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
