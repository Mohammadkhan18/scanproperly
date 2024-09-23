"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useDeleteCompany, useFetchCompany } from "../../api/api-queries";
import { Button } from "../../../components/ui/button";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ActionDropDown = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const router = useRouter();

  const { mutate: deleteCompany } = useDeleteCompany();

  const handleDelete = () => {
    deleteCompany(id);
  };

  return (
    <DropdownMenu>
      {children}
      <DropdownMenuContent className="w-20 right-0 ">
        <DropdownMenuItem
          className="space-x-3 cursor-pointer"
          onClick={() => {
            router.push(`/company/${id}`);
          }}
        >
          <MdOutlineModeEdit className="text-[20px]" />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="space-x-3 cursor-pointer"
          onClick={handleDelete}
        >
          <MdOutlineDelete className="text-[20px] text-red-500" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CompanyTable = () => {
  const router = useRouter();
  const companyData: any = useFetchCompany();

  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="font-[700] text-[24px] leading-[32px]">Company</h2>

        <Button
          onClick={() => {
            router.push("/company/add-company");
          }}
        >
          <FaPlus />
        </Button>
      </div>
      <Table>
        <TableCaption>A list of companies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">CEO</TableHead>
            <TableHead className="text-center">Country</TableHead>
            <TableHead className="text-center">Establish Year</TableHead>
            <TableHead className="text-center">Broker</TableHead>
            <TableHead className="text-center">Platform use</TableHead>
            <TableHead className="text-center">Trust Pilot Review</TableHead>
            <TableHead className="text-center">Google Review</TableHead>
            <TableHead className="text-end">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companyData?.data?.data?.data?.map(
            (company: {
              _id: string;
              name: string;
              ceo: string;
              country: string;
              establishedYear: string | number;
              broker: string;
              platformUse: string;
              trustPilotReview: string;
              googleReview: string;
            }) => (
              <TableRow key={company._id}>
                <TableCell>{company?.name}</TableCell>
                <TableCell className="text-center">{company?.ceo}</TableCell>
                <TableCell className="text-center">
                  {company?.country}
                </TableCell>
                <TableCell className="text-center">
                  {company?.establishedYear}{" "}
                </TableCell>
                <TableCell className="text-center">{company?.broker}</TableCell>
                <TableCell className="text-center">
                  {company?.platformUse}
                </TableCell>
                <TableCell className="text-center">
                  {company?.trustPilotReview}
                </TableCell>
                <TableCell className="text-center">
                  {company?.googleReview}{" "}
                </TableCell>
                <TableCell>
                  <ActionDropDown id={company._id}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <BsThreeDots />
                      </Button>
                    </DropdownMenuTrigger>
                  </ActionDropDown>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyTable;
