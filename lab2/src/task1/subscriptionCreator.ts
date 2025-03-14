import {
  ISubscription,
  DomesticSubscription,
  EducationalSubscription,
  PremiumSubscription,
} from "./subscription";

export enum SubscriptionType {
  DOMESTIC = "domestic",
  EDUCATIONAL = "educational",
  PREMIUM = "premium",
}

export abstract class SubscriptionCreator {
  abstract createSubscription(type: SubscriptionType): ISubscription;

  processSubscription(type: SubscriptionType): ISubscription {
    const subscription = this.createSubscription(type);
    console.log(`Created ${type} subscription via ${this.constructor.name}`);
    console.log(`Monthly fee: $${subscription.getMonthlyFee()}`);
    console.log(`Minimum period: ${subscription.getMinimumPeriod()} months`);
    console.log(`Channels: ${subscription.getChannels().join(", ")}`);
    console.log(`Features: ${subscription.getFeatures().join(", ")}`);
    console.log("------------------------");
    return subscription;
  }
}

export class WebsiteSubscriptionCreator extends SubscriptionCreator {
  createSubscription(type: SubscriptionType): ISubscription {
    switch (type) {
      case SubscriptionType.DOMESTIC:
        return new DomesticSubscription();
      case SubscriptionType.EDUCATIONAL:
        return new EducationalSubscription();
      case SubscriptionType.PREMIUM:
        return new PremiumSubscription();
      default:
        throw new Error("Unknown subscription type");
    }
  }
}

export class MobileAppSubscriptionCreator extends SubscriptionCreator {
  createSubscription(type: SubscriptionType): ISubscription {
    const subscription = (() => {
      switch (type) {
        case SubscriptionType.DOMESTIC:
          return new DomesticSubscription();
        case SubscriptionType.EDUCATIONAL:
          return new EducationalSubscription();
        case SubscriptionType.PREMIUM:
          return new PremiumSubscription();
        default:
          throw new Error("Unknown subscription type");
      }
    })();

    return {
      getMonthlyFee: () => subscription.getMonthlyFee() * 0.9,
      getMinimumPeriod: () => subscription.getMinimumPeriod(),
      getChannels: () => subscription.getChannels(),
      getFeatures: () => subscription.getFeatures(),
    };
  }
}

export class ManagerCallSubscriptionCreator extends SubscriptionCreator {
  createSubscription(type: SubscriptionType): ISubscription {
    const subscription = (() => {
      switch (type) {
        case SubscriptionType.DOMESTIC:
          return new DomesticSubscription();
        case SubscriptionType.EDUCATIONAL:
          return new EducationalSubscription();
        case SubscriptionType.PREMIUM:
          return new PremiumSubscription();
        default:
          throw new Error("Unknown subscription type");
      }
    })();

    return {
      getMonthlyFee: () => subscription.getMonthlyFee(),
      getMinimumPeriod: () => subscription.getMinimumPeriod(),
      getChannels: () => subscription.getChannels(),
      getFeatures: () => [
        ...subscription.getFeatures(),
        "Personal Manager Support",
      ],
    };
  }
}
