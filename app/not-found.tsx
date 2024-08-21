import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tagline from "@/components/Tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto py-10 px-4 font-jost">
        <h2 className=" text-6xl ">Not Found</h2>
        <p className=" pb-5 ">Could not find requested resource</p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </main>
      <Tagline />
      <Footer />
    </div>
  );
}
