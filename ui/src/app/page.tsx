import DomainScanner from "../app/components/domain-scanner"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Domain Scanner</h1>
      <DomainScanner />
    </main>
  )
}

