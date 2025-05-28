// app/docs/page.tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Documentació</h1>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Començar és fàcil!</AlertTitle>
        <AlertDescription>
          Afegeix components reutilitzables amb Shadcn UI i estructura el teu projecte amb Next.js.
        </AlertDescription>
      </Alert>
      <p className="text-gray-700">
        Aquesta secció explica com utilitzar l"aplicació, configurar rutes, estils i components.
      </p>
    </div>
  )
}
