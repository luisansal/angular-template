export enum LogLevel {
  Off = 0,
  Error,
  Warning,
  Info,
  Debug,
}

export type LogOutput = (
  source: string | undefined,
  level: LogLevel,
  ...objects: any[]
) => void;

export class Logger {
  static level = LogLevel.Debug;
  static outputs: LogOutput[] = [];

  static enableProductionMode() {
    Logger.level = LogLevel.Warning;
  }

  constructor(private source?: string) {}

  debug(...objects: any[]) {
    this.log(console.log, LogLevel.Debug, objects);
  }

  // tslint:disable: no-console
  info(...objects: any[]) {
    this.log(console.info, LogLevel.Info, objects);
  }

  warn(...objects: any[]) {
    this.log(console.warn, LogLevel.Warning, objects);
  }

  error(...objects: any[]) {
    this.log(console.error, LogLevel.Error, objects);
  }

  private log(func: (...args: any[]) => void, level: LogLevel, objects: any[]) {
    if (level <= Logger.level) {
      const log = this.source
        ? [`%c${this.source}`, `background: #b52f31; color: white; padding: 2px 0.5em; border-radius: 0.5em;`].concat(objects)
        : objects;
      func.apply(console, log);
      Logger.outputs.forEach(output =>
        output.apply(output, [this.source, level, ...objects])
      );
    }
  }
}
