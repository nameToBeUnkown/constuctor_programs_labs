export interface ISubscription {
  getMonthlyFee(): number;
  getMinimumPeriod(): number;
  getChannels(): string[];
  getFeatures(): string[];
}

export abstract class Subscription implements ISubscription {
  protected monthlyFee: number;
  protected minimumPeriod: number;
  protected channels: string[];
  protected features: string[];

  constructor() {
    this.monthlyFee = 0;
    this.minimumPeriod = 1;
    this.channels = [];
    this.features = [];
  }

  getMonthlyFee(): number {
    return this.monthlyFee;
  }

  getMinimumPeriod(): number {
    return this.minimumPeriod;
  }

  getChannels(): string[] {
    return this.channels;
  }

  getFeatures(): string[] {
    return this.features;
  }
}

export class DomesticSubscription extends Subscription {
  constructor() {
    super();
    this.monthlyFee = 99;
    this.minimumPeriod = 1;
    this.channels = ["News", "Entertainment", "Local Sports"];
    this.features = ["HD Quality", "2 Devices"];
  }
}

export class EducationalSubscription extends Subscription {
  constructor() {
    super();
    this.monthlyFee = 149;
    this.minimumPeriod = 3;
    this.channels = ["Discovery", "History", "Science", "Nature"];
    this.features = [
      "HD Quality",
      "4 Devices",
      "Offline Download",
      "Educational Materials",
    ];
  }
}

export class PremiumSubscription extends Subscription {
  constructor() {
    super();
    this.monthlyFee = 299;
    this.minimumPeriod = 6;
    this.channels = ["All Channels", "Premium Sports", "Movies", "Shows"];
    this.features = [
      "4K Quality",
      "Unlimited Devices",
      "Offline Download",
      "No Ads",
      "Priority Support",
    ];
  }
}
