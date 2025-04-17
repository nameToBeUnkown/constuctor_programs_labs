export class Logger {
    public Log(message: string): void {
        console.log(`%c[LOG]: ${message}`, 'color: green');
    }

    public Error(message: string): void {
        console.error(`%c[ERROR]: ${message}`, 'color: red');
    }

    public Warn(message: string): void {
        console.warn(`%c[WARN]: ${message}`, 'color: orange');
    }
}