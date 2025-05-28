// app/pricing/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Plans de preus</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gratuït</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Ideal per començar. Accés limitat a funcionalitats.</p>
            <Button variant="outline" className="w-full">Comença</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Tot el que necessites per a ús professional.</p>
            <Button className="w-full">Subscriu-te</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Solució avançada per a equips grans.</p>
            <Button variant="secondary" className="w-full">Contacta'ns</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

