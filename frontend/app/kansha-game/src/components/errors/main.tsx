import { Button } from "@heroui/react";

export const MainErrorFallback = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      <p className="font-mono text-xl">Something went wrong :(</p>
      <Button
        color="primary"
        radius="sm"
        variant="ghost"
        className="font-mono"
        onPress={() => window.location.reload()}
      >
        Reload
      </Button>
    </div>
  );
};
