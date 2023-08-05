'use client'

/**
 * Calculate the monthly payment - the amount to be paid monthly.
 * @param {*} loanAmount 
 * @param {*} interestRate // 4.0% => 0.04
 * @param {*} terms // (in months) 30 years => 360 months
 * @returns 
 */
const monthlyPayment = (loanAmount, interestRate, terms) => {
    const monthlyInterestRate = interestRate / 12;
    let res = loanAmount * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), terms)) / (Math.pow((1 + monthlyInterestRate), terms) - 1);
    return res;
};

/**
 * Calculate the values for a single term in the amortization 
 * schedule. NOTE: The 'outstandingLoanBalance' is the declining
 * balance left on the loan.
 * @param {*} totalMonthlyPayment 
 * @param {*} outstandingLoanBalance 
 * @param {*} annualInterestRate 
 * @returns 
 */
const amortizationPeriod = (monthlyPayment, outstandingLoanBalance, annualInterestRate, extraMonthlyPayment) => {
    const interestPayment = outstandingLoanBalance * annualInterestRate / 12;
    const principalPayment = monthlyPayment - (interestPayment);
    const termPayment = principalPayment + interestPayment;

    const remainingBalance = outstandingLoanBalance - (principalPayment + extraMonthlyPayment);

    return {
        outstandingBalance: remainingBalance,
        termPayment: termPayment, 
        principalPayment: principalPayment, 
        interestPayment: interestPayment
    };
};

/**
 * Builds the amortization schedule for the loan.
 * @param {*} loanAmount 
 * @param {*} interestRate 
 * @param {*} terms 
 * @returns an array of objects representing the amortization schedule.
 */
const amortizationSchedule = (salePrice, downPayment, interestRate, terms, homeInsurance, propertyTax, extraMonthlyPayment) => {
    const schedule = [];
    const loanAmount = salePrice - downPayment;

    let remaining = loanAmount;
    let adjustedIntRate = interestRate / 100;

    const monthly = monthlyPayment(loanAmount, adjustedIntRate, terms);
    for (let i = 0; i < terms; i++) {
        let currentBalance = remaining;
        let { outstandingBalance, termPayment, principalPayment, interestPayment } = amortizationPeriod(monthly, currentBalance, adjustedIntRate, extraMonthlyPayment);

        const totalMonthlyCustomerPayment = homeInsurance + propertyTax + termPayment + extraMonthlyPayment;

        if (remaining >= principalPayment) {
            remaining = outstandingBalance;
            schedule.push({ term: i, remaining, termPayment, principalPayment, interestPayment, totalMonthlyCustomerPayment });
        } else {
            remaining = 0;
            schedule.push({ term: i, remaining, termPayment, principalPayment, interestPayment, totalMonthlyCustomerPayment });
            
            // Break rather than continue filling the amortization schedule with $0 values.
            break;
        }
    }

    return schedule;
};

export {
    monthlyPayment,
    amortizationPeriod,
    amortizationSchedule,
}