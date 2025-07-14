import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  TrendingUp, 
  Building, 
  Hammer, 
  Star, 
  Shield, 
  Award, 
  CheckCircle,
  Phone,
  Calendar,
  Calculator,
  Users
} from 'lucide-react';
import heroImage from '@/assets/hero-family-home.jpg';
import consultationImage from '@/assets/consultation-meeting.jpg';
import investmentImage from '@/assets/investment-properties.jpg';
import constructionImage from '@/assets/construction-loan.jpg';

const Homepage = () => {
  const services = [
    {
      icon: Home,
      title: "First Home Buyer Loans",
      description: "Expert guidance for first-time buyers with access to government grants and schemes.",
      image: heroImage,
      features: ["First Home Owner Grant", "Low Deposit Options", "Government Schemes"]
    },
    {
      icon: TrendingUp,
      title: "Refinancing",
      description: "Save money by refinancing your existing loan with better rates and terms.",
      image: consultationImage,
      features: ["Lower Interest Rates", "Cash Out Options", "Debt Consolidation"]
    },
    {
      icon: Building,
      title: "Investment Property Loans",
      description: "Build your property portfolio with competitive investment loan solutions.",
      image: investmentImage,
      features: ["Interest Only Options", "Tax Benefits", "Portfolio Growth"]
    },
    {
      icon: Hammer,
      title: "Construction Loans",
      description: "Finance your dream home build with flexible construction loan packages.",
      image: constructionImage,
      features: ["Progress Payments", "Land & Build", "Custom Homes"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Melbourne, VIC",
      rating: 5,
      text: "Australian Home Loans made our first home buying experience seamless. They found us a great rate and handled everything professionally.",
      service: "First Home Buyer"
    },
    {
      name: "David Thompson",
      location: "Sydney, NSW",
      rating: 5,
      text: "Excellent service for my investment property loan. The team's knowledge of the market and quick turnaround was impressive.",
      service: "Investment Loan"
    },
    {
      name: "Lisa Rodriguez",
      location: "Brisbane, QLD",
      rating: 5,
      text: "Refinancing saved me $400 per month! The process was smooth and the advice was spot on. Highly recommended.",
      service: "Refinancing"
    }
  ];

  const trustBadges = [
    { text: "ASIC Licensed", icon: Shield },
    { text: "MFAA Member", icon: Award },
    { text: "5+ Years Experience", icon: CheckCircle },
    { text: "500+ Happy Clients", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Australian 
              <span className="text-cta-primary"> Mortgage Broker</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Expert guidance for first home buyers, investors, and refinancing. 
              We find the right loan for your unique situation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button variant="ctaOutline" size="lg" className="text-lg px-8 py-4">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Repayments
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="bg-trust-badge/20 text-primary-foreground border-trust-badge/30 px-3 py-1">
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Loan Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From first home buyers to seasoned investors, we have the expertise 
              and lender relationships to secure the best loan for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Choose Australian Home Loans?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Local Knowledge",
                    description: "Deep understanding of Australian lending landscape and government schemes."
                  },
                  {
                    title: "30+ Lender Panel", 
                    description: "Access to major banks, credit unions, and specialist lenders for the best rates."
                  },
                  {
                    title: "No Cost to You",
                    description: "Our services are completely free - we're paid by the lenders, not you."
                  },
                  {
                    title: "End-to-End Support",
                    description: "From pre-approval to settlement, we guide you through every step."
                  }
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-success/10 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Mortgage consultation" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cta-primary p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-primary">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cta-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Home Loan Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get pre-approved in minutes or book a free consultation with our expert brokers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call 1300 HOME LOAN
            </Button>
            <Button variant="ctaOutline" size="lg" className="text-lg px-8 py-4 bg-background">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;