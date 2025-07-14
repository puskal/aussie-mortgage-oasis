import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Users,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "1300 HOME LOAN",
      subtext: "Speak directly with our brokers",
      cta: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "info@australianhomeloans.com.au",
      subtext: "We'll respond within 2 hours",
      cta: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available 9am - 6pm",
      subtext: "Instant answers to your questions",
      cta: "Start Chat"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your home loan journey? Our expert mortgage brokers are here to help. 
            Contact us today for a free consultation and personalized loan solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center group">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{method.title}</h3>
                  <div className="text-lg font-medium text-foreground mb-2">{method.details}</div>
                  <p className="text-muted-foreground mb-6">{method.subtext}</p>
                  <Button variant="cta" className="w-full">
                    {method.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Smith" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="0400 000 000" required />
              </div>

              <div>
                <Label htmlFor="enquiryType">Enquiry Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-home">First Home Buyer</SelectItem>
                    <SelectItem value="refinancing">Refinancing</SelectItem>
                    <SelectItem value="investment">Investment Property</SelectItem>
                    <SelectItem value="construction">Construction Loan</SelectItem>
                    <SelectItem value="commercial">Commercial Loan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your loan requirements, property goals, or any questions you have..."
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                  I consent to Australian Home Loans contacting me about my enquiry and understand 
                  that my information will be handled in accordance with their privacy policy.
                </Label>
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>We'll respond within 2 hours</span>
              </div>
            </CardContent>
          </Card>

          {/* Office Information */}
          <div className="space-y-8">
            
            {/* Office Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-6 h-6" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-foreground">Australian Home Loans</div>
                  <div className="text-muted-foreground">
                    Level 5, 123 Collins Street<br />
                    Melbourne VIC 3000
                  </div>
                </div>
                
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 h-48 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <div>Interactive Map</div>
                      <div className="text-sm">Click to view directions</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="w-6 h-6" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-section-bg rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Emergency consultations available by appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-section-bg">
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Free Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Meet Our Team
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <section className="bg-section-bg rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Before You Contact Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You might find the answer you're looking for in our comprehensive FAQ section, 
              or try our loan calculators for instant estimates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-3">Frequently Asked Questions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Common questions about loans and applications
                </p>
                <Button variant="outline" className="w-full">
                  View FAQs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-3">Loan Calculators</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate repayments and borrowing power
                </p>
                <Button variant="outline" className="w-full">
                  Use Calculators
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-3">Our Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our loan products and services
                </p>
                <Button variant="outline" className="w-full">
                  View Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;