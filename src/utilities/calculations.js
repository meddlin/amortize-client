// const loanAmount = 250000;
// const interestRate = 0.04; // 4.0% => 0.04
// const terms = 360; // (in months) 30 years => 360 months

/**
 * Calculate the monthly payment - the amount to be paid monthly.
 * @param {*} loanAmount 
 * @param {*} interestRate 
 * @param {*} terms 
 * @returns 
 */
const monthlyPayment = (loanAmount, interestRate, terms) => {
    const monthlyInterestRate = interestRate / 12;
    let res = loanAmount * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), terms)) / (Math.pow((1 + monthlyInterestRate), terms) - 1);
    
    console.log(`
        MONTHLY PAYMENT | interestRate: ${interestRate}, monthlyInterestRate: ${monthlyInterestRate}, res: ${res}
    `);
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
const amortizationPeriod = (totalMonthlyPayment, outstandingLoanBalance, annualInterestRate) => {
    // const totalMonthlyPayment = 1500;
    // const outstandingLoanBalance = 240000; // Term 1 => 250000 - "down payment"

    const interestPayment = outstandingLoanBalance * annualInterestRate / 12;
    const principalPayment = totalMonthlyPayment - (interestPayment);
    const termPayment = principalPayment + interestPayment;

    const endingBalance = outstandingLoanBalance - (termPayment);

    console.log(`
        AMORTIZATION PERIOD | 
        totalMonthlyPayment: ${totalMonthlyPayment}, 
        outstandingLoanBalance: ${outstandingLoanBalance}, 
        annualInterestRate: ${annualInterestRate}, interestPayment: ${interestPayment}, principalPayment: ${principalPayment}, termPayment: ${termPayment}, endingBalance: ${endingBalance}
    `);

    return {
        endingBalance: endingBalance,
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
const amortizationSchedule = (salePrice, downPayment, interestRate, terms) => {
    const schedule = [];
    const loanAmount = salePrice - downPayment;

    let remainingBalance = loanAmount;
    let adjustedIntRate = interestRate / 100;

    const monthly = monthlyPayment(loanAmount, adjustedIntRate, terms);
    for (let i = 0; i < terms; i++) {
        let currentBalance = remainingBalance;
        let { endingBalance, termPayment, principalPayment, interestPayment } = amortizationPeriod(monthly, currentBalance, adjustedIntRate);
        remainingBalance = endingBalance;

        schedule.push({ term: i, endingBalance, termPayment, principalPayment, interestPayment });
    }

    return schedule;
};

export {
    monthlyPayment,
    amortizationPeriod,
    amortizationSchedule,
}