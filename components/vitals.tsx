import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AccountVitals } from "./vitals/vitals-account";
import { OSVitals } from "./vitals/vitals-os";

export function Vitals() {
  return (
    <div className="p-2 rounded-md bg-muted border border-border">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="p-0">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="os">OS</TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className="bg-card p-2 shadow-sm rounded-md"
        >
          <AccountVitals />
        </TabsContent>
        <TabsContent value="os" className="bg-card p-2 shadow-sm rounded-md">
          <OSVitals />
        </TabsContent>
      </Tabs>
    </div>
  );
}
