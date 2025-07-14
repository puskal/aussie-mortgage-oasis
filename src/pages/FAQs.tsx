import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Getting Started",
      badge: "Popular",
      faqs: [
        {
          question: "How much can I borrow for a home loan?",
          answer: "Your borrowing capacity depends on several factors including your income, expenses, existing debts, credit history, and the loan type. Generally, lenders will allow you to borrow 3-6 times your annual income, but we recommend using our borrowing power calculator for a more accurate estimate. Our brokers can help you get pre-approved to know your exact borrowing capacity."
        },
        {
          question: "How much deposit do I need?",
          answer: "While a 20% deposit is ideal to avoid Lenders Mortgage Insurance (LMI), you can buy with as little as 5% deposit. First home buyers may access special schemes allowing even lower deposits. Our brokers can explain all available options including guarantor loans and low deposit government schemes."
        },
        {
          question: "What is pre-approval and why do I need it?",
          answer: "Pre-approval is a conditional approval from a lender for a specific loan amount. It gives you confidence when house hunting, shows sellers you're a serious buyer, and helps you understand your budget. Pre-approval typically lasts 90 days and doesn't guarantee final approval, but it's a crucial first step in the buying process."
        },
        {
          question: "How long does the loan application process take?",
          answer: "The timeframe varies depending on the lender and complexity of your application. Pre-approval can take 2-5 business days, while full approval typically takes 2-3 weeks after submitting all required documents. Our brokers streamline this process and keep you updated throughout."
        }
      ]
    },
    {
      category: "Costs & Fees",
      badge: "Important",
      faqs: [
        {
          question: "What are the costs involved in getting a home loan?",
          answer: "Main costs include: application fees ($0-$800), valuation fees ($150-$600), legal fees ($1,200-$2,000), building inspection ($400-$800), and potentially Lenders Mortgage Insurance if borrowing over 80% of property value. We provide a detailed cost breakdown for your specific situation."
        },
        {
          question: "What is Lenders Mortgage Insurance (LMI)?",
          answer: "LMI protects the lender if you can't repay your loan and is required when borrowing more than 80% of the property value. It's a one-off cost ranging from $1,000-$50,000+ depending on loan amount and deposit size. While it adds to costs, it allows you to buy with a smaller deposit."
        },
        {
          question: "Are there any fees for using a mortgage broker?",
          answer: "No, our services are completely free to you. We're paid a commission by the lender when your loan settles, so there's no cost for our expert advice, loan comparison, application assistance, and ongoing support. You get professional service at no charge."
        },
        {
          question: "What ongoing costs should I budget for?",
          answer: "Beyond loan repayments, budget for: council rates ($1,000-$4,000/year), home insurance ($500-$2,000/year), maintenance and repairs (1-2% of property value annually), and potentially strata fees for apartments. We help you calculate total ownership costs."
        }
      ]
    },
    {
      category: "Loan Types & Features",
      badge: "Essential",
      faqs: [
        {
          question: "What's the difference between fixed and variable rates?",
          answer: "Variable rates can go up or down with market conditions, offering flexibility but uncertainty. Fixed rates lock in your rate for 1-5 years, providing payment certainty but less flexibility. Many borrowers choose a split loan combining both. We'll help you choose based on your risk tolerance and market conditions."
        },
        {
          question: "What is an offset account and should I get one?",
          answer: "An offset account is a transaction account linked to your home loan. The balance reduces the interest charged on your loan (e.g., $50,000 in offset saves interest on $50,000 of your loan). They're beneficial if you maintain a decent balance and can help you pay off your loan faster."
        },
        {
          question: "What's the difference between principal and interest vs interest-only loans?",
          answer: "Principal and interest (P&I) loans have repayments covering both loan principal and interest, gradually reducing your debt. Interest-only loans only cover interest for a set period (typically 1-5 years), resulting in lower payments but no debt reduction. Interest-only is often used by investors for tax benefits."
        },
        {
          question: "Can I get a home loan if I'm self-employed?",
          answer: "Yes, but the process is different. Self-employed borrowers typically need 2 years of tax returns, financial statements, and sometimes bank statements showing regular income. Some lenders offer low-doc loans with alternative income verification. We specialize in self-employed applications and know which lenders are most flexible."
        }
      ]
    },
    {
      category: "First Home Buyers",
      badge: "Beginner",
      faqs: [
        {
          question: "What government schemes are available for first home buyers?",
          answer: "Key schemes include: First Home Owner Grant (FHOG) up to $15,000, First Home Loan Deposit Scheme (5% deposit, no LMI), and various state-based concessions on stamp duty. Eligibility varies by state and property price. We help you identify and apply for all available benefits."
        },
        {
          question: "Can I buy with a 5% deposit?",
          answer: "Yes, through several options: the First Home Loan Deposit Scheme (for eligible first home buyers), family guarantee loans, or paying LMI. Each option has different requirements and costs. We'll explain all options and help you choose the best approach for your situation."
        },
        {
          question: "What documents do I need for a home loan application?",
          answer: "Typically required: payslips (3 months), tax returns (2 years), bank statements (3 months), employment contract, ID documents, and details of assets/liabilities. Additional documents may be needed based on your situation. We provide a personalized checklist to streamline your application."
        },
        {
          question: "Should I buy off-the-plan or an established property?",
          answer: "Both have pros and cons. Off-the-plan offers potential capital growth during construction, government incentives, and ability to customize, but carries completion risk. Established properties offer immediate possession and known conditions but may need renovations. We help you weigh the options based on your goals."
        }
      ]
    },
    {
      category: "Investment Property",
      badge: "Advanced", 
      faqs: [
        {
          question: "How do investment property loans differ from home loans?",
          answer: "Investment loans typically have higher interest rates (0.1-0.5% more), require larger deposits (10-20% minimum), and have stricter serviceability requirements. However, they offer interest-only options and tax benefits. Rental income can be used to service the loan (usually 75-80% of rental income is counted)."
        },
        {
          question: "What are the tax benefits of investment property?",
          answer: "You can claim deductions for loan interest, property management fees, maintenance, depreciation, council rates, insurance, and other property-related expenses. If expenses exceed rental income, you may benefit from negative gearing. Always consult a tax professional for specific advice."
        },
        {
          question: "Can I use equity in my home to buy an investment property?",
          answer: "Yes, if you have sufficient equity (typically need to keep 20% equity in your home), you can refinance or get a line of credit to fund the investment property deposit. This strategy can help you build a property portfolio faster but increases your overall debt and risk."
        },
        {
          question: "What deposit do I need for an investment property?",
          answer: "Most lenders require 10-20% deposit for investment properties, plus costs. Some specialist lenders may accept lower deposits with LMI. The exact amount depends on your financial situation, the property, and lender policies. We can help structure your purchase to minimize upfront costs."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Find answers to common questions about home loans, the application process, 
            and working with mortgage brokers.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.category}
                  <Badge variant="secondary" className="text-xs">
                    {category.badge}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-primary pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try different keywords or browse our categories below.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Still Have Questions */}
        <Card className="mt-16 bg-section-bg border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert mortgage brokers are here to help. 
              Get personalized answers to your specific situation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Button variant="cta" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </Button>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <strong>Call:</strong> 1300 HOME LOAN | <strong>Email:</strong> info@australianhomeloans.com.au
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-3">Loan Calculator</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Calculate your repayments and borrowing power
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Use Calculator
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-3">Get Pre-Approved</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Know your borrowing capacity before you buy
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-3">Book Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak with an expert broker about your needs
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQs;