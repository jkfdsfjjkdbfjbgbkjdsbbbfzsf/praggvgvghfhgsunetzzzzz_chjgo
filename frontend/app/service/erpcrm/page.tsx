import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["erpcrm"];

export default function ErpcrmPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
