// Remove "use client"
import PaymentDetails from "@/components/dashboard/payment-details";

export async function generateStaticParams() {
  return [
    { id: "vfSh9zmU" },
    // Add other IDs as needed
  ];
}

// Use Props type for the page component
type Props = {
  params: { id: string };
};

export default function PaymentDetailsPage({ params }: Props) {
  // Access id directly from params prop
  const { id } = params;

  return (
    <div className="container mx-auto py-6">
      <PaymentDetails id={id} />
    </div>
  );
}
