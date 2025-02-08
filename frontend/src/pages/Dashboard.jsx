import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$180.50" },
  { id: "INV003", status: "Overdue", method: "Bank Transfer", amount: "$320.75" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$100.00" },
  { id: "INV005", status: "Pending", method: "Debit Card", amount: "$220.00" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-700 border border-green-500";
    case "Pending":
      return "bg-yellow-100 text-yellow-700 border border-yellow-500";
    case "Overdue":
      return "bg-red-100 text-red-700 border border-red-500";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-500";
  }
};

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-16"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      {/* Table Section */}
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-6 overflow-x-auto">
        <Table>
          <TableCaption className="text-gray-600 text-lg">
            Recent Invoice Transactions
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-200">
              <TableHead className="w-32 text-left font-semibold">Invoice</TableHead>
              <TableHead className="text-left font-semibold">Status</TableHead>
              <TableHead className="text-left font-semibold">Method</TableHead>
              <TableHead className="text-right font-semibold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all`}
              >
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusStyle(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right font-medium">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Section */}
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
