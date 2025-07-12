import { lazy, Suspense } from "react";

const SecuritySimulator = lazy(() => import("./security-simulator"));

export default function LazySecuritySimulator() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-black-deep to-black-medium rounded-xl">
        <div className="text-gold text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-lg font-orbitron">Carregando Simulador...</p>
        </div>
      </div>
    }>
      <SecuritySimulator />
    </Suspense>
  );
}