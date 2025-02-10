import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SslInfo({ info }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SSL Certificate Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-semibold">Issuer:</dt>
            <dd>{info.issuer}</dd>
          </div>
          <div>
            <dt className="font-semibold">Valid From:</dt>
            <dd>{info.validFrom}</dd>
          </div>
          <div>
            <dt className="font-semibold">Valid To:</dt>
            <dd>{info.validTo}</dd>
          </div>
          <div>
            <dt className="font-semibold">Subject:</dt>
            <dd>{info.subject}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

