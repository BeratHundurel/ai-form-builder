import { Button } from "@/components/ui/button";
import FormGenerator from "@/app/form-generators/index";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
         <FormGenerator />
      </main>
   );
}
