'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tent, Mic, Clock, DollarSign, Star, ChevronRight, Trees, Mountain, Compass, Map, Sun } from "lucide-react"
import Image from 'next/image';

export function CampfinderAiLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative overflow-hidden">
      <header className="bg-green-800 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Tent className="w-8 h-8" />
            <span className="text-2xl font-bold">CampfinderAI</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-green-300 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-green-300 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-green-300 transition-colors">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-800 text-white py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/campground-bg.jpg"
              alt="Campground background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-50"
            />
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Campground Into a Seamless, High-Tech Experience with CampfinderAI</h1>
              <p className="text-xl mb-8">Boost guest satisfaction, streamline operations, and stay ahead of the competition with AI-powered voice assistance tailored for campgrounds.</p>
            </div>
            <div className="md:w-1/2 max-w-md w-full">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-green-800">Get Started with CampfinderAI</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="campground-name" className="text-gray-700">Campground Name</Label>
                    <Input id="campground-name" placeholder="Enter your campground name" className="bg-gray-50 border-green-300" />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" className="bg-gray-50 border-green-300" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-50 border-green-300" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" className="bg-gray-50 border-green-300" />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Get a Free Demo</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Is Your Campground Struggling to Keep Up with Modern Guest Expectations?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProblemCard
                icon={<Clock className="w-12 h-12 text-orange-500" />}
                title="Overwhelmed Staff"
                description="Are your staff overwhelmed with repetitive questions about amenities, bookings, and local attractions?"
              />
              <ProblemCard
                icon={<DollarSign className="w-12 h-12 text-orange-500" />}
                title="Increased Costs"
                description="Is it difficult to provide 24/7 support without increasing labor costs?"
              />
              <ProblemCard
                icon={<Star className="w-12 h-12 text-orange-500" />}
                title="Guest Frustration"
                description="Are your guests frustrated by slow or inefficient responses?"
              />
            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/rv-background.jpg"
              alt="RV background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-75"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">Outdated Customer Support is Costing You Time, Money, and Returning Guests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AgitateCard
                title="Poor Reviews"
                description="Guests may feel neglected when staff are busy, leading to poor reviews."
              />
              <AgitateCard
                title="Lost Opportunities"
                description="You might be losing out on upsell opportunities for guided tours, rentals, or other premium services."
              />
              <AgitateCard
                title="Operational Challenges"
                description="Running a smooth, high-touch operation becomes impossible without driving up costs or overworking your team."
              />
              <AgitateCard
                title="Falling Behind"
                description="In today's world, offering a high-tech, personalized experience isn't a luxury—it's a necessity."
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Enter CampfinderAI: Your Always-On, Voice-Activated Campground Assistant</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Mic className="w-12 h-12 text-green-600" />}
                title="24/7 AI-Powered Support"
                description="Let campers ask questions, book services, and find information without waiting for staff availability."
              />
              <FeatureCard
                icon={<Tent className="w-12 h-12 text-green-600" />}
                title="Hands-Free Convenience"
                description="Campers can get answers about hiking trails, restroom locations, and nearby activities instantly—while they're on the move."
              />
              <FeatureCard
                icon={<Clock className="w-12 h-12 text-green-600" />}
                title="Operational Efficiency"
                description="Free up your team from answering repetitive questions so they can focus on high-value tasks like guest satisfaction and maintenance."
              />
              <FeatureCard
                icon={<DollarSign className="w-12 h-12 text-green-600" />}
                title="Boost Revenue"
                description="Easily promote upgrades, services, and premium experiences through the AI, which can upsell at the right moments."
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-green-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">What Campground Owners Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="CampfinderAI has completely transformed how we manage our campground. Our guests love the convenience, and our team has more time to focus on creating memorable experiences."
                author="Jason, Owner of Lakeside Retreat Campground"
              />
              <TestimonialCard
                quote="Before CampfinderAI, we struggled to provide 24/7 support without draining our resources. Now, our guests can get what they need anytime—no extra staffing required."
                author="Sarah, Manager at Pine Hills Campground"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-800">Ready to Elevate Your Campground Experience?</h2>
            <p className="text-xl mb-8">Don't get left behind—offer the modern, AI-driven support that your campers expect. Let CampfinderAI handle the details, so you can focus on creating unforgettable experiences.</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full transition-colors">
              Get a Free Demo Today
            </Button>
            <p className="mt-4 text-sm text-gray-600">Start offering cutting-edge service in just minutes!</p>
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is CampfinderAI difficult to set up?</AccordionTrigger>
                <AccordionContent>
                  Not at all! Our system integrates seamlessly with your existing operations and can be customized to your specific needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What happens if my staff wants to step in?</AccordionTrigger>
                <AccordionContent>
                  CampfinderAI works alongside your team, offering instant answers for repetitive queries. If needed, the AI will direct more complex requests to your staff.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How will this affect guest satisfaction?</AccordionTrigger>
                <AccordionContent>
                  Guests love having instant access to information, especially when it's delivered without hassle. CampfinderAI ensures every camper feels supported 24/7.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Tent className="w-6 h-6" />
            <span className="text-xl font-bold">CampfinderAI</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-green-300 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-green-300 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-green-300 transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <div>
            <p>&copy; 2024 CampfinderAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AgitateCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-orange-200">
      <h3 className="text-xl font-semibold mb-2 text-orange-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }: { quote: string, author: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
      <p className="mb-4 italic text-gray-700">"{quote}"</p>
      <p className="font-semibold text-green-800">- {author}</p>
    </div>
  )
}