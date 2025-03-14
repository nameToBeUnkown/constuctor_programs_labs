import {
  IDeviceFactory,
  ILaptop,
  INetbook,
  IEBook,
  ISmartphone,
  GalaxyEBook,
  GalaxyLaptop,
  GalaxyNetbook,
  GalaxySmartphone,
  IPhoneEBook,
  IPhoneLaptop,
  IPhoneNetbook,
  IPhoneSmartphone,
  XiaomiEBook,
  XiaomiLaptop,
  XiaomiNetbook,
  XiaomiSmartphone,
} from "./devices";

export class IPhoneFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new IPhoneLaptop();
  }

  createNetbook(): INetbook {
    return new IPhoneNetbook();
  }

  createEBook(): IEBook {
    return new IPhoneEBook();
  }

  createSmartphone(): ISmartphone {
    return new IPhoneSmartphone();
  }
}

export class XiaomiFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new XiaomiLaptop();
  }

  createNetbook(): INetbook {
    return new XiaomiNetbook();
  }

  createEBook(): IEBook {
    return new XiaomiEBook();
  }

  createSmartphone(): ISmartphone {
    return new XiaomiSmartphone();
  }
}

export class GalaxyFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new GalaxyLaptop();
  }

  createNetbook(): INetbook {
    return new GalaxyNetbook();
  }

  createEBook(): IEBook {
    return new GalaxyEBook();
  }

  createSmartphone(): ISmartphone {
    return new GalaxySmartphone();
  }
}
