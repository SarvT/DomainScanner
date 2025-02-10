"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDomainInfo } from "../hooks/use-domain-info"
import DomainInfo from "./domain-info"
import DnsRecords from "./dns-records"
import WhoisInfo from "./whois-info"
import SslInfo from "./ssl-info"
import IntegrationPanel from "./integration-panel"

export default function DomainScanner() {
  const [domain, setDomain] = useState("")
  const { data, isLoading, error, scanDomain } = useDomainInfo()

  const handleScan = () => {
    if (domain) {
      scanDomain(domain)
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Enter Domain</CardTitle>
          <CardDescription>Provide a domain name to scan and analyze.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="example.com" value={domain} onChange={(e) => setDomain(e.target.value)} />
            <Button onClick={handleScan} disabled={isLoading}>
              {isLoading ? "Scanning..." : "Scan"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-500">Error: {error}</p>
          </CardContent>
        </Card>
      )}

      {data && (
        <Card>
          <CardHeader>
            <CardTitle>Scan Results for {data.domain}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="domain-info">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="domain-info">Domain Info</TabsTrigger>
                <TabsTrigger value="dns-records">DNS Records</TabsTrigger>
                <TabsTrigger value="whois">WHOIS</TabsTrigger>
                <TabsTrigger value="ssl">SSL</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>
              <TabsContent value="domain-info">
                <DomainInfo info={data.domainInfo} />
              </TabsContent>
              <TabsContent value="dns-records">
                <DnsRecords records={data.dnsRecords} error={data.dns_records?.error} />
              </TabsContent>
              <TabsContent value="whois">
                <WhoisInfo info={data.whoisInfo} />
              </TabsContent>
              <TabsContent value="ssl">
                <SslInfo info={data.sslInfo} />
              </TabsContent>
              <TabsContent value="integrations">
                <IntegrationPanel domain={data.domain} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

