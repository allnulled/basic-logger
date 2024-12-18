const Logger = require(__dirname + "/BasicLogger.js");
const logger = Logger.create("LoggerTest", { trace: 1 });

logger.trace("method", [0,2,4], "append anything else");
logger.debug("debug goes only with strings");
logger.log("log also goes only with strings");