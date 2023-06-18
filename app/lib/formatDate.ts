export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-EG", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
