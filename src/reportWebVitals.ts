type MetricType = {
  name: string
  value: number
  delta: number
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFID(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const reportWebVitals = (onPerfEntry?: (metric: unknown) => void) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
//       onCLS(onPerfEntry)
//       onFID(onPerfEntry)
//       onFCP(onPerfEntry)
//       onLCP(onPerfEntry)
//       onTTFB(onPerfEntry)
//     })
//   }
// }
