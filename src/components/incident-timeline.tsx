import { Monitor } from '@/types/monitor'
import { cn } from '@/lib/utils'
import { AlertTriangle, XCircle, Clock, CheckCircle } from 'lucide-react'

interface IncidentTimelineProps {
  monitors: Monitor[]
}

export default function IncidentTimeline({ monitors }: IncidentTimelineProps) {
  // Filter monitors with issues (not operational)
  const incidents = monitors
    .filter(monitor => monitor.status !== 'operational')
    .map(monitor => ({
      service: monitor.name,
      status: monitor.status,
      lastCheck: new Date(monitor.lastCheck).toLocaleString(),
      responseTime: monitor.responseTime
    }))

  if (incidents.length === 0) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-green-500/10 p-4 text-sm text-green-600">
        <CheckCircle className="h-5 w-5" />
        <span>All systems are operational</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident, index) => {
        const isDown = incident.status === 'down'
        return (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Timeline line */}
            {index !== incidents.length - 1 && (
              <div className="absolute left-[18px] top-8 h-full w-[2px] bg-border" />
            )}
            {/* Icon */}
            <div className={cn(
              'rounded-full p-1.5',
              isDown ? 'bg-red-500/10' : 'bg-yellow-500/10'
            )}>
              {isDown ? (
                <XCircle className="h-5 w-5 text-red-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">
                  {incident.service}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {incident.lastCheck}
                </div>
              </div>
              <div className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium',
                isDown ? 'bg-red-500/10 text-red-600' : 'bg-yellow-500/10 text-yellow-600'
              )}>
                {isDown ? 'Service Down' : 'Performance Degraded'}
              </div>
              <div className="text-sm text-muted-foreground">
                Response time: {incident.responseTime}ms
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}