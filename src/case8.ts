export class MortgageInstallmentCalculator {
  /**
   * Calculates the monthly payment for a mortgage
   * @param p Principal amount
   * @param t Term of mortgage in years
   * @param r Rate of interest
   * @returns Monthly payment amount
   */
  public static calculateMonthlyPayment(
    p: number,
    t: number,
    r: number
  ): number {
    //cannot have negative loanAmount, term duration and rate of interest
    if (p < 0 || t <= 0 || r < 0) {
      throw new Error('Negative values are not allowed');
    }

    // Convert interest rate into a decimal - eg. 6.5% = 0.065
    r /= 100.0;

    // convert term in years to term in months
    const tim = t * 12;

    //for zero interest rates
    if (r === 0) return p / tim;

    // convert into monthly rate
    const m = r / 12.0;

    // Calculate the monthly payment
    // The Math.pow() method is used calculate values raised to a power
    const monthlyPayment = (p * m) / (1 - Math.pow(1 + m, -tim));

    return monthlyPayment;
  }
}
