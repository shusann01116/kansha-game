import { signIn } from "@/lib/next-auth/auth";
import { Button } from "@/components/ui/hero-ui";

export const SignUpForm = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("line", { redirectTo: "/app" });
      }}
    >
      <Button type="submit" color="primary">
        Sign In with LINE
      </Button>
    </form>
  );
};
