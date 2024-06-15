import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="p-4">
        <h1>Welcome to Ensk</h1>

        <div className="mt-4">
          <Button type="button">View docs</Button>
        </div>
      </section>
    </main>
  );
}
