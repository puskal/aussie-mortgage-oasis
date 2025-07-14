import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, TrendingUp, Home, DollarSign } from 'lucide-react';

const CalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [deposit, setDeposit] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [income, setIncome] = useState(80000);
  const [expenses, setExpenses] = useState(3000);
  
  // Repayment Calculator
  const calculateRepayments = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return {
      monthly: monthlyPayment,
      weekly: monthlyPayment * 12 / 52,
      fortnightly: monthlyPayment * 12 / 26,
      totalInterest: (monthlyPayment * numberOfPayments) - principal,
      totalAmount: monthlyPayment * numberOfPayments
    };
  };

  // Borrowing Power Calculator  
  const calculateBorrowingPower = () => {
    const netIncome = income - expenses * 12;
    const serviceability = netIncome * 0.3; // 30% of net income
    const monthlyServiceability = serviceability / 12;
    
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const maxLoan = (monthlyServiceability * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) / 
                   (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
    
    return Math.min(maxLoan, income * 6); // Cap at 6x income
  };

  // Stamp Duty Calculator (NSW rates example)
  const calculateStampDuty = (propertyValue: number) => {
    if (propertyValue <= 14000) return 1.25 * propertyValue / 100;
    if (propertyValue <= 32000) return 175 + 1.5 * (propertyValue - 14000) / 100;
    if (propertyValue <= 87000) return 445 + 1.75 * (propertyValue - 32000) / 100;
    if (propertyValue <= 310000) return 1407.5 + 3.5 * (propertyValue - 87000) / 100;
    if (propertyValue <= 1040000) return 9217.5 + 4.5 * (propertyValue - 310000) / 100;
    return 42067.5 + 5.5 * (propertyValue - 1040000) / 100;
  };

  const repayments = calculateRepayments();
  const borrowingPower = calculateBorrowingPower();
  const propertyValue = loanAmount + deposit;
  const stampDuty = calculateStampDuty(propertyValue);

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Loan Calculators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Use our calculators to estimate your borrowing power, loan repayments, and 
            associated costs. Get a clear picture before you apply.
          </p>
        </div>

        <Tabs defaultValue="repayments" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1">
            <TabsTrigger value="repayments" className="flex items-center gap-2 p-4">
              <Calculator className="w-5 h-5" />
              <span className="hidden sm:inline">Repayment Calculator</span>
              <span className="sm:hidden">Repayments</span>
            </TabsTrigger>
            <TabsTrigger value="borrowing" className="flex items-center gap-2 p-4">
              <TrendingUp className="w-5 h-5" />
              <span className="hidden sm:inline">Borrowing Power</span>
              <span className="sm:hidden">Borrowing</span>
            </TabsTrigger>
            <TabsTrigger value="costs" className="flex items-center gap-2 p-4">
              <DollarSign className="w-5 h-5" />
              <span className="hidden sm:inline">Buying Costs</span>
              <span className="sm:hidden">Costs</span>
            </TabsTrigger>
          </TabsList>

          {/* Repayment Calculator */}
          <TabsContent value="repayments">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Calculator className="w-6 h-6" />
                    Loan Repayment Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="pl-8"
                        placeholder="500,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      placeholder="6.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="loanTerm">Loan Term</Label>
                    <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                        <SelectItem value="35">35 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="cta" className="w-full">
                    Calculate Repayments
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-section-bg">
                <CardHeader>
                  <CardTitle className="text-primary">Your Repayments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        ${repayments.monthly.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Monthly</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        ${repayments.fortnightly.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Fortnightly</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest:</span>
                      <span className="font-semibold text-primary">
                        ${repayments.totalInterest.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Amount:</span>
                      <span className="font-semibold text-primary">
                        ${repayments.totalAmount.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6">
                    Get Pre-Approved for ${loanAmount.toLocaleString('en-AU')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Borrowing Power Calculator */}
          <TabsContent value="borrowing">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-6 h-6" />
                    Borrowing Power Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="income">Annual Income</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="income"
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(Number(e.target.value))}
                        className="pl-8"
                        placeholder="80,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expenses">Monthly Expenses</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="expenses"
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(Number(e.target.value))}
                        className="pl-8"
                        placeholder="3,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="deposit">Available Deposit</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="deposit"
                        type="number"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="pl-8"
                        placeholder="100,000"
                      />
                    </div>
                  </div>

                  <Button variant="cta" className="w-full">
                    Calculate Borrowing Power
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-section-bg">
                <CardHeader>
                  <CardTitle className="text-primary">Your Borrowing Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${borrowingPower.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-muted-foreground mb-6">Estimated borrowing capacity</div>
                    
                    <div className="bg-background p-4 rounded-lg mb-6">
                      <div className="text-lg font-semibold text-primary mb-2">
                        Total Property Budget
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        ${(borrowingPower + deposit).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Including your ${deposit.toLocaleString('en-AU')} deposit
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Speak to a Broker
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Buying Costs Calculator */}
          <TabsContent value="costs">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <DollarSign className="w-6 h-6" />
                    Property Buying Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Property Value</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={propertyValue}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setLoanAmount(newValue - deposit);
                        }}
                        className="pl-8"
                        placeholder="600,000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Loan Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="pl-8"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Deposit</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          type="number"
                          value={deposit}
                          onChange={(e) => setDeposit(Number(e.target.value))}
                          className="pl-8"
                        />
                      </div>
                    </div>
                  </div>

                  <Button variant="cta" className="w-full">
                    Calculate Costs
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-section-bg">
                <CardHeader>
                  <CardTitle className="text-primary">Estimated Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stamp Duty (NSW):</span>
                      <span className="font-semibold">
                        ${stampDuty.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Legal Fees:</span>
                      <span className="font-semibold">$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Building Inspection:</span>
                      <span className="font-semibold">$600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Application:</span>
                      <span className="font-semibold">$600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LMI (if applicable):</span>
                      <span className="font-semibold">
                        ${deposit / propertyValue < 0.2 ? (loanAmount * 0.02).toLocaleString('en-AU', { maximumFractionDigits: 0 }) : '0'}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold text-primary">
                      <span>Total Costs:</span>
                      <span>
                        ${(stampDuty + 2700 + (deposit / propertyValue < 0.2 ? loanAmount * 0.02 : 0))
                          .toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <div className="bg-background p-4 rounded-lg mt-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Total Cash Required</div>
                      <div className="text-2xl font-bold text-primary">
                        ${(deposit + stampDuty + 2700 + (deposit / propertyValue < 0.2 ? loanAmount * 0.02 : 0))
                          .toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <Card className="mt-12 border border-muted bg-muted/20">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> These calculations are estimates only and should not be relied upon for financial decisions. 
              Interest rates, fees, and government charges may vary. Contact our brokers for accurate, personalized quotes based on your situation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalculatorPage;