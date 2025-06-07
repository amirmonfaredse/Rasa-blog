export default function MainCard({ children, className }) {
  return (
    <div style={{ backgroundColor: `#BEDBED${50}` }} className={`${className}`}>
      {children}
    </div>
  );
}
