interface IProps {
  text: string;
  from: number;
  to: number;
}

export const truncateWord = ({from, text, to}: IProps) => {
  return text.length > to ? text.substring(from, to) + "..." : text;
};
export const generateId = (): string =>
  Math.random().toString(36).substring(2, 9);
