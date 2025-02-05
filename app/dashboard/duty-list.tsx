import { DutyInCity } from "@/lib/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DutyListProps {
  duties: DutyInCity[]
}

export function DutyList({ duties }: DutyListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>?????</TableHead>
          <TableHead>???</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {duties.map((duty) => (
          <TableRow key={duty.FID}>
            <TableCell className="font-medium">{duty.afDutyName}</TableCell>
            <TableCell>{duty.afCityName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}