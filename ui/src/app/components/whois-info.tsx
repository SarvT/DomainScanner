import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// export default function WhoisInfo({ info }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>WHOIS Information</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <pre className="whitespace-pre-wrap text-sm">{info}</pre>
//       </CardContent>
//     </Card>
//   )
// }

// export default function WhoisInfo({ info }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>WHOIS Information</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {typeof info === "string" ? (
//           <pre className="whitespace-pre-wrap text-sm">{info}</pre>
//         ) : (
//           <pre className="whitespace-pre-wrap text-sm">
//             {Object.entries(info)
//               .map(([key, value]) => `${key}: ${value}`)
//               .join("\n")}
//           </pre>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

 
export default function WhoisInfo({ info }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WHOIS Information</CardTitle>
      </CardHeader>
      <CardContent>
        {typeof info === "string" ? (
          <pre className="whitespace-pre-wrap text-sm">{info}</pre>
        ) : (
          <dl className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(info).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <dt className="font-semibold capitalize text-gray-700">{key.replace(/_/g, " ")}:</dt>
                <dd className="text-gray-900">
                  {Array.isArray(value) ? value.join(", ") : value || "N/A"}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </CardContent>
    </Card>
  );
}
