import { notFound } from "next/navigation";
import { getRuleById } from "@/data/rules";
import RuleModal from "@/components/RuleModal";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ModalPage({ params }: Props) {
  const { id } = await params;
  const rule = getRuleById(Number(id));
  if (!rule) notFound();

  return <RuleModal rule={rule} />;
}
