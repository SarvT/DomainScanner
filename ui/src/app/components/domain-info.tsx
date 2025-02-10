import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DomainInfo({ info }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Domain Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-semibold">Registrar:</dt>
            <dd>{info.registrar}</dd>
          </div>
          <div>
            <dt className="font-semibold">Creation Date:</dt>
            <dd>{info.creationDate}</dd>
          </div>
          <div>
            <dt className="font-semibold">Expiration Date:</dt>
            <dd>{info.expirationDate}</dd>
          </div>
          <div>
            <dt className="font-semibold">Name Servers:</dt>
            <dd>{info.nameServers.join(", ")}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

