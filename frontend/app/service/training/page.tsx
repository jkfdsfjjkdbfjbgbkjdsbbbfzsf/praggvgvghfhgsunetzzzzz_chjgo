import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["training"];

export default function TrainingPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
