import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlowingButton } from "@/components/ui/GlowingButton";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-7 sm:py-16 bg-gray-900 text-gray-100">
      {/* Header Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-8xl rounded-3xl overflow-hidden p-2 h-[80vh] shadow-lg shadow-black/30">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl brightness-[0.4] contrast-[1.2]"
          >
            <source src="/windmill.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent rounded-3xl"></div>
          <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 py-10 sm:py-20">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white drop-shadow-lg">
            EspeonX – The Future of Decentralized Esports
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-2xl max-w-3xl text-green-400 drop-shadow-md">
            Empowering Players with True Ownership, Fair Rewards, and a Transparent Gaming Economy
            </p>
            <div className="mt-6 sm:mt-10">
              <GlowingButton text="Get Started" onClick={() => alert("Button Clicked!")} />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-10 px-4 sm:px-10"
      >
        <CarouselContent className="flex gap-3 sm:gap-5 md:gap-10 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 sm:basis-1/6">
              <img src={path} alt={name} className="h-6 sm:h-9 md:h-14 object-contain" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Job Seekers & Employers Cards */}
      <div className="bg-gray-800 p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {["Job Seekers", "Employers", "Freelancers", "Interns", "Remote Jobs", "Career Growth"].map((title, index) => (
            <Card key={index} className="bg-gray-900 text-gray-100 p-6 rounded-xl border border-gray-700 shadow-lg transition-all hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="font-bold text-xl text-blue-400">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                {title === "Job Seekers" && "Search and apply for jobs, track applications, and more."}
                {title === "Employers" && "Post jobs, manage applications, and find the best candidates."}
                {title === "Freelancers" && "Find freelance projects and collaborate with top clients."}
                {title === "Interns" && "Explore internship opportunities and kickstart your career."}
                {title === "Remote Jobs" && "Work from anywhere with remote job listings from top companies."}
                {title === "Career Growth" && "Access career guidance, resume building, and interview prep."}
              </CardContent>
            </Card>
          ))}
        </section>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto w-full px-4">
        <h2 className="text-center text-3xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="border border-gray-700 rounded-lg shadow-md hover:shadow-lg bg-gray-800 transition duration-300">
              <AccordionTrigger className="p-4 text-gray-200 font-semibold transition-all bg-gray-700 hover:bg-gray-600 rounded-t-lg no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-300 bg-gray-700 rounded-b-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
