import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { OSVitals } from "./vitals/vitals-os";

export function Vitals() {
  return (
    <div className="p-2 rounded-md bg-muted border border-border">
      <Tabs defaultValue="os" className="w-[400px]">
        <TabsList className="p-0">
          <TabsTrigger value="os">OS</TabsTrigger>
        </TabsList>
        <TabsContent value="os" className="bg-card p-2 shadow-sm rounded-md">
          <OSVitals />
        </TabsContent>
      </Tabs>
    </div>
  );
}
