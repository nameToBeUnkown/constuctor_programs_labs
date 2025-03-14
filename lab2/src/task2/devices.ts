export interface ILaptop {
  getModel(): string;
  getScreenSize(): number;
  getCPU(): string;
  getRAM(): number;
}

export interface INetbook {
  getModel(): string;
  getScreenSize(): number;
  getBatteryLife(): number;
  getWeight(): number;
}

export interface IEBook {
  getModel(): string;
  getScreenSize(): number;
  getStorageCapacity(): number;
  getBatteryLife(): number;
}

export interface ISmartphone {
  getModel(): string;
  getScreenSize(): number;
  getCameraMP(): number;
  getBatteryCapacity(): number;
}

export interface IDeviceFactory {
  createLaptop(): ILaptop;
  createNetbook(): INetbook;
  createEBook(): IEBook;
  createSmartphone(): ISmartphone;
}

abstract class BaseDevice {
  protected model: string;
  protected screenSize: number;

  constructor(model: string, screenSize: number) {
    this.model = model;
    this.screenSize = screenSize;
  }

  getModel(): string {
    return this.model;
  }

  getScreenSize(): number {
    return this.screenSize;
  }
}

export class IPhoneLaptop extends BaseDevice implements ILaptop {
  private cpu: string;
  private ram: number;

  constructor() {
    super("IPhone MacBook", 13.3);
    this.cpu = "M2";
    this.ram = 16;
  }

  getCPU(): string {
    return this.cpu;
  }

  getRAM(): number {
    return this.ram;
  }
}

export class IPhoneNetbook extends BaseDevice implements INetbook {
  private batteryLife: number;
  private weight: number;

  constructor() {
    super("IPhone Air", 11.6);
    this.batteryLife = 18;
    this.weight = 1.1;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }

  getWeight(): number {
    return this.weight;
  }
}

export class IPhoneEBook extends BaseDevice implements IEBook {
  private storageCapacity: number;
  private batteryLife: number;

  constructor() {
    super("IPhone Reader", 6.8);
    this.storageCapacity = 32;
    this.batteryLife = 24;
  }

  getStorageCapacity(): number {
    return this.storageCapacity;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }
}

export class IPhoneSmartphone extends BaseDevice implements ISmartphone {
  private cameraMP: number;
  private batteryCapacity: number;

  constructor() {
    super("IPhone 15", 6.1);
    this.cameraMP = 48;
    this.batteryCapacity = 3500;
  }

  getCameraMP(): number {
    return this.cameraMP;
  }

  getBatteryCapacity(): number {
    return this.batteryCapacity;
  }
}

export class XiaomiLaptop extends BaseDevice implements ILaptop {
  private cpu: string;
  private ram: number;

  constructor() {
    super("Xiaomi Pro", 15.6);
    this.cpu = "AMD Ryzen 7";
    this.ram = 32;
  }

  getCPU(): string {
    return this.cpu;
  }

  getRAM(): number {
    return this.ram;
  }
}

export class XiaomiNetbook extends BaseDevice implements INetbook {
  private batteryLife: number;
  private weight: number;

  constructor() {
    super("Xiaomi Book", 12.4);
    this.batteryLife = 15;
    this.weight = 1.3;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }

  getWeight(): number {
    return this.weight;
  }
}

export class XiaomiEBook extends BaseDevice implements IEBook {
  private storageCapacity: number;
  private batteryLife: number;

  constructor() {
    super("Xiaomi Paper", 7.8);
    this.storageCapacity = 16;
    this.batteryLife = 30;
  }

  getStorageCapacity(): number {
    return this.storageCapacity;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }
}

export class XiaomiSmartphone extends BaseDevice implements ISmartphone {
  private cameraMP: number;
  private batteryCapacity: number;

  constructor() {
    super("Xiaomi Note", 6.67);
    this.cameraMP = 108;
    this.batteryCapacity = 5000;
  }

  getCameraMP(): number {
    return this.cameraMP;
  }

  getBatteryCapacity(): number {
    return this.batteryCapacity;
  }
}

export class GalaxyLaptop extends BaseDevice implements ILaptop {
  private cpu: string;
  private ram: number;

  constructor() {
    super("Galaxy Book", 15.6);
    this.cpu = "Intel i7";
    this.ram = 16;
  }

  getCPU(): string {
    return this.cpu;
  }

  getRAM(): number {
    return this.ram;
  }
}

export class GalaxyNetbook extends BaseDevice implements INetbook {
  private batteryLife: number;
  private weight: number;

  constructor() {
    super("Galaxy Go", 11.6);
    this.batteryLife = 12;
    this.weight = 1.2;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }

  getWeight(): number {
    return this.weight;
  }
}

export class GalaxyEBook extends BaseDevice implements IEBook {
  private storageCapacity: number;
  private batteryLife: number;

  constructor() {
    super("Galaxy Reader", 7);
    this.storageCapacity = 8;
    this.batteryLife = 20;
  }

  getStorageCapacity(): number {
    return this.storageCapacity;
  }

  getBatteryLife(): number {
    return this.batteryLife;
  }
}

export class GalaxySmartphone extends BaseDevice implements ISmartphone {
  private cameraMP: number;
  private batteryCapacity: number;

  constructor() {
    super("Galaxy S23", 6.8);
    this.cameraMP = 200;
    this.batteryCapacity = 5000;
  }

  getCameraMP(): number {
    return this.cameraMP;
  }

  getBatteryCapacity(): number {
    return this.batteryCapacity;
  }
}
