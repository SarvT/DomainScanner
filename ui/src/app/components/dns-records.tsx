import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// export default function DnsRecords({ records }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>DNS Records</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Type</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Value</TableHead>
//               <TableHead>TTL</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {Object.entries(records).map(([type, entries]) =>
//               entries.map((entry, index) => (
//                 <TableRow key={`${type}-${index}`}>
//                   <TableCell>{type}</TableCell>
//                   <TableCell>{entry.name}</TableCell>
//                   <TableCell>{entry.value}</TableCell>
//                   <TableCell>{entry.ttl}</TableCell>
//                 </TableRow>
//               )),
//             )}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   )
// }


export default function DnsRecords({ records, error }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>DNS Records</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <p className="text-red-500">Error fetching DNS records: {error}</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>TTL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(records).map(([type, entries]) =>
                entries.map((entry, index) => (
                  <TableRow key={`${type}-${index}`}>
                    <TableCell>{type}</TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.value}</TableCell>
                    <TableCell>{entry.ttl}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
