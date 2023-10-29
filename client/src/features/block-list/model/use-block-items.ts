import { useBlockListQuery } from "@/entities/block-list";
import { useState } from "react";

import { useDebouncedValue } from "@/shared/lib/react-std";

export const useBlockItems = () => {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q: useDebouncedValue(q, 500) });
  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
};
