declare module '@analytics/google-analytics' {
    export default function googleAnalytics(config: { measurementIds: string[] }): any
}
  
declare module 'analytics' {
    export default function Analytics(config: { app: string; plugins: any[] }): any
}