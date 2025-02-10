/* eslint-disable react/no-unescaped-entities */
import { CreateJobForm } from "@/components/forms/CreateJobForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ArcjetLogo from "@/public/arcjet.jpg";
import InngestLogo from "@/public/inngest-locale.png";
import Image from "next/image";

const companies = [
  { id: 0, name: "Arcjet", logo: ArcjetLogo },
  { id: 1, name: "Inngest", logo: InngestLogo },
  { id: 2, name: "Arcjet", logo: ArcjetLogo },
  { id: 3, name: "Inngest", logo: InngestLogo },
  { id: 4, name: "Arcjet", logo: ArcjetLogo },
  { id: 5, name: "Inngest", logo: InngestLogo },
];

const testimonials = [
  {
    quote:
      "We found our ideal candidate within 48 hours of posting. The qualty of appilicants was exceptional",
    author: "Vin Rain",
    company: "Vin LLC",
  },
  {
    quote:
      "We found our ideal candidate within 48 hours of posting. The qualty of appilicants was exceptional",
    author: "Vin Rain",
    company: "Vin LLC",
  },
  {
    quote:
      "We found our ideal candidate within 48 hours of posting. The qualty of appilicants was exceptional",
    author: "Vin Rain",
    company: "Vin LLC",
  },
];

const stats = [
  { id: 0, value: "10K+", label: "Monthly active job seekers" },
  { id: 1, value: "48h", label: "Average timre to hire" },
  { id: 2, value: "95%", label: "Employer satisfaction ratte" },
  { id: 3, value: "500+", label: "Companies hiring remotely" },
];

export default function PostJobPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <CreateJobForm/>
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Trusted by Industry Leaders
            </CardTitle>
            <CardDescription>
              JOin Thousands of Companies Hiring top Tallents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* company logos */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div className="" key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    - {testimonial.author}, {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Render stats here */}
            <div className="">
              {stats.map((stat) => (
                <div className="rounded-lg bg-muted p-4" key={stat.id}>
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
