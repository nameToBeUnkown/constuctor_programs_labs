export class Money {
    constructor(
      private wholePart: number = 0,
      private fractionalPart: number = 0,
      private readonly currency: string = 'UAH'
    ) {
      this.normalize();
    }
  
    private normalize(): void {
      if (this.fractionalPart >= 100) {
        this.wholePart += Math.floor(this.fractionalPart / 100);
        this.fractionalPart %= 100;
      }
    }
  
    setAmount(wholePart: number, fractionalPart: number): void {
      this.wholePart = wholePart;
      this.fractionalPart = fractionalPart;
      this.normalize();
    }
  
    getWholePart(): number {
      return this.wholePart;
    }
  
    getFractionalPart(): number {
      return this.fractionalPart;
    }
  
    getCurrency(): string {
      return this.currency;
    }
  
    toString(): string {
      return `${this.wholePart}.${this.fractionalPart.toString().padStart(2, '0')} ${this.currency}`;
    }
  
    add(other: Money): Money {
      if (this.currency !== other.currency) {
        throw new Error(`Cannot add different currencies: ${this.currency} and ${other.currency}`);
      }
      
      const newWholePart = this.wholePart + other.wholePart;
      const newFractionalPart = this.fractionalPart + other.fractionalPart;
      
      return new Money(newWholePart, newFractionalPart, this.currency);
    }
  
    subtract(other: Money): Money {
      if (this.currency !== other.currency) {
        throw new Error(`Cannot subtract different currencies: ${this.currency} and ${other.currency}`);
      }
      
      let newWholePart = this.wholePart - other.wholePart;
      let newFractionalPart = this.fractionalPart - other.fractionalPart;
      
      if (newFractionalPart < 0) {
        newWholePart--;
        newFractionalPart += 100;
      }
      
      if (newWholePart < 0) {
        throw new Error("Cannot have negative money amount");
      }
      
      return new Money(newWholePart, newFractionalPart, this.currency);
    }
  
    multiply(factor: number): Money {
      if (factor < 0) {
        throw new Error("Cannot multiply by negative factor");
      }
      
      const totalCents = Math.round((this.wholePart * 100 + this.fractionalPart) * factor);
      const newWholePart = Math.floor(totalCents / 100);
      const newFractionalPart = totalCents % 100;
      
      return new Money(newWholePart, newFractionalPart, this.currency);
    }
  
    isEqual(other: Money): boolean {
      return this.currency === other.currency && 
             this.wholePart === other.wholePart && 
             this.fractionalPart === other.fractionalPart;
    }
  
    isGreaterThan(other: Money): boolean {
      if (this.currency !== other.currency) {
        throw new Error(`Cannot compare different currencies: ${this.currency} and ${other.currency}`);
      }
      
      if (this.wholePart > other.wholePart) {
        return true;
      } else if (this.wholePart === other.wholePart) {
        return this.fractionalPart > other.fractionalPart;
      }
      
      return false;
    }
  }
  