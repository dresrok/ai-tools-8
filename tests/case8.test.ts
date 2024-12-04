import { MortgageInstallmentCalculator } from '../src/case8';

describe('MortgageInstallmentCalculator', () => {
  it('should calculate monthly payment when amounts are small', () => {
    const monthlyPaymentAmount =
      MortgageInstallmentCalculator.calculateMonthlyPayment(1000, 1, 12);
    expect(monthlyPaymentAmount).toBeCloseTo(88.84, 1);
  });

  it('should calculate monthly payment when amount is large', () => {
    const monthlyPaymentAmount =
      MortgageInstallmentCalculator.calculateMonthlyPayment(10000000, 1, 12);
    expect(monthlyPaymentAmount).toBeCloseTo(888487.88, 1);
  });

  it('should calculate monthly payment when principal is zero', () => {
    const monthlyPaymentAmount =
      MortgageInstallmentCalculator.calculateMonthlyPayment(0, 1, 12);
    expect(monthlyPaymentAmount).toBe(0);
  });

  it('should calculate monthly payment when interest rate is zero', () => {
    const monthlyPaymentAmount =
      MortgageInstallmentCalculator.calculateMonthlyPayment(1000, 1, 0);
    expect(monthlyPaymentAmount).toBeCloseTo(83.33, 2);
  });

  it('should throw error on negative tenure', () => {
    expect(() =>
      MortgageInstallmentCalculator.calculateMonthlyPayment(20, -10, 14.5)
    ).toThrow('Negative values are not allowed');
  });

  it('should throw error on negative interest rate', () => {
    expect(() =>
      MortgageInstallmentCalculator.calculateMonthlyPayment(20, 1, -12)
    ).toThrow('Negative values are not allowed');
  });

  it('should throw error on negative principal amount', () => {
    expect(() =>
      MortgageInstallmentCalculator.calculateMonthlyPayment(-20, 10, 14.5)
    ).toThrow('Negative values are not allowed');
  });
});
