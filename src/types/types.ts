export type Task = {
  id: number;
  title: string;
  description?: string;
  status: StatusOptionType;
  categories?: string[];
};

export type FilterType = {
  status?: StatusFilterOptionType;
  category?: string;
};

export type StatusOptionType = "complete" | "incomplete";
export type StatusFilterOptionType = "all" | "complete" | "incomplete";
