import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  TrendingUp, 
  Building, 
  Hammer, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "First Home Buyer Loans",
      shortDesc: "Expert guidance for first-time buyers",
      fullDesc: "Navigate the property market with confidence. We specialise in helping first home buyers access government schemes, grants, and low deposit options to make homeownership achievable.",
      features: [
        "First Home Owner Grant assistance",
        "Low deposit options (5% deposit possible)",
        "Government scheme applications",
        "Stamp duty concessions guidance",
        "Shared equity loan programs",
        "Guarantor loan arrangements"
      ],
      benefits: [
        "Save $15,000+ with FHOG",
        "Get pre-approved in 24-48 hours",
        "Access to 30+ lenders",
        "No cost to you - lender paid"
      ],
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Refinancing",
      shortDesc: "Save money with better rates and terms",
      fullDesc: "Unlock savings and equity with our refinancing solutions. Whether you want to reduce payments, access equity, or consolidate debt, we'll find you a better deal.",
      features: [
        "Interest rate reduction",
        "Cash out refinancing",
        "Debt consolidation",
        "Switch from variable to fixed",
        "Break costs analysis",
        "Home improvement funding"
      ],
      benefits: [
        "Save $200-500+ per month",
        "Access equity for investments",
        "Consolidate high-interest debt",
        "Switch to better loan features"
      ],
      popular: false
    },
    {
      icon: Building,
      title: "Investment Property Loans",
      shortDesc: "Build your property portfolio",
      fullDesc: "Grow your wealth through property investment. We offer competitive rates, interest-only options, and expert advice on portfolio growth strategies.",
      features: [
        "Interest-only loan options",
        "Cross-collateralization strategies",
        "Portfolio lending solutions",
        "SMSF property loans",
        "Commercial property finance",
        "Tax optimization advice"
      ],
      benefits: [
        "Interest-only payment options",
        "Tax deductible interest",
        "Portfolio growth strategies",
        "Competitive investor rates"
      ],
      popular: false
    },
    {
      icon: Hammer,
      title: "Construction Loans",
      shortDesc: "Finance your dream home build",
      fullDesc: "Build your perfect home with our flexible construction loan packages. We handle progress payments and work with your builder throughout the construction process.",
      features: [
        "Land and construction packages",
        "Progress payment scheduling",
        "Fixed price contracts",
        "Custom home builds",
        "Knockdown rebuilds",
        "Off-the-plan purchases"
      ],
      benefits: [
        "Interest only during construction",
        "Progress payment automation",
        "Fixed rate options available",
        "Expert build finance advice"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "Asset Finance",
      description: "Equipment and vehicle financing for business and personal use",
      icon: DollarSign
    },
    {
      title: "Personal Loans", 
      description: "Unsecured loans for consolidation, renovations, or major purchases",
      icon: Clock
    },
    {
      title: "Insurance Services",
      description: "Home, contents, and mortgage protection insurance",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Loan Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From first home buyers to seasoned investors, we have the expertise and lender 
            relationships to secure the best loan solution for your unique situation.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="lg:flex">
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                            {service.title}
                          </h3>
                          {service.popular && (
                            <Badge variant="default" className="mt-1 bg-cta-primary text-primary">
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="mb-8">
                        <h4 className="font-semibold text-primary mb-4">Key Benefits:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="cta">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </div>

                    <div className="lg:w-1/2 bg-section-bg p-8 lg:p-12">
                      <h4 className="font-semibold text-primary mb-6">What's Included:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond home loans, we offer a comprehensive range of financial services 
              to meet all your borrowing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-section-bg rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Simple Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make getting a loan simple and stress-free. Here's how we work together.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Discuss your goals and assess your financial situation"
              },
              {
                step: "2", 
                title: "Loan Comparison",
                description: "We compare 30+ lenders to find your best options"
              },
              {
                step: "3",
                title: "Application",
                description: "We handle the paperwork and liaise with lenders"
              },
              {
                step: "4",
                title: "Settlement",
                description: "We guide you through to settlement and beyond"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Start Your Application
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;