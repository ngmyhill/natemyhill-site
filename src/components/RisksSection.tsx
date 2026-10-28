interface Props { items: string[] }

export default function RisksSection({ items }: Props) {
  return (
    <section>
      <h2>Risks and complications</h2>
      <p>All surgery carries risk. Complications can include:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Dr Myhill will talk through the risks that apply to you at your consultation.</p>
    </section>
  );
}
