import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp,
  Home,
  Calculator,
  Building,
  ArrowRight
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "RBA Cash Rate Update: What It Means for Your Home Loan",
    excerpt: "The Reserve Bank of Australia has held the cash rate steady at 4.35%. Here's what this means for mortgage holders and first home buyers in 2024.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Market Update",
    featured: true
  };

  const blogPosts = [
    {
      title: "First Home Buyer's Guide: Government Schemes in 2024",
      excerpt: "Complete guide to all available government schemes, grants, and concessions for first home buyers across Australia.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "First Home Buyers",
      icon: Home
    },
    {
      title: "5 Ways to Improve Your Borrowing Power",
      excerpt: "Simple strategies to increase how much you can borrow for your home loan, from paying down debts to improving your credit score.",
      author: "Michael Chen",
      date: "December 5, 2024", 
      readTime: "6 min read",
      category: "Tips & Advice",
      icon: TrendingUp
    },
    {
      title: "Investment Property Loans: Tax Benefits Explained",
      excerpt: "Understanding negative gearing, depreciation, and other tax benefits available to property investors in Australia.",
      author: "Sarah Johnson",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Investment Property",
      icon: Building
    },
    {
      title: "Fixed vs Variable Rates: Which is Right for You?",
      excerpt: "Comparing fixed and variable interest rates in the current market environment to help you make the right choice.",
      author: "Michael Chen", 
      date: "November 22, 2024",
      readTime: "5 min read",
      category: "Loan Features",
      icon: Calculator
    },
    {
      title: "Hidden Costs of Buying Property: A Complete Breakdown",
      excerpt: "Beyond the deposit and loan, here are all the additional costs you need to budget for when buying property.",
      author: "Emma Rodriguez",
      date: "November 15, 2024",
      readTime: "6 min read", 
      category: "Buying Guide",
      icon: Calculator
    },
    {
      title: "Refinancing Checklist: When and How to Switch Loans",
      excerpt: "Step-by-step guide to refinancing your home loan, including when it makes sense and how to compare options.",
      author: "Sarah Johnson",
      date: "November 8, 2024",
      readTime: "9 min read",
      category: "Refinancing",
      icon: TrendingUp
    }
  ];

  const categories = [
    "All Posts",
    "Market Update", 
    "First Home Buyers",
    "Investment Property",
    "Refinancing",
    "Tips & Advice",
    "Loan Features",
    "Buying Guide"
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Home Loan Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest market updates, expert tips, and comprehensive 
            guides to help you navigate the Australian property and mortgage landscape.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-r from-primary to-primary-light">
            <CardContent className="p-8 lg:p-12 text-primary-foreground">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="bg-cta-primary text-primary mb-4">
                    Featured Article
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg mb-6 text-primary-foreground/90 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-primary-foreground/80 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button variant="cta" size="lg">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-primary-foreground/10 p-8 rounded-lg">
                    <TrendingUp className="w-24 h-24 text-primary-foreground/60 mx-auto" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${index === 0 ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <post.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mb-16">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <section className="bg-section-bg rounded-lg p-8 lg:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest home loan tips, market updates, and expert insights 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" className="px-8">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Need Help Now?
            </h2>
            <p className="text-muted-foreground">
              Don't wait - get expert mortgage advice today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-3">Use Our Calculators</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate repayments and borrowing power
                </p>
                <Button variant="outline" className="w-full">
                  Try Calculators
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-3">Get Pre-Approved</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Know your budget before you start shopping
                </p>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-3">Speak to a Broker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get personalized advice from our experts
                </p>
                <Button variant="outline" className="w-full">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;