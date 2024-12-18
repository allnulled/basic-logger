(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["BasicLogger"] = mod;
  }
  if (typeof global !== 'undefined') {
    global["BasicLogger"] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const Logger = class {
    static create(...args) {
      return new this(...args);
    }
    static defaultOptions = {
      log: true,
      debug: true,
      trace: false
    };
    constructor(id, options = {}) {
      if(typeof id !== "string") {
        throw new Error("Required parameter «id» to be a string on «Logger.constructor»");
      }
      this.id = id;
      this.options = Object.assign({}, this.constructor.defaultOptions, options);
    }
    log(...args) {
      if (this.options.log) {
        console.log("[LOG][" + this.id + "]", ...args);
      }
    }
    trace(method, args) {
      if(typeof method !== "string") {
        throw new Error("Required parameter «method» to be a string on «Logger.trace»");
      }
      if (this.options.trace) {
        console.log("[TRACE][" + this.id + "][" + method + "]", args.length + ": (" + Array.from(args).map(arg => (typeof arg)).join(", ") + ")");
      }
    }
    debug(...args) {
      if (this.options.debug) {
        console.log("[DEBUG][" + this.id + "]", ...args);
      }
    }
    error(error) {
      console.log("[ERROR.name] " + error.name);
      console.log("[ERROR.code] " + error.message);
      console.log("[ERROR.stack] " + error.stack);
    }
  }
  Logger.default = Logger;
  return Logger;
});