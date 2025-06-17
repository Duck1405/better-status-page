import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface RefreshButtonProps {
  onClick: () => void
  loading?: boolean
}

export function RefreshButton({ onClick, loading }: RefreshButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      disabled={loading}
      className="relative"
    >
      <RefreshCw className={cn(
        "h-4 w-4 mr-2 transition-all",
        loading && "animate-spin"
      )} />
      {loading ? "Refreshing..." : "Refresh"}
    </Button>
  )
}