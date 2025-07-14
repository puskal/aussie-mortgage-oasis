import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Loan Calculator', path: '/calculator' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'First Home Buyer Loans', path: '/services' },
    { name: 'Refinancing', path: '/services' },
    { name: 'Investment Property Loans', path: '/services' },
    { name: 'Construction Loans', path: '/services' },
    { name: 'Commercial Loans', path: '/services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Credit Guide', path: '/credit-guide' },
    { name: 'Complaints Policy', path: '/complaints' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-cta-primary p-2 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <span className="text-xl font-bold">
                Australian Home Loans
              </span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted mortgage broker helping Australians achieve their property dreams 
              with expert guidance and competitive loan solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cta-primary" />
                <span>1300 HOME LOAN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cta-primary" />
                <span>info@australianhomeloans.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cta-primary" />
                <span>Level 5, 123 Collins Street, Melbourne VIC 3000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-cta-primary" />
                <span>ASIC License: 123456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4 text-cta-primary" />
                <span>MFAA Member #12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Follow Us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-cta-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-primary-foreground/80">
                © {currentYear} Australian Home Loans. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Australian Credit License 123456 | ABN 12 345 678 901
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="text-xs text-primary-foreground/60 leading-relaxed">
            <p className="mb-2">
              <strong>Important:</strong> This website contains general information only and does not take into account your objectives, 
              financial situation, or needs. You should consider whether the products or services mentioned on this website are 
              appropriate for your particular circumstances and seek professional advice.
            </p>
            <p>
              Australian Home Loans is a Credit Representative of [Aggregator Name] Australian Credit License [Number]. 
              We do not charge fees to consumers for our credit assistance service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;