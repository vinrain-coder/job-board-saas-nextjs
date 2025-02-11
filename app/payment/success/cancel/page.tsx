import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Link from "next/link";

export default function PaymentCancel() {
  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <X className="size-12 p-2 bg-red-500/30 text-red-500 rounded-full" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h2 className="text-xl font-semibold">Payment cancelled</h2>
            <p className="text-sm mt-2 text-muted-foreground tracking-tight text-balance">
              Your payment was cancelled. No worries you wont be charged. Please
              try again.
            </p>
            <Button className="w-full mt-5" asChild>
              <Link href="/">Go back to homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
