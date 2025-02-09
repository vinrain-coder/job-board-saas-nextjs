import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return session.user;
}
