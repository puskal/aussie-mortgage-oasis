import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  LinkedinIcon,
  Mail
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Senior Mortgage Broker",
      experience: "8+ years",
      qualifications: ["Cert IV Finance", "MFAA Member"],
      bio: "Specialising in first home buyers and complex loan scenarios. Sarah has helped over 300 families achieve their homeownership dreams.",
      email: "sarah@australianhomeloans.com.au"
    },
    {
      name: "Michael Chen",
      role: "Investment Loan Specialist", 
      experience: "6+ years",
      qualifications: ["Dip Finance", "FBAA Member"],
      bio: "Expert in investment property loans and portfolio growth strategies. Michael has facilitated over $50M in investment loans.",
      email: "michael@australianhomeloans.com.au"
    },
    {
      name: "Emma Rodriguez",
      role: "First Home Buyer Specialist",
      experience: "4+ years", 
      qualifications: ["Cert IV Finance", "MFAA Member"],
      bio: "Passionate about helping young Australians enter the property market. Emma specialises in government schemes and low deposit loans.",
      email: "emma@australianhomeloans.com.au"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Expert Guidance",
      description: "We provide clear, honest advice tailored to your unique financial situation and goals."
    },
    {
      icon: Heart, 
      title: "Client-First Approach",
      description: "Your success is our success. We're committed to finding the best loan solution for you."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Fully licensed and accredited with major industry bodies and lender panels."
    },
    {
      icon: Users,
      title: "Local Knowledge",
      description: "Deep understanding of Australian lending landscape and regional market conditions."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Australian Home Loans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of experienced mortgage brokers dedicated to helping Australians 
            achieve their property dreams. With over 5 years in the industry and 500+ successful 
            loan approvals, we're here to guide you every step of the way.
          </p>
        </div>

        {/* Mission & Stats */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To simplify the home loan process and make homeownership accessible to all Australians. 
                We believe everyone deserves expert guidance when making one of life's biggest financial decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment goes beyond just securing loans - we build lasting relationships and 
                provide ongoing support throughout your property journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-0 shadow-sm bg-section-bg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-sm bg-section-bg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">$200M+</div>
                  <div className="text-sm text-muted-foreground">Loans Settled</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-sm bg-section-bg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Lender Partners</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-sm bg-section-bg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional service to every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of mortgage brokers is here to provide expert guidance 
              and personalised service for your home loan needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium text-primary">Qualifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {member.qualifications.map((qual, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {qual}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="ghost" size="sm">
                      <LinkedinIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="text-center bg-section-bg rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Industry Accreditations</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We maintain the highest industry standards and are fully licensed and accredited.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "ASIC Licensed",
              "MFAA Member", 
              "FBAA Member",
              "30+ Lender Panel",
              "Professional Indemnity Insured",
              "Continuing Education Certified"
            ].map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="cta" size="lg">
              Start Your Application Today
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;