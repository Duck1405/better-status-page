import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'

type ServiceStatusProps = {
  name: string
  status: 'operational' | 'degraded' | 'down' | 'unknown'
  uptime: number
}

export function ServiceStatus({ name, status = 'operational', uptime }: ServiceStatusProps) {
  const statusConfig = {
    operational: { 
      color: 'bg-green-500/10 ring-1 ring-green-500/30', 
      iconColor: 'text-green-500',
      icon: CheckCircle, 
      text: 'Operational',
      badgeVariant: 'default'
    },
    degraded: { 
      color: 'bg-yellow-500/10 ring-1 ring-yellow-500/30', 
      iconColor: 'text-yellow-500',
      icon: AlertTriangle, 
      text: 'Degraded',
      badgeVariant: 'warning'
    },
    down: { 
      color: 'bg-red-500/10 ring-1 ring-red-500/30', 
      iconColor: 'text-red-500',
      icon: Activity, 
      text: 'Down',
      badgeVariant: 'destructive'
    },
    unknown: { 
      color: 'bg-gray-500/10 ring-1 ring-gray-500/30', 
      iconColor: 'text-gray-500',
      icon: HelpCircle, 
      text: 'No Data',
      badgeVariant: 'secondary'
    }
  }

  const { color, icon: Icon, text, iconColor, badgeVariant } = statusConfig[status]

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={cn(
              'h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
              color
            )}>
              <Icon className={cn('h-6 w-6 transition-colors', iconColor)} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
              <Badge 
                variant={badgeVariant as 'default' | 'secondary' | 'destructive' | 'outline'}
                className={cn(
                  'text-sm font-medium transition-all duration-300',
                  'group-hover:scale-105'
                )}
              >
                {text}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className={cn(
              'text-2xl font-bold',
              status === 'operational' ? 'text-green-500' :
              status === 'degraded' ? 'text-yellow-500' :
              status === 'down' ? 'text-red-500' : 'text-gray-500'
            )}>
              {uptime.toFixed(2)}%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Uptime</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
