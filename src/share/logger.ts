// import path from 'path'
// import { createLogger, format, transports } from 'winston'
// import DailyRotateFile from 'winston-daily-rotate-file'
// const { combine, timestamp, label, printf } = format

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}}`
// })

// const logger = createLogger({
//   level: 'info',
//   format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     new transports.Console(),
//     new DailyRotateFile({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'success',
//         'um-%DATE%-success.log',
//       ),
//       datePattern: 'YYYY-DD-MM-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// })

// const errorLogger = createLogger({
//   level: 'error',
//   format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     new transports.Console(),
//     new DailyRotateFile({
//       filename: path.join(process.cwd(), 'logs', 'errors', 'error.log'),
//       datePattern: 'YYYY-DD-MM-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// })

// export { errorLogger, logger }
