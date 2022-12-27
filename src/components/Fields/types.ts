export interface IInput {
  placeholder?: string;
  size?: "small" | "large" | "middle";
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}
