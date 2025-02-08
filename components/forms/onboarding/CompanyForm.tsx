import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companySchema } from "@/utils/zodSchemas";
import { z } from "zod";
import { Form } from "@/components/ui/form";

export function CompanyForm() {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      about: "",
      location: "",
      logo: "",
      name: "",
      website: "",
      xAccount: "",
    },
  });

  return (
    <Form {...form}>
        <form className="space-y-6">
            <div className="grid grid-cols-1 "></div>
        </form>
    </Form>
  )
}
