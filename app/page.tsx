import DarkModeToggle from "@/components/myui/DarkModeToggle";
import Header from "@/components/myui/Header";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuoteRotator } from "@/quotes";
import { allPosts } from "./posts";
import Link from "next/link";
import ClickableRow from "@/components/myui/ClickableRow";


export default function Home() {

  return (
    <div className="p-5">
    <QuoteRotator />
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Date Created</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="w-full">
  {allPosts.map((post) => (
    <ClickableRow slug={`/posts/${post.slug}`} key={post.slug}>
    <TableCell className="w-1/4" key={post.slug}>{post.title}</TableCell>
    <TableCell>{post.category}</TableCell>
    <TableCell>{post.date}</TableCell>
    <TableCell className="text-right">{post.readTime}</TableCell>
    </ClickableRow>
      ))}
      {/* <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell> */}
  </TableBody>
</Table>
</div>
  )
}