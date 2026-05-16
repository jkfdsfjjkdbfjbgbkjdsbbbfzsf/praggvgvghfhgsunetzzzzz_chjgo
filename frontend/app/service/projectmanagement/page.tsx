import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["projectmanagement"];

export default function ProjectmanagementPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
