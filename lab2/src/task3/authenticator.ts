export class Authenticator {
  private static instance: Authenticator | null = null;
  private static instanceLock: boolean = false;

  private users: Map<string, string> = new Map();

  private constructor() {
    this.users.set("admin", "admin123");
    this.users.set("user1", "pass123");
  }

  public static getInstance(): Authenticator {
    if (!Authenticator.instance) {
      if (!Authenticator.instanceLock) {
        Authenticator.instanceLock = true;
        Authenticator.instance = new Authenticator();
      }
    }
    return Authenticator.instance!;
  }

  public authenticate(username: string, password: string): boolean {
    return this.users.get(username) === password;
  }

  public addUser(username: string, password: string): void {
    this.users.set(username, password);
  }

  public removeUser(username: string): void {
    this.users.delete(username);
  }

  public getRegisteredUsers(): string[] {
    return Array.from(this.users.keys());
  }
}
