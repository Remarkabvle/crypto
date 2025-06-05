"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0 bg-[url('/hero.png?height=1080&width=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Should I Buy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bitcoin
              </span>{" "}
              Today?
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-powered macro analysis and personalized recommendations
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Analyzing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-slate-900 px-8 py-4 text-lg"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-sm text-blue-400 tracking-widest uppercase mb-4">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Smart, Fast, and Effective</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform leverages cutting-edge AI to provide you with real-time insights and personalized investment
              recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Driven Insights</h3>
                <p className="text-gray-400">
                  Leverage advanced machine learning algorithms to get personalized investment recommendations based on
                  market data.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analysis</h3>
                <p className="text-gray-400">
                  Stay ahead of the market with up-to-the-minute data analysis and instant notifications on market
                  movements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-400">
                  Bank-grade security with 99.9% uptime ensures your data and investments are always protected and
                  accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B</div>
              <div className="text-gray-400">Assets Analyzed</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.2%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400">Market Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make Smarter Investment Decisions?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of investors who trust our AI-powered platform for their crypto investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Started Free
              </Button>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-slate-900 px-8 py-4 text-lg"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
