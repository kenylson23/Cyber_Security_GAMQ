import { lazy, Suspense } from "react";

const ThreeScene = lazy(() => import("./three-scene"));

export default function LazyThreeScene() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-black-deep to-black-medium" />}>
      <ThreeScene />
    </Suspense>
  );
}