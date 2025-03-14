import { SubscriptionType } from "./subscriptionCreator";
import {
  WebsiteSubscriptionCreator,
  MobileAppSubscriptionCreator,
  ManagerCallSubscriptionCreator,
} from "./subscriptionCreator";

export function demonstrateSubscriptionCreation() {
  const websiteCreator = new WebsiteSubscriptionCreator();
  const mobileAppCreator = new MobileAppSubscriptionCreator();
  const managerCreator = new ManagerCallSubscriptionCreator();

  console.log("=== Creating subscriptions through Website ===");
  websiteCreator.processSubscription(SubscriptionType.DOMESTIC);
  websiteCreator.processSubscription(SubscriptionType.EDUCATIONAL);
  websiteCreator.processSubscription(SubscriptionType.PREMIUM);

  console.log(
    "\n=== Creating subscriptions through Mobile App (10% discount) ==="
  );
  mobileAppCreator.processSubscription(SubscriptionType.DOMESTIC);
  mobileAppCreator.processSubscription(SubscriptionType.EDUCATIONAL);
  mobileAppCreator.processSubscription(SubscriptionType.PREMIUM);

  console.log(
    "\n=== Creating subscriptions through Manager Call (extra features) ==="
  );
  managerCreator.processSubscription(SubscriptionType.DOMESTIC);
  managerCreator.processSubscription(SubscriptionType.EDUCATIONAL);
  managerCreator.processSubscription(SubscriptionType.PREMIUM);
}

