export class IDGenerator {
    private static counters: Map<string, number> = new Map();
    
    static generate(prefix: string): string {
      const currentCount = this.counters.get(prefix) || 0;
      const newCount = currentCount + 1;
      this.counters.set(prefix, newCount);
      
      return `${prefix}-${newCount.toString().padStart(5, '0')}`;
    }
  }

  