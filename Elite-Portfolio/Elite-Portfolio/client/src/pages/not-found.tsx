import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      ></div>

      <Card className="w-full max-w-md mx-4 glass-card border-destructive/50 relative z-10">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center mb-4 gap-4">
            <AlertCircle className="h-16 w-16 text-destructive animate-pulse" />
            <h1 className="text-4xl font-bold font-orbitron text-white">404</h1>
            <h2 className="text-xl font-rajdhani text-gray-300">SYSTEM ERROR: Page Not Found</h2>
          </div>

          <p className="mt-4 text-sm text-gray-400 font-rajdhani mb-6">
            The requested data segment could not be located in the neural network.
          </p>

          <Link href="/">
            <Button className="bg-primary text-black hover:bg-primary/80 font-orbitron w-full">
              RETURN TO HOME BASE
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
