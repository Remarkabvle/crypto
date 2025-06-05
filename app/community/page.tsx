"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Star, ArrowRight } from "lucide-react"

export default function CommunityPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm text-blue-400 tracking-widest uppercase mb-4">Community</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Thriving Community</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with other crypto enthusiasts, share your experiences, and learn from the best traders and analysts
            in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">User Testimonials</h3>
              <p className="text-gray-400 mb-4">
                Hear from our satisfied users about how our platform has transformed their crypto investment journey.
              </p>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                Read Stories <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-48 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Forum Discussions</h3>
              <p className="text-gray-400 mb-4">
                Engage in meaningful discussions with other members and get answers to your crypto questions.
              </p>
              <Button
                variant="outline"
                className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Join Forum <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Social Media</h3>
              <p className="text-gray-400 mb-4">
                Follow us on social media for the latest updates, market insights, and community highlights.
              </p>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Follow Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="bg-slate-800/30 rounded-2xl p-8 mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Community Stats</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25K+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1.2K</div>
              <div className="text-gray-400">Daily Discussions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400">Expert Contributors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Community?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Start connecting with like-minded crypto enthusiasts and take your investment knowledge to the next level.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            Join Community
          </Button>
        </div>
      </div>
    </div>
  )
}
