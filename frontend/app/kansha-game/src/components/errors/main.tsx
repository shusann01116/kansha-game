import { Button } from "@heroui/react";

export const MainErrorFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p>Something went wrong :(</p>
      <Button onPress={() => window.location.reload()}>Reload</Button>
    </div>
  );
};
