"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function PricingPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    })
  }, [])

  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      description: "Perfect for beginners getting started with crypto analysis",
      features: ["Basic market analysis", "Email support", "Daily market reports", "Mobile app access"],
      notIncluded: ["Advanced AI insights", "Real-time alerts", "Portfolio tracking"],
      buttonText: "Choose Basic",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Most popular plan for serious crypto investors",
      features: [
        "All Basic features",
        "Advanced AI insights",
        "Real-time alerts",
        "Portfolio tracking",
        "Priority support",
        "Custom indicators",
      ],
      notIncluded: ["Dedicated account manager", "Custom API access"],
      buttonText: "Choose Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For professional traders and institutions",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom API access",
        "White-label solutions",
        "Advanced analytics",
        "Custom integrations",
        "24/7 phone support",
      ],
      notIncluded: [],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm text-blue-400 tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose The Plan That Works For You</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple and transparent pricing designed to suit your needs, whether you're just starting out or scaling up
            your crypto investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-slate-800/50 border-slate-700 backdrop-blur-sm ${
                plan.popular ? "border-blue-500 scale-105" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-blue-400" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-center opacity-50">
                      <div className="w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-3 h-3 border border-gray-500 rounded-full" />
                      </div>
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/30 rounded-lg p-6 text-left">
              <h3 className="text-white font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 text-left">
              <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">
                We offer a 14-day free trial for all new users to explore our platform and features.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 text-left">
              <h3 className="text-white font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
