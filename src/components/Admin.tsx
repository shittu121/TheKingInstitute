"use client"; // Enable client-side fetching
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Firestore methods
import { db } from "@/lib/firebase"; // Firestore instance from firebase.js
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the structure of a contact
interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp?: {
    seconds: number;
    nanoseconds: number;
  };
}

export function ContactsTable() {
  const [contacts, setContacts] = useState<Contact[]>([]); // State to hold contacts
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch data from Firestore
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts")); // Fetch from "contacts" collection
        const contactsData: Contact[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Contact[]; // Ensure the correct typing for Firestore data
        setContacts(contactsData); // Set fetched contacts
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  return (
    <Table className="mt-40">
      <TableCaption>A list of contacts who have reached out to you.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.message}</TableCell>
              <TableCell className="text-right">
                {contact.timestamp
                  ? new Date(contact.timestamp.seconds * 1000).toLocaleString()
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No contacts found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
