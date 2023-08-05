// const loanAmount = 250000;
// const interestRate = 0.04; // 4.0% => 0.04
// const terms = 360; // (in months) 30 years => 360 months
const monthlyPayment = (loanAmount, interestRate, terms) => {
    const monthlyInterestRate = interestRate / 12;
    return loanAmount * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), terms)) / (Math.pow((1 + monthlyInterestRate), terms) - 1);
};

const amortizationPeriod = (totalMonthlyPayment, outstandingLoanBalance, annualInterestRate) => {
    // const totalMonthlyPayment = 1500;
    // const outstandingLoanBalance = 240000; // Term 1 => 250000 - "down payment"

    const payment = totalMonthlyPayment - (outstandingLoanBalance * annualInterestRate / 12);
    return payment;
};

const amortizationSchedule = (loanAmount, interestRate, terms) => {
    const schedule = [];
    let remainingBalance = loanAmount;

    const monthly = monthlyPayment(loanAmount, interestRate, terms);
    for (let i = 0; i < terms; i++) {
        let currentBalance = remainingBalance;
        let endingBalance = amortizationPeriod(monthly, currentBalance, interestRate);
        remainingBalance = endingBalance;
        schedule.push({ 'term': i, endingBalance });
    }

    return schedule;
};

export {
    monthlyPayment,
    amortizationPeriod,
    amortizationSchedule,
}