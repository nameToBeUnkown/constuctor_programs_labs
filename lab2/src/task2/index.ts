import { IDeviceFactory } from "./devices";
import { GalaxyFactory, IPhoneFactory, XiaomiFactory } from "./factories";

function demonstrateDeviceCreation(factory: IDeviceFactory, brandName: string) {
  console.log(`\n=== Creating ${brandName} devices ===`);

  const laptop = factory.createLaptop();
  console.log("\nLaptop Specifications:");
  console.log(`Model: ${laptop.getModel()}`);
  console.log(`Screen Size: ${laptop.getScreenSize()} inches`);
  console.log(`CPU: ${laptop.getCPU()}`);
  console.log(`RAM: ${laptop.getRAM()}GB`);

  const netbook = factory.createNetbook();
  console.log("\nNetbook Specifications:");
  console.log(`Model: ${netbook.getModel()}`);
  console.log(`Screen Size: ${netbook.getScreenSize()} inches`);
  console.log(`Battery Life: ${netbook.getBatteryLife()} hours`);
  console.log(`Weight: ${netbook.getWeight()}kg`);

  const ebook = factory.createEBook();
  console.log("\nEBook Reader Specifications:");
  console.log(`Model: ${ebook.getModel()}`);
  console.log(`Screen Size: ${ebook.getScreenSize()} inches`);
  console.log(`Storage: ${ebook.getStorageCapacity()}GB`);
  console.log(`Battery Life: ${ebook.getBatteryLife()} hours`);

  const smartphone = factory.createSmartphone();
  console.log("\nSmartphone Specifications:");
  console.log(`Model: ${smartphone.getModel()}`);
  console.log(`Screen Size: ${smartphone.getScreenSize()} inches`);
  console.log(`Camera: ${smartphone.getCameraMP()}MP`);
  console.log(`Battery: ${smartphone.getBatteryCapacity()}mAh`);
}

export function demonstrateDevicesCreation() {
  const iphoneFactory = new IPhoneFactory();
  const xiaomiFactory = new XiaomiFactory();
  const galaxyFactory = new GalaxyFactory();

  demonstrateDeviceCreation(iphoneFactory, "IPhone");
  demonstrateDeviceCreation(xiaomiFactory, "Xiaomi");
  demonstrateDeviceCreation(galaxyFactory, "Galaxy");
}
