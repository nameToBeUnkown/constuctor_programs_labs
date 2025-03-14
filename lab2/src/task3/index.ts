import { Authenticator } from "./authenticator";

export function demonstrateSingleton() {
  console.log("=== Demonstrating Singleton Pattern with Authenticator ===\n");

  const auth1 = Authenticator.getInstance();
  console.log("Instance 1 created");

  const auth2 = Authenticator.getInstance();
  console.log("Instance 2 created");

  console.log("\nChecking if instances are the same:");
  console.log("Instances are identical:", auth1 === auth2);

  console.log("\nTesting authentication with default users:");
  console.log(
    "Admin login successful:",
    auth1.authenticate("admin", "admin123")
  );
  console.log(
    "user1 login successful:",
    auth1.authenticate("user1", "pass123")
  );
  console.log(
    "Invalid login attempt:",
    auth1.authenticate("admin", "wrongpass")
  );

  console.log("\nAdding new user through instance 1");
  auth1.addUser("newuser", "newpass123");

  console.log(
    "Authenticating new user through instance 2:",
    auth2.authenticate("newuser", "newpass123")
  );

  console.log("\nregistered users:");
  console.log(auth2.getRegisteredUsers());

  console.log(
    "\nTrying to create instance directly (TypeScript will prevent this):"
  );
  console.log(
    "// const auth3 = new Authenticator(); // This would cause a compilation error"
  );
}
